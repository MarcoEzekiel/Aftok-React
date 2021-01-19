// src/Tracker.js
import 'react-big-calendar/lib/css/react-big-calendar.css';
import '../css/tracker.css'

import React from 'react'
import moment from 'moment'
import { Calendar, Views, momentLocalizer } from 'react-big-calendar'
import interact from 'interactjs'

const localizer = momentLocalizer(moment)
// for react big calender
let allViews = Object.keys(Views).map(k => Views[k])



class Tracker extends React.Component {

    constructor(props) {
        super(props);
        console.log(props)
//F09818
        this.state = {
            error: null,
            isLoaded: false,
            intervals: [],
            groups: [],
            items: [],
            startTime: Date.now(),
            hrs: [],
            events: [],
            colors: ['#F09818',
                '#F58A67',
                '#DE6897',
                '#C367F5',
                '#6366EB',
                '#ff4534',
                '#ff7c16',
                '#ffa600'],
            colorsOffset: ['#E09818',
                '#F58D67',
                '#DE6897',
                '#BD67F5',
                '#6372EB',
                '#dd4534',
                '#dd7c16',
                '#dda600'],
            totalHours: [],
            intervalsInitialWidth: 0,
            days: []
        };
        this.buildIntervals = this.buildIntervals.bind(this);

        interact('.resize-drag')
            .resizable({
                // resize from all edges and corners
                edges: { left: true, right: true, bottom: true, top: true },

                listeners: {
                    move(event) {
                        var target = event.target
                        var x = (parseFloat(target.getAttribute('data-x')) || 0)
                        var y = (parseFloat(target.getAttribute('data-y')) || 0)

                        // update the element's style
                        target.style.width = event.rect.width + 'px'
                        target.style.height = event.rect.height + 'px'

                        // translate when resizing from top or left edges
                        x += event.deltaRect.left
                        y += event.deltaRect.top

                        target.style.webkitTransform = target.style.transform =
                            'translate(' + x + 'px,' + y + 'px)'

                        target.setAttribute('data-x', x)
                        target.setAttribute('data-y', y)
                        target.textContent = Math.round(event.rect.width) + '\u00D7' + Math.round(event.rect.height)
                    }
                },
                modifiers: [
                    // keep the edges inside the parent
                    interact.modifiers.restrictEdges({
                        outer: 'parent'
                    }),

                    // minimum size
                    interact.modifiers.restrictSize({
                        min: { width: 1, height: 26 },
                        max: { width: 2000, height: 26 }
                    })
                ],

                inertia: true
            })
            .draggable({
                listeners: { move: window.dragMoveListener },
                inertia: true,
                modifiers: [
                    interact.modifiers.restrictRect({
                        restriction: 'parent',
                        endOnly: true
                    })
                ]
            })
    }


    eventStyleGetter = (event) =>{
        var style = {
            backgroundColor: event.color,
            borderRadius: '0px',
            opacity: 0.8,
            color: 'black',
            border: '0px',
            display: 'block',
            fontSize: '.8em'
        };
        return {
            style: style
        };
    };

    isoNow = () =>{
        var myDate = new Date(); // Set this to your date in whichever timezone.
        var isoDate = myDate.toISOString();
        return isoDate
    };

    uuidv4 = () =>{
        return ([1e7] + -1e3 + -4e3 + -8e3 + -1e11).replace(/[018]/g, c =>
            (c ^ crypto.getRandomValues(new Uint8Array(1))[0] & 15 >> c / 4).toString(16)
        );
    }


    componentDidMount() {

        // establish initial timeline width
        let box = document.querySelector('#timelines');
        let width = box.offsetWidth;
        this.setState({ intervalsInitialWidth: width })
        console.log(this.props.workIndex)
        this.props.workIndex.workIndex !== undefined ? this.buildIntervals(this.props.workIndex, true) : console.log('waiting to select project')

    }

    buildIntervals = (result, isLoaded) =>{
        var groups = []
        var startTime = Date.now()
        var hours = []
        var events = []
        var totalHours = []
        let toLoop = [result]
        let days = [];
        let index = "";
        let day = "";
        let intervals;
        toLoop.forEach(function (contributer) {

            contributer.workIndex.forEach(function (c, i, a) {

                // _timeline
                let id = i + 1;
                let creditTo = c.creditTo.creditToUser + ' ' + c.creditTo.schemaVersion
                let group = { id: id, title: creditTo }

                groups.push(group);

                c.intervals.forEach(function (c, i, a) {

                    startTime = Math.min(startTime, new Date(c.start))

                    // from the start of the event till midnight
                    // start date
                    let mmt = moment(new Date(c.start));
                    //  start date at midnight
                    let mmtMidnight = mmt.clone().startOf('day');
                    // Difference in minutes
                    let diffMinutes = mmt.diff(mmtMidnight, 'minutes');

                    let eventLenInHrs = (new Date(c.end) - new Date(c.start)) / (1000 * (60 * 60))
                    let title = eventLenInHrs.toFixed(2) + " Hrs. ";
                    let endOfEventOrDay = moment(new Date(c.end));
                    let startOfEventOrDay = moment(new Date(c.start))
                    // get from server
                    let eventId = this.uuidv4.toString
                    let event2;
                    let event1;
                    let color;
                    let calcLen;

                    // if event spans days
                    if (moment(new Date(c.start)).format('DD') !== moment(new Date(c.end)).format('DD')) {
                        //console.log("event exends past midnight")
                        // use array @ id for this user offset visualy groups events extending past 24 hrs
                        color = this.state.colorsOffset[id - 1]

                        // 1st half of event
                        // helps calculate length as percentage of day
                        calcLen = (new Date(c.start).setHours(23, 59, 59, 59) - new Date(c.start)) / (1000 * (60 * 60))
                        event1 = {
                            'title': title,
                            'allDay': false,
                            'start': startOfEventOrDay,
                            'end': endOfEventOrDay, // 2.00 PM 
                            'color': color,
                            'lengthAsPercentageOfDay': (calcLen / 24 * 100).toFixed(2),
                            'startTimeAsPercentageOfDay': (diffMinutes / (24 * 60) * 100).toFixed(2),
                            'id': eventId
                        }
                        // put into array
                        intervals = new Array;
                        intervals.push(event1)
                        // c. start is ist day         
                        day = moment(new Date(c.start)).format('YYYYMMDD')

                        // if the day doesn't exist add it to the days array
                        if ((days.findIndex((element) => element.day === day) === -1)
                        ) {
                            //console.log('1st event day exists')
                            days.push({ day: day, intervals: intervals })
                        }
                        else {
                            // else get the existing day and add event to its array
                            //console.log('1st event a new day')
                            intervals = new Array;
                            index = days.findIndex((element) => element.day === day);

                            intervals.push(days[index].intervals[0])
                            intervals.push(event1)
                            let newDay = { day: day, intervals: intervals }
                            days.push(newDay)
                            //delete the original as it has been cloned and added
                            days.splice(index, 1)
                        }
                        // end first half of event


                        // 2nd half of event
                        // helps calculate length as percentage of day
                        calcLen = (new Date(c.end) - new Date(c.end).setHours(0, 0, 0, 0)) / (1000 * (60 * 60))

                        event2 = {
                            'title': title,
                            'allDay': false,
                            'start': startOfEventOrDay,
                            'end': endOfEventOrDay, // 2.00 PM 
                            'color': color,
                            'lengthAsPercentageOfDay': (calcLen / 24 * 100).toFixed(2),
                            'startTimeAsPercentageOfDay': 0,
                            'id': eventId
                        }
                        // put into array
                        intervals = new Array;
                        intervals.push(event2)
                        // c. end is 2nd day
                        console.log(c.end)
                        day = moment(new Date(c.end)).format('YYYYMMDD')
                        console.log(day)
                        // if the day doesn't exist add it to the days array
                        if ((days.findIndex((element) => element.day === day) === -1)
                        ) {
                            //console.log('2nd event day exists')
                            days.push({ day: day, intervals: intervals })
                        }
                        else {
                            // else get the existing day and add event to its array
                            // console.log('2nd event a new day')

                            intervals = new Array;
                            index = days.findIndex((element) => element.day === day);
                            intervals.push(days[index].intervals[0])
                            intervals.push(event2)
                            let newDay = { day: day, intervals: intervals }
                            days.push(newDay)
                            //delete the original as it has been cloned and added
                            days.splice(index, 1)

                        }
                        // end 2nd half of event 
                    }
                    else {
                        //console.log("event does not extends past midnight") 
                        color = this.state.colors[id - 1]
                        let event = {
                            'title': title,
                            'allDay': false,
                            'start': startOfEventOrDay, // 10.00 AM
                            'end': endOfEventOrDay, // 2.00 PM 
                            'color': color,
                            'lengthAsPercentageOfDay': (eventLenInHrs / 24 * 100).toFixed(2),
                            'startTimeAsPercentageOfDay': (diffMinutes / (24 * 60) * 100).toFixed(2),
                            'id': eventId
                        }

                        events.push(event)

                        day = day = moment(new Date(c.start)).format('YYYYMMDD')

                        intervals = new Array;
                        index = days.findIndex((element) => element.day === day);
                        intervals.push(event)

                        if (index === -1) {
                            days.push({ day: day, intervals: intervals })
                        } else {
                            intervals = new Array;
                            intervals.push(days[index].intervals[0])
                            intervals.push(event)
                            let newDay = { day: day, intervals: intervals }
                            days.push(newDay)
                            //console.log(days[index])
                            days.splice(index, 1)
                            //console.log(days.length)
                        }
                    }

                }, this, id, creditTo, contributer);

            }, this);

        }, this);

        // set state here
        days.sort(function (a, b) { return a.day - b.day }).reverse();
        this.setState({
            groups: groups,
            startTime: startTime,
            events: events,
            totalHours: totalHours,
            hrs: hours,
            intervals: [result],
            isLoaded: true,
            days: days
        })
    }

    componentDidUpdate(prevProps) {
        if(this.props.workIndex !== prevProps.workIndex) 
        {
          this.buildIntervals(this.props.workIndex,true)
        }
      }

    render() {
        
        const timelines = this.state.days.map((key, i) => {

            let timelineIntervals = [];

            key.intervals.forEach(element => {

                timelineIntervals.push(<div class="resize-drag"
                    style={{ left: element.startTimeAsPercentageOfDay + '%', width: element.lengthAsPercentageOfDay + '%', backgroundColor: element.color }}>
                    {element.start.format('h:mm a')}-{element.end.format('h:mm a')} {element.id}
                </div>)
            }, this);

            return (
                <div className="row timeline" key={this.uuidv4()}>
                    <div className="timelineDate">{key.day.substring(4, 6)}-{key.day.substring(6, 8)}-{key.day.substring(0, 4)}</div>{timelineIntervals}
                </div>

            );
        }, this);

        const projects = () => {
            let selects = [];
            if(this.props.projects !== false){
            this.props.projects.forEach(element =>
                selects.push(<option value={element.projectId} >{element.project.projectName}</option>)
            );
            }
            let getInitialState = () => {
                return {
                    value: 'select'
                }
            }
            let change = (event) => {
                this.setState({ value: event.target.value });
                this.props.handleSelectedProjectState(event.target.value)

            }

            return (
                <div className="row pt-6">
                    <div className="col-md-12 form-group">
                        <label className="sr-only" >Project</label>
                        <select className="form-control" id="projectSelect" onChange={change} value={this.props.selectedProject}>
                            <option defaultValue value="select" disabled="">Select a project</option>
                            {selects}
                        </select>
                    </div>
                </div>
            );

        }
        
        return (

            <div className="container-fluid">
                <div className="row">
                    <div className="col-md-2">
                    </div>

                    <div className="col-md-8">
                        <div className="row">
                            <div className="col-md-12">
                                <div className="row">
                                    <div className="col-md-12">
                                        <h3>Time Tracker</h3>
                                    </div>
                                </div>

                                <section className="" id="projectSelector">
                                    {projects()}
                                    <div className="row pt-6">
                                        <div className="col-md-2">
                                            <button id="startWork" className={this.props.workStarted === false ? "btn btn-primary float-left my-2" : "btn btn-primary float-left my-2 btn-disable"} onClick={this.props.startWorkHandler}>Start Work</button>
                                            {/* to do make component*/}
                                            <div id="startModal" className="action-modal">
                                                <div className="action-modal-content container">
                                                    <div className="row">
                                                        <div className="col-md-12">
                                                            <span className="close" id="closeStartModal">&times;</span>
                                                            <div>Hi! what are you working on today ?</div>
                                                            <textarea id="startWorkIntent" name="startWorkIntent" className="pretty-textarea" rows="4" cols="80" defaultValue="Intent">

                                                            </textarea>
                                                        </div>
                                                    </div>
                                                    <div className="row">
                                                        <div className="col-md-4">
                                                            <button id="start" className="modal-action">Start</button>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-md-10">

                                            <button id="stopWork" className={this.props.workStarted === false ? "btn btn-primary float-right my-2 btn-disable" : "btn btn-primary float-right my-2"} onClick={this.props.stopWorkHandler}>Stop Work</button>
                                        </div>
                                        <div id="stopModal" className="action-modal">
                                            <div className="action-modal-content container">
                                                <div className="row">
                                                    <div className="col-md-12">
                                                        <span className="close" id="closeStopModal">&times;</span>
                                                        <div>Hi! What did you get done, any blockers ?</div>
                                                        <textarea id="startWorkIntent" name="startWorkIntent" className="pretty-textarea" rows="4" cols="80" defaultValue="Accomplished / Blockers?">

                                                        </textarea>
                                                    </div>
                                                </div>
                                                <div className="row">
                                                    <div className="col-md-4">
                                                        <button id="stop" className="modal-action">Stop</button>
                                                    </div>
                                                    <div className="col-md-4">
                                                        <div className="modal-action">
                                                            Blocker?
                                                    <input type="checkbox" id="blocker" />
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </section>
                            </div>
                        </div>
                    </div>

                    <div className="col-md-2">

                    </div>
                </div>

                <section className="timelines">
                    <div className="row">
                        <div className="col-md-2">

                        </div>
                        <div className="col-md-8" id="timelines">
                            {timelines}
                        </div>
                        <div className="col-md-2">

                        </div>
                    </div>
                </section>
            </div>
        )
    }
}
export default Tracker
