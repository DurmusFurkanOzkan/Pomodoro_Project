import React, { useState } from "react";
import Countdown from 'react-countdown';

function Timer() {
    const [minutes, setMinutes] = useState(25);
    const [buttonText, setbuttonText] = useState("START");

    const [isVisible,setIsVisible]=useState("hidden");
    
    const [TimeText, setTimeText] = useState("Time to focus!");
    const [buttonColorPom, setbuttonColorPom] = useState({ color: "#A44E4E", font: "bold" ,tag:"signed"});
    const [buttonColorSho, setbuttonColorSho] = useState({ color: "#C15C5C", font: "normal" ,tag:"unsigned" });
    const [buttonColorLon, setbuttonColorLon] = useState({ color: "#C15C5C", font: "normal" ,tag:"unsigned" });

    const [btnColor, setBtnColor] = useState("#A44E4E");

    const [count, setCount] = useState(0);
    const [flag, setFlag] = useState(true);
    const [flag2, setFlag2] = useState(true);


    function changeColor(className, colors, signedcolor, title, body) {
        var slides = document.getElementsByClassName(className);
        for (var i = 0; i < slides.length; i++) {
            slides[i].style.backgroundColor = colors;
        }
        document.getElementsByClassName("Timer")[0].style.backgroundColor = colors;
        document.body.style.backgroundColor = body;
        setBtnColor(body);
        if (title === "Pomodoro") {
            setbuttonColorPom({ color: signedcolor, font: "bold" ,tag:"signed"});
            setbuttonColorSho({ color: colors, font: "normal",tag:"unsigned" });
            setbuttonColorLon({ color: colors, font: "normal" ,tag:"unsigned"});
            setTimeText("Time to focus!")
        } else if (title === "Short Break") {
            setbuttonColorPom({ color: colors, font: "normal" ,tag:"unsigned"});
            setbuttonColorSho({ color: signedcolor, font: "bold" ,tag:"signed"});
            setbuttonColorLon({ color: colors, font: "normal" ,tag:"unsigned"});
            setTimeText("Time for a break!")
        } else if (title === "Long Break") {
            setbuttonColorPom({ color: colors, font: "normal",tag:"unsigned" });
            setbuttonColorSho({ color: colors, font: "normal" ,tag:"unsigned"});
            setbuttonColorLon({ color: signedcolor, font: "bold" ,tag:"signed"});
            setTimeText("Time for a break!")
        }

    }

    function ChangeState(text){
        if (text === "Pomodoro") {
            changeColor("button-div", "#C15C5C", "#A44E4E", "Pomodoro", "#BA4949");
            setMinutes(25);

        } else if (text === "Short Break") {
            changeColor("button-div", "#4C9196", "#417B80", "Short Break", "#38858A");
            setMinutes(5);
        } else if (text === "Long Break") {
            changeColor("button-div", "#4D7FA2", "#426C8A", "Long Break", "#397097");
            setMinutes(15);
        }
        
    }

    function myFunction(event) {

        if(flag2==true){
            ChangeState(event.target.innerText);
            setbuttonText("START");
            setIsVisible("hidden");
            setFlag(true);
        }else{
            if (window.confirm("Are you sure to change the time?")) {
                ChangeState(event.target.innerText);
                setbuttonText("START");
                setFlag2(true);
                setFlag(true);
            }
        }
        
    }


    function Countdowns(event) {  

        if (buttonText == "START") {
            setbuttonText("RESTART");
            setIsVisible("visible");
            setFlag(false);
        } else if(buttonText == "RESTART") {
            if (window.confirm("Are you sure to restart the time?")) {
                setbuttonText("START");
                setIsVisible("hidden");
                setFlag(true);
              } 
        }

        setFlag2(false);

    }


    function PauseClicked(){

        if (window.confirm("Are you sure to change the time?")) {
            if (buttonColorPom.tag == "signed") {
                changeColor("button-div", "#4C9196", "#417B80", "Short Break", "#38858A");
                setMinutes(5);
    
            } else if (buttonColorSho.tag == "signed") {
                changeColor("button-div", "#4D7FA2", "#426C8A", "Long Break", "#397097");
                setMinutes(15);
            } else if (buttonColorLon.tag == "signed") {
                changeColor("button-div", "#C15C5C", "#A44E4E", "Pomodoro", "#BA4949");
                setMinutes(25);
            }
            setbuttonText("START");
            setFlag2(true);
            setFlag(true);
        }
        
    }
    // Random component
    const Completionist = () => <h1 className="Time">TIME IS FINISHED</h1>;

    // Renderer callback with condition
    const renderer = ({ minutes, seconds, completed }) => {
        if (completed) {
            var audio = new Audio('./../../sounds/time_finish.wav');
            audio.playbackRate = 0.5;
            audio.play();
            return <Completionist />;
        } else {
            // Render a countdown
            return (
                <span>
                    {minutes}:{seconds}
                </span>
            );
        }
    };
    return <div className="Bottom_Content">
        <div className="Timer">
            <div className="Timer_buttons">
                <button className="Timer_btn" onClick={myFunction} style={{ backgroundColor: buttonColorPom.color, fontWeight: buttonColorPom.font }}>Pomodoro</button>
                <button className="Timer_btn" onClick={myFunction} style={{ backgroundColor: buttonColorSho.color, fontWeight: buttonColorSho.font }}>Short Break</button>
                <button className="Timer_btn" onClick={myFunction} style={{ backgroundColor: buttonColorLon.color, fontWeight: buttonColorLon.font }}>Long Break</button>
            </div>
            <h1 className="Time">{flag ? minutes + ":00" : <Countdown date={Date.now() + (minutes * 60 * 1000) - 1000} renderer={renderer} />}</h1>
            <div class="buttons"><button id="Start_btn" style={{ color: btnColor }} onClick={Countdowns}  >{buttonText}</button>
            <button class="pause_button" onClick={PauseClicked} >
                    <img class="pause_image" style={{visibility: isVisible}} src="https://pomofocus.io/icons/next-white3.png" alt="" />
            </button>
            </div>
            
           
        </div>
        <div className="Bottom_paragraph">
            <p className="count">#{count}</p>
            <p style={{ fontSize: "18px" }}>{TimeText}</p>
        </div>

    </div>

}

export default Timer;
