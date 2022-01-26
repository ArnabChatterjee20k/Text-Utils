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

    // this must be present at the top level of the functional component before using them.
    // const default_val = "Enter text here";
    // const [text , setText] = useState()
    const [text, setText] = useState("") // array destructuring
    return (
        <>
            <div className="container my-3 py-3">
                <h2 className='my-3'>{props.heading}</h2>
                <div className="mb-3">
                    <textarea className="form-control p-3" name="text" id="text" rows="8" placeholder='Enter Your Text..' value={text} onChange={handle_change}></textarea>
                </div>
                <button className="btn btn-primary mx-2" onClick={handle_uppercase}>Convert To UPPERCASE</button>
                <button className="btn btn-primary mx-2" onClick={handle_lowercase}>Convert To lowercase</button>
                {/* <button className="btn btn-danger mx-2" onClick={()=>{setText(default_val)}}>Reset</button> */}
            </div>
            <div className="container my-3 py-3">
                <h3>Your Text Summary</h3>
                <ul>
                    <li>
                        <b style={{ color: "red", fontSize: "1.35rem" }}>{text.trim()==""? 0 : text.split(" ").length}</b> words
                    </li>

                    <li>
                        <b style={{ color: "red", fontSize: "1.35rem" }}>{text.trim()==""? 0 : text.length}</b> characters
                    </li>

                    <li>
                        <b style={{ color: "red", fontSize: "1.35rem" }}>{text.trim()==""? 0 : 1 / 125 * text.length}</b> Minutes reading time
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