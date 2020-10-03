// src/Tracker.js

import React from 'react'
import  '../css/tracker.css';

const Tracker = () =>{

    return (

        <div className="container-fluid">

            <div className="row tabs pt-3">
                <div className="col-md-12">
                    <h3>Tracker</h3>
                </div>
            </div>

            <section className="section-border border-primary" id="projectSelector">
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
                <div>
                    <button id="startWork" className="btn btn-primary float-left my-2">Start Work</button>
                        {/* to do make component*/}
                            <div id="startModal" className="action-modal">
                                <div className="action-modal-content container">
                                    <div className ="row">
                                        <div className="col-md-12">
                                            <span className="close" id="closeStartModal">&times;</span>
                                            <div>Hi! what are you working on today ?</div>
                                            <textarea id="startWorkIntent" name="startWorkIntent" className="pretty-textarea" rows="4" cols="80" defaultValue="Intent">
                                                
                                            </textarea>
                                        </div>
                                    </div>
                                    <div className ="row">
                                        <div className="col-md-4">
                                            <button id="start" className="modal-action">Start</button>
                                        </div>
                                    </div>
                                </div>
                            </div>


                    <button id="stopWork"  className="btn btn-primary float-right my-2" >Stop Work</button>

                            <div id="stopModal" className="action-modal">
                                  <div className="action-modal-content container">
                                    <div className ="row">
                                        <div className="col-md-12">
                                            <span className="close" id="closeStopModal">&times;</span>
                                            <div>Hi! What did you get done, any blockers ?</div>
                                            <textarea id="startWorkIntent" name="startWorkIntent" className="pretty-textarea" rows="4" cols="80" defaultValue="Accomplished / Blockers?">
                                                
                                            </textarea>
                                        </div>
                                    </div>
                                    <div className ="row">
                                        <div className="col-md-4">
                                            <button id="stop" className="modal-action">Stop</button>
                                        </div>
                                        <div className="col-md-4">
                                            <div className="modal-action"> 
                                                    Blocker?
                                                <input type="checkbox"  id = "blocker"/>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                </div>
            </section>

            <div className="hr pt-5"></div>
                <section className="contribution-overview text-muted">
                    <p className="col-md-12  text-center mx-auto">Contribution overview</p>
                    <div className="project-summary row">
                        
                        <div className="col-md-4">
                            <div className = "row">
                                <div className="col-md-6"><h5>Project Lifespan</h5></div>
                            </div>
                            <div className="row">
                                <div className="col-md-6">Project :  </div>
                                <div className="col-md-6">3281 hrs</div>
                            </div>
                            <div className="row">
                                <div className="col-md-6">Logged in user :  </div>
                                <div className="col-md-6">28 hrs</div>
                            </div>
                        </div>
                        <div className="col-md-4">
                            <div className = "row">
                                <div className="col-md-6"><h5>YTD</h5></div>
                            </div>
                            <div className="row">
                                <div className="col-md-6">Project :  </div>
                                <div className="col-md-6">243 hrs</div>
                            </div>
                            <div className="row">
                                <div className="col-md-6">Logged in user :  </div>
                                <div className="col-md-6">28 hrs</div>
                            </div>
                        </div>
                        <div className="col-md-4">
                            <div className = "row">
                                <div className="col-md-6"><h5>This Month</h5>   </div>
                            </div>
                            <div className="row">
                                <div className="col-md-6">Project :  </div>
                                <div className="col-md-6">64 hrs</div>
                            </div>
                            <div className="row">
                                <div className="col-md-6">Logged in user :  </div>
                                <div className="col-md-6">28 hrs</div>
                            </div>
                        </div>
                    </div>
                </section>

                <div className="hr"></div>
        </div>
    )
}
export  default Tracker 
 