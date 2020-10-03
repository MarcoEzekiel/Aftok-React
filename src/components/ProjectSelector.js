// src/Tracker.js

import React from 'react'
import  '../css/tabs.css';

const Tracker = () =>{

    return (
        <section className="section-border border-primary">
            <div className="container pt-6">
                <div className="page-actions">
                    <h2 className="mb-0 font-weight-bold text-center page-header text-muted">Time Tracker</h2>
                    <div>
                        <div className="form-group">
                            <label className="sr-only" >Project</label>
                            <select className="form-control" id="projectSelect">
                                <option defaultValue value="" disabled="">Select a project</option>
                                <option value="091be765-7493-426f-8203-be611ab3ea13">fixpoint-dev </option>
                                <option value="091be765-7493-426f-8203-be611ab3ea14">fixpoint-admin</option>
                                <option value="091be765-7493-426f-8203-be611ab3ea15">fixpoint-marketing</option>
                            </select>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}
export  default Tracker 
 