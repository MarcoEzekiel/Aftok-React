// src/Projects.js
import React from 'react'
import  '../css/projects.css';

{/*{
  "projectName": "$PROJECT", 
  "depf": { 
    "type": "LinearDepreciation",  
    "arguments": {
      "undep": $UNDEPMON,
      "dep": $DEPMON
    }
  }
} */}

const Projects = () =>{

    return (
        <div className="container-fluid">

            <div className="row tabs pt-3">
                <div className="col-md-12">
                    <h3>Projects</h3>
                </div>
            </div>

            <section id="addProject">

                <div className="row pt-3">
                    <div className="col-md-2">
                    </div>
                    <div className="col-md-4">
                        <span className="float-right">Project Name</span>
                    </div>
                    <div className="col-md-4">
                        <input type="text" id="projectName" name="projectName"/>
                    </div>
                </div>

                <div className="row pt-3">
                    <div className="col-md-2">
                    </div>
                    <div className="col-md-4">
                        <span className="float-right">Undepreciated Period ( Months )</span>
                    </div>
                    <div className="col-md-4">
                        <input type="text" id="undepreciatedPeriod" name="undepreciatedPeriod"/>
                    </div>
                </div>

                <div className="row pt-3">
                    <div className="col-md-2">
                    </div>
                    <div className="col-md-4">
                        <span className="float-right">Depreciation Duration ( Months )</span>
                    </div>
                    <div className="col-md-4">
                        <input type="text" id="depreciationDuration" name="depreciationDuration"/>                       
                    </div>
                </div>

                <div className="row pt-3 pb-3">
                    <div className="col-md-12">
                        <button className="btn btn-sm btn-primary lift ml-auto">Add Project</button>
                    </div>
                </div>

            </section>

            <section id="projects">

                <div className="row pt-3 font-weight-bold">
                    <div className="col-md-2">
                    </div>
                    <div className="col-md-2">
                        Project 
                    </div>
                    <div className="col-md-2">
                        Undepreciated Period 
                    </div>
                    <div className="col-md-2">
                        Depreciation Duration 
                    </div>
                    <div className="col-md-2">
                        Associates
                    </div>
                </div>

                <div className="row pt-3 pb-2 stripe">
                    <div className="col-md-2">
                    </div>
                    <div className="col-md-2">
                        My First Project 
                    </div>
                    <div className="col-md-2">
                        3 months
                    </div>
                    <div className="col-md-2">
                        6 months
                    </div>
                    <div className="col-md-2">
                        <a href="">View/Add Associates</a>
                    </div>
                </div>
                <div className="row pt-3 pb-2">
                    <div className="col-md-2">
                    </div>
                    <div className="col-md-2">
                        My Second Project 
                    </div>
                    <div className="col-md-2">
                        9 months
                    </div>
                    <div className="col-md-2">
                        4 months
                    </div>
                    <div className="col-md-2">
                        <a href="">View/Add Associates</a>
                    </div>
                </div>
                <div className="row pt-3 pb-2 stripe">
                    <div className="col-md-2">
                    </div>
                    <div className="col-md-2">
                        My Third Project 
                    </div>
                    <div className="col-md-2">
                        3 months
                    </div>
                    <div className="col-md-2">
                        7 months
                    </div>
                    <div className="col-md-2">
                        <a href="">View/Add Associates</a>
                    </div>
                </div>
            </section>
        </div>
    )
}
export  default Projects 