// src/Auctions.js

import React, { useState } from "react";
import DatePicker from "react-datepicker";
 
import "react-datepicker/dist/react-datepicker.css";
import  '../css/auctions.css';

const Auctions = () =>{
    const [startDate, setStartDate] = useState(new Date());

    return (
        <div className="container-fluid">
            <div className="row">
                <div className="col-md-2">
                    
                </div>
                <div className="col-md-8">

                    <section>
                        <div className="row  pt-3">
                            <div className="col-md-12">
                                <h3>Auctions</h3>
                            </div>
                        </div>
                    </section>
           
                    <section>
                        <div className="row pt-3">
                            <div className="col-md-12">
                                <h5>Propose</h5>
                            </div>
                        </div>

                        <div className="row pt-3">
                            <div className="col-md-1">
                            <span className="float-right">Need</span>
                            </div>
                            <div className="col-md-4">
                            <span className="float-left"> <input type="text" className="pretty-textarea" id="need" name="need" defaultValue="Name Need"/></span>
                            </div>

                            <div className="col-md-2">
                            </div>
                        </div>

                        <div className="row pt-1">
                            <div className="col-md-8">
                                <textarea id="needDescription" name="needDescription" className="pretty-textarea" rows="5" cols="100" defaultValue="Describe Need">
                                                        
                                </textarea>
                            </div>
                            <div className="col-md-2">
                            </div>     
                        </div>

                        <div className="row pt-1">

                            <div className="col-md-2">
                                Need Spans:
                            </div>  

                            
                            <div className="col-md-1">
                            <   span className="float-right">From</span>
                            </div>
                            <div className="col-md-2">
                                <DatePicker id="needSpansFrom" selected={startDate} onChange={date => setStartDate(date)} />
                            </div>
                            <div className="col-md-1">
                            <   span className="float-right">To</span>
                            </div>
                            <div className="col-md-2">
                                <DatePicker id="needSpansTo" selected={startDate} onChange={date => setStartDate(date)} />
                            </div>  
                        </div>

                        <div className="row pt-1">

                            <div className="col-md-2">
                                Open for vote:
                            </div>  

                            <div className="col-md-2">
                                <DatePicker id="openForVote" selected={startDate} onChange={date => setStartDate(date)} />
                            </div>
                        
                        </div>

                        <div className="row pt-3 pb-3">
                            <div className="col-md-1">
                                <button className="btn btn-sm btn-primary lift ml-auto">Add Need</button>
                            </div>
                        </div>

                        <div className="row pt-3">
                            <div className="col-md-1">
                                <span className="float-right">Option</span>
                            </div>
                            <div className="col-md-3">
                                <span className="float-left"> <input type="text" className="pretty-textarea" id="optionShort" name="optionShort" defaultValue="Name Option"/></span>
                            </div>

                            <div className="col-md-1">
                                <span className="float-left">Cost</span>
                            </div>
                            <div className="col-md-3">
                                <span className="float-left"> <input type="text" className="pretty-textarea" defaultValue="cost" id="optionCost" name="optionCost"/></span>
                            </div>
                            

                            <div className="col-md-2">
                            </div>
                        </div>

                        <div className="row pt-1">
                            <div className="col-md-8">
                                <textarea id="optionDescription" name="optionDescription" className="pretty-textarea" rows="5" cols="100" defaultValue="Describe Option">
                                                        
                                </textarea>
                            </div>
                            <div className="col-md-2">
                            </div>     
                        </div>
                         
                        

                        <div className="row pt-3 pb-3">
                            <div className="col-md-1">
                                <button className="btn btn-sm btn-primary lift ml-auto">Add Option</button>
                            </div>
                        </div>

                        <div className="row pt-3 pb-3">
                            <div className="col-md-12">
                                <div className="row pt-3 font-weight-bold"> 
                                    <div className="col-md-3">Option</div>
                                    <div className="col-md-3">Cost</div>
                                    <div className="col-md-3">Details</div>
                                </div>
                                <div className="row pt-3 pb-2 stripe"> 
                                    <div className="col-md-3">Do Nothing</div>
                                    <div className="col-md-3"></div>
                                    <div className="col-md-3"></div>
                                </div>
                                <div className="row pt-3 pb-2"> 
                                    <div className="col-md-3">Option 1</div>
                                    <div className="col-md-3">x units</div>
                                    <div className="col-md-3"><a href="">details</a></div>
                                </div>
                                <div className="row pt-3 pb-2 stripe"> 
                                    <div className="col-md-3">Option 2</div>
                                    <div className="col-md-3">y units</div>
                                    <div className="col-md-3"><a href="">details</a></div>
                                </div>
                            </div>
                        </div>

                    </section>

                    <section>
                        <div className="row pt-4 border-top">
                            <div className="col-md-12">
                                <h4>Pending</h4>
                            </div>
                        </div>
                        <div className="row pt-3 pb-3">
                                    <div className="col-md-12">
                                        <div className="row pt-3 font-weight-bold"> 
                                            <div className="col-md-2">Need</div>
                                            <div className="col-md-3">Spans</div>
                                            <div className="col-md-2">Opens</div>
                                            <div className="col-md-3">Options</div>
                                            <div className="col-md-2">Details</div>
                                        </div>
                                        <div className="row pt-3 pb-2 stripe"> 
                                            <div className="col-md-2">Hosting: Front-End</div>
                                            <div className="col-md-3">01/01/2021 - 01/01/2022</div>

                                            <div className="col-md-2">10/30/2020</div>
                                            <div className="col-md-3">(option 1, option 2, ...)</div>
                                            <div className="col-md-2"><a href="">details</a></div>
                                        </div>
                                        <div className="row pt-3 pb-2"> 
                                            <div className="col-md-2">Hosting: Apis</div>
                                            <div className="col-md-3">01/01/2021 - 01/01/202</div>
                                            <div className="col-md-2">10/15/2020</div>
                                            <div className="col-md-3">(option 1, option 2, ...)</div>
                                            <div className="col-md-2"><a href="">details</a></div>
                                        </div>
                                        <div className="row pt-3 pb-2 stripe"> 
                                            <div className="col-md-2">Beer</div>
                                            <div className="col-md-3">11/22/2020-11/22/2020</div>
                                            <div className="col-md-2">10/18/2020</div>
                                            <div className="col-md-3">(dogfishhead, molsons,...)</div>
                                            <div className="col-md-2"><a href="">details</a></div>
                                        </div>
                                    </div>
                                </div>
                    </section>
                </div>

                <div className="col-md-2">
                </div>
            </div>
            

           

            <section>
                <div className="row pt-3 border-top">
                    <div className="col-md-12">
                        <h5>Open For Vote</h5>
                    </div>
                </div>
                <div className="row">

                </div>
            </section>

            <section>
                <div className="row  pt-3  border-top">
                    <div className="col-md-12">
                        <h5>In Auction</h5>
                    </div>
                </div>
                <div className="row">

                </div>
            </section>

            <section>
                <div className="row pt-3  border-top">
                    <div className="col-md-12">
                        <h5>Active</h5>
                    </div>
                </div>
                <div className="row">

                </div>
            </section>

            <section>
                <div className="row pt-3  border-top">
                    <div className="col-md-12">
                        <h5>Expired / Declined</h5>
                    </div>
                </div>
                <div className="row">

                </div>
            </section>

        </div>
    )
}
export  default Auctions 