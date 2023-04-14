import React from "react";
import { useState } from "react";
function Footer(){
    const [theArray, setTheArray] = useState([ ]);
    const [value,setValue] = useState("");

    function ChangedInput(event){
        setValue(event.target.value);
    }

    function ClickedButton(event){
        if(value){
            setTheArray(oldArray => [...oldArray, value]);
            setValue("");
        }
    }
    return <div >
        <h3 className="Tasks">Tasks</h3>
        <input id="input_text" type="text" onChange={ChangedInput} value={value} placeholder="Write a Task"/>
        <button id="task_button" onClick={ClickedButton}>Add Task</button>
        <ul className="Unordered_list">
            {theArray.map((item)=>
                <li className="list_item">{item}</li>)
            }
        </ul>
    </div>
}

export default Footer;