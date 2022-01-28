import { useState } from "react";
import About from "./components/About";
import Alert from "./components/Alert";
import Navbar from "./components/Navbar";
import TextForm from "./components/TextForm";
function App() {
  const [mode,setmode] = useState("light") // whether dark mode is enabled or not
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
      document.body.style.backgroundColor="grey"
      render_alert("success","Dark Mode Enabled")
    }
    else{
      setmode("light")
      document.body.style.backgroundColor="white"
      render_alert("success","Light Mode Enabled")
    }
  }
  return (
    <div>
      <Navbar title="TextUtils" about_text="About Text Utils" search={false} mode={mode} toggle_function={toggle_mode}/>
      <Alert alert={alert}/>
        <TextForm heading="Enter Your Text To Analyse" mode={mode} render_alert={render_alert}/>
        {/* <About/> */}
    </div>
  );
}

export default App;
