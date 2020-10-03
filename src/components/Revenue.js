// src/Revenue.js

import React from 'react'
import  '../css/tabs.css';

const Revenue = () =>{

    return (
        <div className="container-fluid">

            <div className="row tabs pt-3">
                <div className="col-md-12">
                    <h3>Revenue</h3>
                </div>
            </div>

            <section id="requestPayment">

                <div className="row pt-3">
                    <div className="col-md-2">
                    </div>
                    <div className="col-md-2">
                        <span className="float-right">Payment From</span>
                    </div>
                    <div className="col-md-2">
                        <input type="text" id="paymentFrom" name="paymentFrom"/>
                    </div>
                </div>

                <div className="row pt-3">
                    <div className="col-md-2">
                    </div>
                    <div className="col-md-2">
                        <span className="float-right">Payment Amount</span>
                    </div>
                    <div className="col-md-2">
                        <input type="text" id="paymentAmount" name="paymentAmount"/>
                    </div>
                    <div className="col-md-2">
                        <span className="float-right">Invoice #</span>
                    </div>
                    <div className="col-md-2">
                        <input type="text" id="InvoiceNumber" name="InvoiceNumber"/>                       
                    </div>
                </div>

                <div className="row pt-3 pb-3">
                    <div className="col-md-12">
                        <button className="btn btn-sm btn-primary lift ml-auto">Request Payment</button>
                    </div>
                </div>

            </section>
            <section id="revenue">

                <div className="row pt-3 font-weight-bold">
                    <div className="col-md-2">
                    </div>
                    <div className="col-md-2">
                        Payment From 
                    </div>
                    <div className="col-md-2">
                        Amount 
                    </div>
                    <div className="col-md-2">
                        Invoice # 
                    </div>
                    <div className="col-md-2">
                        Distributions
                    </div>
                </div>

                <div className="row pt-3 pb-2 stripe">
                    <div className="col-md-2">
                    </div>
                    <div className="col-md-2">
                        x^6@dobit.com 
                    </div>
                    <div className="col-md-2">
                        12 coins
                    </div>
                    <div className="col-md-2">
                        some guid
                    </div>
                    <div className="col-md-2">
                        <a href="">Distribution</a>
                    </div>
                </div>
                <div className="row pt-3 pb-2">
                    <div className="col-md-2">
                    </div>
                    <div className="col-md-2">
                        dr*)2@dobit.com 
                    </div>
                    <div className="col-md-2">
                        2 coins
                    </div>
                    <div className="col-md-2">
                        some guid
                    </div>
                    <div className="col-md-2">
                        <a href="">Distribution</a>
                    </div>
                </div>
                <div className="row pt-3 pb-2 stripe">
                    <div className="col-md-2">
                    </div>
                    <div className="col-md-2">
                        My Third Project 
                    </div>
                    <div className="col-md-2">
                        2 coins
                    </div>
                    <div className="col-md-2">
                        some guid
                    </div>
                    <div className="col-md-2">
                        <a href="">Distribution</a>
                    </div>
                </div>
            </section>
        </div>
    )
}
export  default Revenue 