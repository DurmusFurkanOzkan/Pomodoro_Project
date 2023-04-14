import React from "react";
import { useState } from "react";


function Navbar(props){
    
    
    const [isAuth, setIsAuth] = useState("#BA4949");

    return <div className="navbar">
        <div className="left-side">
            <i id="top-img" class="fa fa-check-circle"></i>
            <p id="pomofocus">Pomofocus</p>
        </div>
        <div className="right-side">
            <button className="button-div" style={{backgroundcolor:isAuth}}>
                <div className="btn_icn_txt">
                <i class="fa fa-bar-chart"></i>
                <p className="button_text">Report</p>
                 </div>
            </button>
            <button className="button-div" style={{backgroundcolor:isAuth}}>
                <div className="btn_icn_txt">
                <i class="fa fa-cog" aria-hidden="true"></i>
                <p className="button_text">Settings</p>
                </div>
            </button>
            <button className="button-div">
                <div className="btn_icn_txt" style={{backgroundcolor:isAuth}}>       
                <i class="fa fa-user" aria-hidden="true"></i>
                <p className="button_text">Login</p>
                </div>
            </button>
        </div>
    </div>
}

export default Navbar;