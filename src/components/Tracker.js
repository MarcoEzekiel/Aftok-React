// src/Tracker.js
import 'react-big-calendar/lib/css/react-big-calendar.css';
import '../css/tracker.css'

import React from 'react'
import IntervalsHarness from "../IntervalsHarness"
import moment from 'moment'
import { Calendar, Views, momentLocalizer } from 'react-big-calendar'
import interact from 'interactjs'
import AuctionHarness from "../AuctionsHarness"

const localizer = momentLocalizer(moment)
let allViews = Object.keys(Views).map(k => Views[k])



class Tracker extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
            error: null,
            isLoaded: false,
            workStarted: false,
            intervals: [],
            groups: [],
            items: [],
            startTime: Date.now(),
            hrs: [],
            events: [],
            colors: ['#0000dd',
                '#a200be',
                '#dd0099',
                '#ff0074',
                '#ff0052',
                '#ff4534',
                '#ff7c16',
                '#ffa600'],
            colorsOffset: ['#0000aa',
                '#72009e',
                '#aa0099',
                '#dd0074',
                '#dd0052',
                '#dd4534',
                '#dd7c16',
                '#dda600'],
            totalHours: [],
            intervalsInitialWidth: 0,
            days: []
        };
        this.getWorkIndex = this.getWorkIndex.bind(this);
        this.getProjects = this.getProjects.bind(this);
        this.startWorkHandler = this.startWorkHandler.bind(this);
        this.stopWorkHandler = this.stopWorkHandler.bind(this);
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
                        min: { width: 1, height: 20 },
                        max: { width: 2000, height: 20 }
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


    eventStyleGetter(event) {
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

    isoNow() {
        var myDate = new Date(); // Set this to your date in whichever timezone.
        var isoDate = myDate.toISOString();
        return isoDate
    };

    uuidv4() {
        return ([1e7] + -1e3 + -4e3 + -8e3 + -1e11).replace(/[018]/g, c =>
            (c ^ crypto.getRandomValues(new Uint8Array(1))[0] & 15 >> c / 4).toString(16)
        );
    }

    startWorkHandler(event) {

<<<<<<< HEAD
        const apiUrl = "https://172.21.0.3/api/user/projects/091be765-7493-426f-8203-be611ab3ea13/logStart"
        let body = { schemaVersion: "2.0" }
=======
        const apiUrl = "/api/user/projects/091be765-7493-426f-8203-be611ab3ea13/logStart"
        let  body = {schemaVersion: "2.0"}
>>>>>>> e962d203e737d028f9e9500b36b05a6b1e411f20

        fetch(apiUrl, {
            body: JSON.stringify(body),
            method: 'POST',
        })
            .then(
                (result) => {
                    this.setState({
                        workStarted: true,
                    });
                },
                // Note: it's important to handle errors here
                // instead of a catch() block so that we don't swallow
                // exceptions from actual bugs in components.
                (error) => {
                    this.props.loggedInHandler(false)
                    this.setState({
                        loggedIn: false,
                        error
                    });
                }
            )

        event.preventDefault();
    }


<<<<<<< HEAD
    stopWorkHandler(event) {
        const apiUrl = "https://172.21.0.3/api/user/projects/091be765-7493-426f-8203-be611ab3ea13/logEnd"
        let body = { schemaVersion: "2.0" }
=======
    stopWorkHandler(event){
        const apiUrl = "/api/user/projects/091be765-7493-426f-8203-be611ab3ea13/logEnd"
        let  body = {schemaVersion: "2.0"}
>>>>>>> e962d203e737d028f9e9500b36b05a6b1e411f20

        fetch(apiUrl, {
            body: JSON.stringify(body),
            method: 'POST',
        })
            .then(
                (result) => {
                    this.setState({
                        workStarted: false,
                    });
                },
                // Note: it's important to handle errors here
                // instead of a catch() block so that we don't swallow
                // exceptions from actual bugs in components.
                (error) => {
                    this.props.loggedInHandler(false)
                    this.setState({
                        loggedIn: false,
                        error
                    });
                }
            )

        event.preventDefault();
    }


    getProjects() {
<<<<<<< HEAD

        const apiUrl = "https://172.21.0.3/api/projects"
=======
       
        const apiUrl = "/api/projects" 
>>>>>>> e962d203e737d028f9e9500b36b05a6b1e411f20
        fetch(apiUrl, {
            method: 'GET',
            headers: { 'Content-Type': 'text/application' },
            credentials: 'include',
            cache: 'default'
        }, this)
            .then(res => res.json())
            .then(
                (result) => {
                    console.log(result);
                }, this,
                // Note: it's important to handle errors here
                // instead of a catch() block so that we don't swallow
                // exceptions from actual bugs in components.
                (error) => {
                    this.setState({
                        isLoaded: false,
                        error
                    });
                }
            )
    }

    getWorkIndex() {
<<<<<<< HEAD

        const apiUrl = "https://172.21.0.3/api/projects/091be765-7493-426f-8203-be611ab3ea13/workIndex?limit=100&before=" + this.isoNow()
=======
       
        const apiUrl = "/api/projects/091be765-7493-426f-8203-be611ab3ea13/workIndex?limit=100&before=" + this.isoNow()
>>>>>>> e962d203e737d028f9e9500b36b05a6b1e411f20

        fetch(apiUrl, {
            method: 'GET',
            headers: { 'Content-Type': 'text/application' },
            credentials: 'include',
            cache: 'default'
        }, this)
            .then(res => res.json())
            .then(
                (result) => {
                    this.buildIntervals(result, true)
                }, this,
                // Note: it's important to handle errors here
                // instead of a catch() block so that we don't swallow
                // exceptions from actual bugs in components.
                (error) => {
                    this.setState({
                        isLoaded: false,
                        error
                    });
                }
            )
    }


    componentDidMount() {

        function percentage(partialValue, totalValue) {
            return (100 * partialValue) / totalValue;
        }
        let twohrstime = 120;
        let perc = percentage(twohrstime, (24 * 60))

        let startTimePercentage = percentage((8 * 60), 24 * 60)


        let box = document.querySelector('#timelines');
        let width = box.offsetWidth;
        console.log(width)
        this.setState({ intervalsInitialWidth: width })


        let hourSize = width / 24
        this.getWorkIndex();
       
        /** 
        const RSS_URL = `https://electriccoin.co/blog/feed/`;

        fetch(RSS_URL, {
            mode: 'no-cors',
            header: {
                'Access-Control-Allow-Origin':'*',
            }
        })
        .then(response => response.text())
        .then(str => new window.DOMParser().parseFromString(str, "text/xml"))
        .then(data => console.log(data))
        */


    }
    auctionSideDiv() {
      //  console.log(AuctionHarness.PendingHarness)
    }

    buildIntervals(result, isLoaded) {
        var groups = []
        var startTime = Date.now()
        var hours = []
        var events = []
        var totalHours = []
        let toLoop = [result]
        let days = [];
        let index = "";
        let day = "";


        console.log(result)
        toLoop.forEach(function (contributer) {

            contributer.workIndex.forEach(function (c, i, a) {

                // _timeline
                let id = i + 1;
                let creditTo = c.creditTo.creditToUser + ' ' + c.creditTo.schemaVersion
                let group = { id: id, title: creditTo }


                groups.push(group);

                c.intervals.forEach(function (c, i, a) {

                    startTime = Math.min(startTime, new Date(c.start))
                    // start date
                    let mmt = moment(new Date(c.start));
                    //  start date at midnight
                    let mmtMidnight = mmt.clone().startOf('day');
                    // Difference in minutes
                    let diffMinutes = mmt.diff(mmtMidnight, 'minutes');

                    let eventLenInHrs = (new Date(c.end) - new Date(c.start)) / (1000 * (60 * 60))
                    let title = eventLenInHrs.toFixed(2) + " Hrs. ";
                    let endOfEventOrDay= moment(new Date(c.end));
                    let startOfEventOrDay=moment(new Date(c.start))
                    // get from server
                    let eventId = this.uuidv4.toString
                    let event2;
                    let color = this.state.colors[id - 1]


                    index = days.findIndex((element) => element.day === c.start.substring(0, 10).replace(/-/g,''));

                    // if day goes till 2morrow
                    if(moment(new Date(c.start)).format('DD')!==moment(new Date(c.end)).format('DD')){
                        eventLenInHrs = (new Date(c.end).setHours(0,0,0,0) - new Date(c.start)) / (1000 * (60 * 60))
                        endOfEventOrDay=moment(new Date(c.start)).endOf('day');
                        startOfEventOrDay=moment(new Date(c.start)).startOf('day');
                        color = this.state.colorsOffset[id - 1]
                        let calcLen = (new Date(c.end) - new Date(c.end).setHours(0,0,0,0)) / (1000 * (60 * 60))
                        event2 = {
                            'title': title,
                            'allDay': false,
                            'start': moment(new Date(c.end)).startOf('day'),
                            'end': moment(new Date(c.end)), // 2.00 PM 
                            'color': color,
                            'lengthAsPercentageOfDay': (calcLen / 24 * 100).toFixed(2),
                            'startTimeAsPercentageOfDay': 0,
                            'id' :eventId
                        }
                        let overflowArray = new Array;
                        overflowArray.push(event2)

                        if((days.findIndex((element) => element.day === c.end.substring(0, 10).replace(/-/g,'')) === -1)
                        ){
                            console.log(day)
                            day = c.start.substring(0, 10).replace(/-/g,'')
                            days.push({ day: day, intervals: overflowArray })
                        }
                        else{
                            console.log('boo')
                           let intervals=new Array;
                           let indexNextDay = days.findIndex((element) => element.day === c.start.substring(0, 10).replace(/-/g,''));
                           index = days.findIndex((element) => element.day === c.end.substring(0, 10).replace(/-/g,''));
                           console.log(days[indexNextDay])
                           intervals.push(days[indexNextDay].intervals)
                           day = c.end.substring(0, 10).replace(/-/g,'')
                           /** 
                           let event = {
                            'title': title,
                            'allDay': false,
                            'start': startOfEventOrDay, // 10.00 AM
                            'end': endOfEventOrDay, // 2.00 PM 
                            'color': color,
                            'lengthAsPercentageOfDay': (eventLenInHrs / 24 * 100).toFixed(2),
                            'startTimeAsPercentageOfDay': (diffMinutes / (24 * 60) * 100).toFixed(2),
                            'id' :eventId
                            }
                           intervals.push(event)
                           day = c.start.substring(0, 10).replace(/-/g,'')
                           let newDay = { day: day, intervals: intervals }
                           days.push(newDay)
                           days.splice(indexNextDay,1)
                           */
                        }
                    }

                    let event = {
                        'title': title,
                        'allDay': false,
                        'start': startOfEventOrDay, // 10.00 AM
                        'end': endOfEventOrDay, // 2.00 PM 
                        'color': color,
                        'lengthAsPercentageOfDay': (eventLenInHrs / 24 * 100).toFixed(2),
                        'startTimeAsPercentageOfDay': (diffMinutes / (24 * 60) * 100).toFixed(2),
                        'id' :eventId
                    }

                    events.push(event)

                    //day = c.start.substring(0, 10).replace(/-/g,'')
         
                    let initArray = new Array;
                    initArray.push(event)
                    if (index === -1 ){
                        days.push({ day: day, intervals: initArray })
                    }else{
                       let intervals=new Array;
                       intervals.push(days[index].intervals[0])
                       intervals.push(event)
                       let newDay = { day: day, intervals: intervals }
                       days.push(newDay)
                       //console.log(days[index])
                       days.splice(index,1)
                       //console.log(days.length)
                    }
                   

                    //days.pushIfNotExist(c.start.substring(0, 10),days.inArray(c.start.substring(0, 10)))

                    var start = moment(new Date(c.start));
                    var end = moment(new Date(c.end));

                    let diff = end.diff(start) / 12000000

                    totalHours.push(diff)

                    let hr = { creditTo: creditTo, ttl: diff }
                    let chk = hours.filter(x => x.creditTo === creditTo)

                    if (Array.isArray(chk) && chk.length === 0) {
                        hours.push(hr)
                        //this.setState({ hrs: hours })

                    }
                    else {

                        var removeIndex = hours.map(function (item) { return item.creditTo; }).indexOf(creditTo);
                        hours.splice(removeIndex, 1);

                        let newTtl = chk[0].ttl + diff;

                        hr = { creditTo: creditTo, ttl: newTtl }
                        hours.push(hr)
                    }

                }, this, id, creditTo, contributer);

            }, this);

        }, this);


        AuctionHarness.PendingHarness.forEach(function (c, i, a) {
            //  console.log(c)
            let days = (new Date(c.voteCloses) - new Date(c.voteOpens)) / (1000 * (60 * 60) * 24)
            //    console.log(days)
            for (var i = 0; i < days; i++) {
                let event = {
                    'title': "P : " + c.need,
                    'allDay': false,
                    'start': moment(c.start).add(i, 'days'), // 10.00 AM
                    'end': moment(c.start).add(i, 'days').add(1, 'hours'), // 2.00 PM 
                    'color': '#e0fd6f'
                }
                events.push(event)
            }
        }, this);

        AuctionHarness.VotingHarness.forEach(function (c, i, a) {
            //  console.log(c)
            let days = (new Date(c.voteCloses) - new Date(c.voteOpens)) / (1000 * (60 * 60) * 24)
            //  console.log(days)
            for (var i = 0; i < days; i++) {
                let event = {
                    'title': "V : " + c.need,
                    'allDay': false,
                    'start': moment(c.start).add(i, 'days'), // 10.00 AM
                    'end': moment(c.start).add(i, 'days').add(1, 'hours'), // 2.00 PM 
                    'color': '#8dda75'
                }
                events.push(event)
            }
        }, this);

        AuctionHarness.BiddingHarness.forEach(function (c, i, a) {
            //  console.log(c)
            let days = (new Date(c.voteCloses) - new Date(c.voteOpens)) / (1000 * (60 * 60) * 24)
            //   console.log(days)
            for (var i = 0; i < days; i++) {
                let event = {
                    'title': "A : " + c.need,
                    'allDay': false,
                    'start': moment(c.start).add(i, 'days'), // 10.00 AM
                    'end': moment(c.start).add(i, 'days').add(1, 'hours'), // 2.00 PM 
                    'color': '#8c0c2c'
                }
                events.push(event)
            }
        }, this);

        this.getProjects();
        // set state here
       // console.log(days)
        days.sort(function(a, b){return a.day - b.day}).reverse();
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

    render() {

        //console.log(this.state)
        //console.log(Date.now() - this.state.startTime)

        const pendingAuctions = Object.entries(AuctionHarness.PendingHarness).map((key, i) => {
            return (
                <div className="col-md-12 pt-1" key={this.uuidv4()}>
                    <div className={(i % 2 === 0) ? "stripe row border-bottom" : "row border-bottom"}>
                        <div className="col-md-12">
                            <span className="float-left">{key[1].need}</span>
                        </div>
                        <div className="col-md-12">
                            <span className="float-left">Vote Opens: {moment(key[1].voteOpens).format("MMM Do YY")}</span>
                        </div>
                    </div>
                </div>
            );
        });

        const votingAuctions = Object.entries(AuctionHarness.VotingHarness).map((key, i) => {
            return (
                <div className="col-md-12 pt-1" key={this.uuidv4()}>
                    <div className={(i % 2 === 0) ? "stripe row border-bottom" : "row border-bottom"}>
                        <div className="col-md-12">
                            <span className="float-left">{key[1].need}</span>
                        </div>
                        <div className="col-md-12">
                            <span className="float-left">Vote Closes: {moment(key[1].voteCloses).format("MMM Do YY")}</span>
                        </div>
                    </div>
              
                </div>
            );
        });

        const biddingAuctions = Object.entries(AuctionHarness.BiddingHarness).map((key, i) => {
            return (
                <div className="col-md-12 pt-1" key={this.uuidv4()}>
                    <div className={(i % 2 === 0) ? "stripe row border-bottom" : "row border-bottom"}>
                        <div className="col-md-12">
                            <span className="float-left">{key[1].need}</span>
                        </div>
                        <div className="col-md-12">
                            <span className="float-left">Auction Closes: {moment(key[1].auctionCloses).format("MMM Do YY")}</span>
                        </div>
                    </div>
                </div>
            );
        });

        /**
         * <div className="resize-drag" >
                        1
                    </div>
         */
        const timelines = this.state.days.map((key, i) => {
            
            let timelineIntervals = [];

            key.intervals.forEach(element => {
                //console.log(element);
                timelineIntervals.push(<div className="resize-drag" 
                                            style={{left : element.startTimeAsPercentageOfDay+'%' , width: element.lengthAsPercentageOfDay+'%', backgroundColor: element.color}}>
                                                {element.start.format('DD, h:mm:ss a')} { element.end.format('DD, h:mm:ss a')} {element.id}
                                        </div>)
            });
            return (
                <div className="row timeline" key={this.uuidv4()}>
                    <div className="timelineDate">{key.day}</div>{timelineIntervals}
                </div>

            );

        });
        
        /**
         * 
         * 
         *  <div className="resize-drag" style={'left:'+interval.startTimeAsPercentageOfDay+'%; width:'+interval.lengthAsPercentageOfDay+'%; + background-color:'+interval.color+';'}>
                    1
                </div>
         * 
         * 
         * 
         * 
         * 
         * 
         * 
         * 
         * 
         *  <div className="row" key={this.uuidv4()}>
                  <div className="col-md-2">
  
                  </div>
                  <div className="col-md-8" id="timelines">
                      
                      <div className="row timeline">
                          <div className="resize-drag" id="interval_1">
                              1
                          </div>
                      </div>
                  </div>
  
                  <div className="col-md-2">
  
                  </div>
              </div>
         */
        return (

            <div className="container-fluid">


                <div className="row" key={this.uuidv4()}>
                    <div className="col-md-2">

                    </div>
                    <div className="col-md-8" id="timelines">
                        {timelines}
                    </div>
                    <div className="col-md-2">

                    </div>
                </div>

                <div className="row">
                    <div className="col-md-2">

                    </div>


                    <div className="col-md-8 main-content">
                        <div className="row">
                            <div className="col-md-9">
                                <div className="row tabs pt-3">
                                    <div className="col-md-12">
                                        <h3>My Dashboard</h3>
                                    </div>
                                </div>

                                <section className="" id="projectSelector">
                                    <div className="row pt-6">
                                        <div className="col-md-12 form-group">
                                            <label className="sr-only" >Project</label>
                                            <select className="form-control" id="projectSelect">
                                                <option defaultValue value="" disabled="">Select a project</option>
                                                <option value="091be765-7493-426f-8203-be611ab3ea13">fixpoint-dev </option>
                                                <option value="091be765-7493-426f-8203-be611ab3ea14">fixpoint-admin</option>
                                                <option value="091be765-7493-426f-8203-be611ab3ea15">fixpoint-marketing</option>
                                            </select>
                                        </div>
                                    </div>
                                    <div className="row pt-6">
                                        <div className="col-md-2">
                                            <button id="startWork" className={this.state.workStarted === false ? "btn btn-primary float-left my-2" : "btn btn-primary float-left my-2 btn-disable"} onClick={this.startWorkHandler}>Start Work</button>
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

                                            <button id="stopWork" className={this.state.workStarted === false ? "btn btn-primary float-right my-2 btn-disable" : "btn btn-primary float-right my-2"} onClick={this.stopWorkHandler}>Stop Work</button>
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






                                <div className="pt-5"></div>
                                <section className="contribution-overview text-muted">

                                    <div className="row">
                                        <div className="col-md-6">
                                            {this.state.hrs.map((contributer, index) => (

                                                <div className="row" key={this.uuidv4()} style={{ color: this.state.colors[index] }}>
                                                    <div className="col-md-8"><span className="float-left">{contributer.creditTo}</span></div>
                                                    <div className="col-md-4"><span className="float-left">{contributer.ttl.toFixed(2)} Hrs</span></div>
                                                </div>

                                            ))}
                                        </div>
                                        <div className="md-6">
                                            <div className="row">
                                                <div className="col-md-6"><span className="float-left">Hours</span></div>
                                                <div className="col-md-6"><span className="float-left">{this.state.totalHours.reduce(function (a, b) {
                                                    return a + b;
                                                }, 0).toFixed(2)}</span></div>
                                            </div>
                                            <div className="row">
                                                <div className="col-md-6"><span className="float-left">Revenue</span></div>
                                                <div className="col-md-6"><span className="float-left">16 zec</span></div>
                                            </div>
                                        </div>

                                    </div>
                                </section>

                                <div className="hr"></div>




                                <div style={{ height: 700 }} className="row pt-3">

                                    <div className="col-md-12">
                                        <Calendar
                                            localizer={localizer}
                                            events={this.state.events}
                                            step={60}
                                            views={allViews}
                                            showMultiDayTimes
                                            min={new Date(this.state.startTime)}
                                            max={new Date()}
                                            defaultDate={new Date()}
                                            startAccessor="start"
                                            endAccessor="end"
                                            eventPropGetter={(this.eventStyleGetter)}
                                        />
                                    </div>

                                </div>
                            </div>

                            <div className="col-md-3 right-col pt-3">
                                <div className="row pt-3">
                                    <div className="col-md-12">
                                        <h5>Revenue</h5>
                                    </div>
                                    <div className="col-md-6">x^6@dobit.com</div>
                                    <div className="col-md-6"><span className="float-left">12 zec</span></div>
                                    <div className="col-md-6 stripe">dr*)2@dobit.com</div>
                                    <div className="col-md-6 stripe"><span className="float-left">2 zec</span></div>
                                    <div className="col-md-6">z_66*dobit.com</div>
                                    <div className="col-md-6"><span className="float-left">2 zec</span></div>
                                </div>
                                <div className="row pt-3">
                                    <div className="col-md-12">
                                        <h5>Auctions</h5>
                                    </div>
                                    <div className="col-md-12 pt-1">
                                        <div className="row">
                                            <div className="col-md-12 pending-color stripe">Pending</div>
                                            {pendingAuctions}
                                        </div>
                                    </div>
                                    <div className="col-md-12 pt-3">
                                        <div className="row">
                                            <div className="col-md-12 voting-color stripe">Voting</div>
                                            {votingAuctions}
                                        </div>
                                    </div>
                                    <div className="col-md-12 pt-3">
                                        <div className="row">
                                            <div className="col-md-12 active-color stripe">Active</div>
                                            {biddingAuctions}
                                        </div>
                                    </div>
                                </div>
                                <div className="row pt-3">
                                    <div className="col-md-12">
                                        <h5>Forum</h5>
                                    </div>
                                </div>
                            </div>
                        </div>


                    </div>

                    <div className="col-md-2">

                    </div>


                </div>






            </div>
        )
    }
}
export default Tracker
