import { useState } from "react";
export default function About(props) {
    const myStyle = {
        color:props.mode==="dark"?"white":"black",
        backgroundColor:props.body_col
    };

    return (<div className='container my-3'>
        <div className="m-3 p-3">
            <h2>About Me</h2>
        </div>
        <div className="accordion" id="accordionExample">
            <div className="accordion-item">
                <h2 className="accordion-header" id="headingOne">
                    <button className="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne" style={myStyle}>
                        About the App
                    </button>
                </h2>
                <div id="collapseOne" className="accordion-collapse collapse show" aria-labelledby="headingOne" data-bs-parent="#accordionExample">
                    <div className="accordion-body" style={myStyle}>
                        This Single Page App is Basically a Text Analyser.
                    </div>
                </div>
            </div>
            
            <div className="accordion-item">
                <h2 className="accordion-header" id="headingOne">
                    <button className="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="true" aria-controls="collapseOne" style={myStyle}>
                        About the Creator
                    </button>
                </h2>
                <div id="collapseTwo" className="accordion-collapse collapse show" aria-labelledby="headingOne" data-bs-parent="#accordionExample">
                    <div className="accordion-body" style={myStyle}>
                        This is made by <strong>Arnab Chatterjee </strong>.
                    </div>
                </div>
            </div>
        </div>
    </div>);
}