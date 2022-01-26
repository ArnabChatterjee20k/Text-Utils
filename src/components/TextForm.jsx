import React , {useState} from 'react';
import PropTypes from 'prop-types';

export default function TextForm(props) {
    const handle_change = (event)=>{
        setText(event.target.value)
    }
    
    const handle_uppercase = ()=>{
        setText(text.toUpperCase())
    }

    const handle_lowercase = ()=>{
        setText(text.toLowerCase())
    }

    // this must be present at the top level of the functional component before using them.
    const [text , setText] = useState("Enter text here") // array destructuring
    return(
    <div>
        <h2 className='my-3'>{props.heading}</h2>
        <div className="mb-3">
            <textarea className="form-control p-3" name="text" id="text" rows="18" value={text} onChange={handle_change}></textarea>
        </div>
        <button className="btn btn-primary mx-2" onClick={handle_uppercase}>Convert To UPPERCASE</button>
        <button className="btn btn-primary mx-2" onClick={handle_lowercase}>Convert To lowercase</button>
    </div>
    );
}

TextForm.prototype = {
    heading : PropTypes.string.isRequired
}

TextForm.defaultProps = {
    heading : "Set Heading Here"
}