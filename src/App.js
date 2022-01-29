import { useState , useEffect} from "react";
import About from "./components/About";
import Alert from "./components/Alert";
import Navbar from "./components/Navbar";
import TextForm from "./components/TextForm";
function App() {
  const [mode,setmode] = useState("light") // whether dark mode is enabled or not
  const [bodymode , setbodymode] = useState("white")
  const [alert , setAlert] = useState(null) // alert will be an object
  
  const render_alert = (type , message)=>{
    setAlert({
      type : type , 
      message : message
    })
    setTimeout(() => {
      setAlert(null) // for removing the component after 3sec
    }, 3000);
  }

  const toggle_mode = ()=>{
    // mode==="light"?setmode("dark"):setmode("light")
    if(mode==="light"){
      setmode("dark")
      setbodymode("grey")
      console.log("Dark mode",bodymode)
      // document.body.style.backgroundColor=bodymode // it is not working as useState setter function repaints the ui and js is async in nature so repaint takes time so the bodymode value also takes time to change so it body color not getting the new color rather it gets the previous value. After repainting of the component bodymode gets the new value.
      // better to use useEffect hook
      render_alert("success","Dark Mode Enabled")
    }
    else{
      setmode("light")
      setbodymode("white")
      console.log("Light mode",bodymode)
      // document.body.style.backgroundColor=bodymode  // it is not working as useState setter function repaints the ui and js is async in nature so repaint takes time so the bodymode value also takes time to change so it body color not getting the new color rather it gets the previous value. After repainting of the component bodymode gets the new value.
      render_alert("success","Light Mode Enabled")
    }
  }

  const toggle_body_color = (color)=>{
    setbodymode(color)
  }

  // using useeffect hook to observe the bodymode state varible and execute the function when the state of body mode changes
  useEffect(() => {
    document.body.style.backgroundColor=bodymode;
  }, [bodymode]);
  
  return (
    <div>
      {/* It is not correct solution of changing body color as it will render the text of body mode as well. */}
      {/* {document.body.style.backgroundColor=bodymode} */} 
      <Navbar title="TextUtils" about_text="About Text Utils" search={false} mode={mode} toggle_function={toggle_mode} toggle_body_color = {toggle_body_color}/>
      <Alert alert={alert}/>
        <TextForm heading="Enter Your Text To Analyse" mode={mode} render_alert={render_alert} body_col={bodymode}/>
        {/* <About/> */}
    </div>
  );
}

export default App;
