import { useState } from "react";
export default function About() {
    const [myStyle, setmyStyle] = useState({
        color:"black",
        backgroundColor:"white"
    });

    // for button text
    const [text, settext] = useState("Dark");

    const toggle_style = ()=>{
        if(myStyle.color==="black"){
            setmyStyle({
                color:"white",
                backgroundColor:"black",
                borderColor:"white"
            })
            settext("Light")
        }else{
            setmyStyle({
                color:"black",
                backgroundColor:"white"
            })
            settext("Dark")
        }
    }
    return (<div className='container my-3'  style={myStyle}>
        <div className="m-3 p-3">
            <h2>About Us</h2>
        </div>
        <div className="accordion" id="accordionExample" style={myStyle}>
            <div className="accordion-item" style={myStyle}>
                <h2 className="accordion-header" id="headingOne">
                    <button className="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne" style={myStyle}>
                        Accordion Item #1
                    </button>
                </h2>
                <div id="collapseOne" className="accordion-collapse collapse show" aria-labelledby="headingOne" data-bs-parent="#accordionExample">
                    <div className="accordion-body">
                        This is the first item's accordion body.
                    </div>
                </div>
            </div>
        </div>
        <button className="btn btn-outline-primary m-3" onClick={toggle_style}>{text}</button>
    </div>);
}