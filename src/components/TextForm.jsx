import React, { useState } from 'react';
import PropTypes from 'prop-types';

export default function TextForm(props) {
    const handle_change = (event) => {
        setText(event.target.value)
    }

    const handle_uppercase = () => {
        setText(text.toUpperCase())
    }

    const handle_lowercase = () => {
        setText(text.toLowerCase())
    }

    const calc = () => {
        let check = /^[^\sa-z_]+$/i
        if (check.test(text)) {
            setText(String(eval(text))) // string since trim will give error in case if text not string. eval returns a Number
        }
        else {
            alert("Plz enter valid character")
        }
    }

    const remove_extra_spaces = ()=>{
        let new_text = text.split(/[ ]+/); // split by getting one or more spaces. + due to one or more spaces
        setText(new_text.join(" ")) // joining all words by one space
    }

    const handle_copy = ()=>{
        navigator.clipboard.writeText(text)
    } 

    // this must be present at the top level of the functional component before using them.
    // const default_val = "Enter text here";
    // const [text , setText] = useState()
    const [text, setText] = useState("") // array destructuring
    return (
        <>
            <div className="container my-3 py-3"  style={{color : props.mode==="dark"?"white":"black"}}>
                <h2 className='my-3'>{props.heading}</h2>
                <div className="mb-3">
                    <textarea className="form-control p-3" name="text" id="text" rows="8" placeholder='Enter Your Text..' value={text} onChange={handle_change} style={{backgroundColor : props.mode==="dark"?"grey":"white",color:props.mode==="dark"?"white":"black"}}></textarea>
                </div>
                <button className="btn btn-primary m-2" onClick={handle_uppercase}>Convert To UPPERCASE</button>
                <button className="btn btn-primary m-2" onClick={handle_lowercase}>Convert To lowercase</button>
                <button className="btn btn-primary m-2" onClick={remove_extra_spaces}>Remove Extra Spaces</button>
                <button className="btn btn-success m-2" onClick={calc}>Calculate</button>
                <button className="btn btn-success m-2" onClick={handle_copy}>Copy Text</button>
                <button className="btn btn-danger m-2" onClick={() => setText("")}>Reset</button>
            </div>
            <div className="container my-3 py-3" style={{color : props.mode==="dark"?"white":"black"}}>
                <h3>Your Text Summary</h3>
                <ul>
                    <li>
                        <b style={{ color: "red", fontSize: "1.35rem" }}>{text.trim() === "" ? 0 : text.split(" ").length}</b> words
                    </li>

                    <li>
                        <b style={{ color: "red", fontSize: "1.35rem" }}>{text.trim() === "" ? 0 : text.length}</b> characters
                    </li>

                    <li>
                        <b style={{ color: "red", fontSize: "1.35rem" }}>{text.trim() === "" ? 0 : 1 / 125 * text.length}</b> Minutes reading time
                    </li>
                    
                </ul>
                <div className='p-1'>
                    <h3>Preview</h3>
                    <p>{text}</p>
                </div>
            </div>
        </>
    );
}

TextForm.prototype = {
    heading: PropTypes.string.isRequired
}

TextForm.defaultProps = {
    heading: "Set Heading Here"
}