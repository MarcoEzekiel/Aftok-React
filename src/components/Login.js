// src/Login.js

import React from 'react'
import  '../css/login.css';


class Login extends React.Component {

    render() {
        return (
            <div className="container-fluid login">
                <div className="row">
                        <div className="col-md-2">
                            
                        </div>
                        <div className="col-md-4">
                            <span className = "float-right">UserName:</span>    
                        </div>
                        <div className="col-md-4">
                            <input type="text" className="float-left"></input>
                        </div>
                </div>
                <div className="row pw">
                        <div className="col-md-2">
                            
                        </div>
                        <div className="col-md-4">
                        <span className = "float-right">Password:</span>
                        </div>
                        <div className="col-md-4">  
                            <input type="text" className="float-left"></input>
                        </div>
                </div>

                <div className="row pt-3">
                        <div className="col-md-12">
                            <button  className="btn btn-sm btn-primary">login</button>
                        </div>
                </div>

            </div>
        )
    }


}

export default Login