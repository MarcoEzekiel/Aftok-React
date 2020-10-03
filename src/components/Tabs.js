// src/Tabs.js

import React from 'react';
import  '../css/tabs.css';

const Tabs = ({state,onClickHandler}) =>{

    return (
        <div className="container-fluid">
            <div className="row tabs">
                <div id="login" className={state.login ? 'col-md-2 selected':'col-md-2 tab'} onClick={() => onClickHandler('login')}>
                    Login
                </div>
                <div id="projects"  className={state.projects ? 'col-md-2 selected':'col-md-2 tab'} onClick={() => onClickHandler('projects')}>
                    Projects
                </div>
                <div  id="tracker"  className={state.tracker ? 'col-md-2 selected':'col-md-2 tab'} onClick={() => onClickHandler('tracker')}>
                    Tracker
                </div>
                <div  id="revenue"  className={state.revenue ? 'col-md-2 selected':'col-md-2 tab'} onClick={() => onClickHandler('revenue')}>
                    Revenue
                </div>
                <div  id="auctions"  className={state.auctions ? 'col-md-2 selected':'col-md-2 tab'} onClick={() => onClickHandler('auctions')}>
                    Auctions
                </div>
                <div className="col-md-2 tab">
                        
                </div>
            </div>
        </div>
    )
}
export  default Tabs 
 