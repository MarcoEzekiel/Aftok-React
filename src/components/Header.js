// src/Header.js

import React from 'react'
import '../css/header.css';

class Header extends React.Component {
  render() {
    return (
      <header>
        <nav className="navbar navbar-expand-lg navbar-light">
          <div className="container-fluid">
            <div className="navbar-brand">
              <h4 className="font-weight-bold">Aftok</h4>
            </div><button className="btn navbar-btn btn-sm btn-primary lift ml-auto">Logout</button>
          </div>
        </nav>
      </header>
    )
  }
}

export default Header