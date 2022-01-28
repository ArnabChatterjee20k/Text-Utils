import { useState } from "react";
import About from "./components/About";
import Navbar from "./components/Navbar";
import TextForm from "./components/TextForm";
function App() {
  const [mode,setmode] = useState("light") // whether dark mode is enabled or not

  const toggle_mode = ()=>{
    // mode==="light"?setmode("dark"):setmode("light")
    if(mode==="light"){
      setmode("dark")
      document.body.style.backgroundColor="grey"
    }
    else{
      setmode("light")
      document.body.style.backgroundColor="white"
    }
  }
  return (
    <div>
      <Navbar title="TextUtils" about_text="About Text Utils" search={false} mode={mode} toggle_function={toggle_mode}/>
        <TextForm heading="Enter Your Text To Analyse" mode={mode}/>
        {/* <About/> */}
    </div>
  );
}

export default App;
