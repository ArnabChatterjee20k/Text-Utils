import Navbar from "./components/Navbar";
import TextForm from "./components/TextForm";
function App() {
  return (
    <div>
      <Navbar title="TextUtils" about_text="About Text Utils" search={true} />
      <div className="container my-3 py-3">
        <TextForm heading="Enter Your Text To Analyse"/>
      </div>
    </div>
  );
}

export default App;
