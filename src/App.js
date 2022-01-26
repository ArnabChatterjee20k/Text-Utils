import Navbar from "./components/Navbar";
import TextForm from "./components/TextForm";
function App() {
  return (
    <div>
      <Navbar title="TextUtils" about_text="About Text Utils" search={true} />
        <TextForm heading="Enter Your Text To Analyse"/>
    </div>
  );
}

export default App;
