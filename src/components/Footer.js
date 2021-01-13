// src/Footer.js

import React from 'react'
import  '../css/footer.css';

function Footer() {
  return (
    <footer className="py-8 py-md-11 bg-black">
    <div className="container">
      <div className="row">
        <div className="col-12 col-md-4 col-lg-3">
      
          <a className="navbar-brand" href="./index.html">
            <h4 className="font-weight-bold">
              Aftok
            </h4>
          </a>

          <p className="text-gray-700 mb-2">
            End corporate feudalism
          </p>

        </div>
        <div className="col-6 col-md-4 col-lg-2">
      
          <h6 className="font-weight-bold text-uppercase text-gray-700">
            About
          </h6>

          <ul className="list-unstyled text-muted mb-6 mb-md-8 mb-lg-0">
            <li className="mb-3">
              <a href="../team.html" className="text-reset">
                Team
              </a>
            </li>
           
            <li className="mb-3">
              <a href="../contact.html" className="text-reset">
                Contact
              </a>
            </li>
            <li className="mb-3">
              <a href="../join-us.html" className="text-reset">
                Join Us!
              </a>
            </li>
          </ul>

        </div>
        <div className="col-6 col-md-4 col-lg-2">
      
          <h6 className="font-weight-bold text-uppercase text-gray-700">
            Product
          </h6>

          <ul className="list-unstyled text-muted mb-6 mb-md-8 mb-lg-0">
            <li className="mb-3">
              <a href="../pricing.html" className="text-reset">
                Pricing
              </a>
            </li>
            <li className="mb-3">
              <a href="../licenses.html" className="text-reset">
                Sample Licenses
              </a>
            </li>
            <li className="mb-3">
              <a href="../data_policy.html" className="text-reset">
                Data Policy
              </a>
            </li>
          </ul>

        </div>
        <div className="col-6 col-md-4 offset-md-4 col-lg-2 offset-lg-0">
      
          <h6 className="font-weight-bold text-uppercase text-gray-700">
            Navigate
          </h6>

          <ul className="list-unstyled text-muted mb-0">
            <li className="mb-3">
              <a href="../sitemap.html" className="text-reset">
                Site Map
              </a>
            </li>
            <li className="mb-3">
              <a href="../docs/index.html" className="text-reset">
                API Docs
              </a>
            </li>
          </ul>

        </div>
      </div> 
    </div> 
  </footer>
  )
}

export default Footer