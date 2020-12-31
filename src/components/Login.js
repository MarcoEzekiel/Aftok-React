// src/Login.js

import React from 'react'
import '../css/login.css';


class Login extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            username: '',
            password: ''
        };
        console.log(props)
        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleUsernameChange = this.handleUsernameChange.bind(this)
        this.handlePasswordChange = this.handlePasswordChange.bind(this)
    }

    handleSubmit(event) {
  
        const apiUrl = "/api/login"
        let  body = {username:this.state.username, password:this.state.password}

        fetch(apiUrl, {
            body: JSON.stringify(body),
            method: 'POST',
        })
            .then(
                (result) => {
                    this.props.loggedInHandler(true)
                    this.props.onClickHandler('tracker')
                    
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
    handleUsernameChange(event) {
        this.setState({ username: event.target.value });
    }

    handlePasswordChange(event) {
        this.setState({ password: event.target.value });
    }

    render() {
        return (
            <form onSubmit={this.handleSubmit}>
                <div className="container-fluid login">
                    <div className="row">
                        <div className="col-md-2">

                        </div>
                        <div className="col-md-4">
                            <span className="float-right">UserName:</span>
                        </div>
                        <div className="col-md-4">
                            <input type="text" className="float-left" value={this.state.username} onChange={this.handleUsernameChange}></input>
                        </div>
                    </div>
                    <div className="row pw">
                        <div className="col-md-2">

                        </div>
                        <div className="col-md-4">
                            <span className="float-right">Password:</span>
                        </div>
                        <div className="col-md-4">
                            <input type="password" className="float-left" value={this.state.password} onChange={this.handlePasswordChange}></input>
                        </div>
                    </div>

                    <div className="row pt-3">
                        <div className="col-md-12">
                            <input className="btn btn-sm btn-primary" type="submit" value="Submit" />
                        </div>
                    </div>

                </div>
            </form>
        )
    }


}

export default Login
