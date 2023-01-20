import logo from "./logo.svg";
import "./App.css";
import NavBar from "./components/NavBar/NavBar";
import Pricing from "./components/Pricing/Pricing";
import AssignmentMarks from "./AssignmentMarks/AssignmentMarks";
import PhoneBar from "./PhoneBar/PhoneBar";

function App() {
  return (
    <div className="App">
      <NavBar></NavBar>
      <h1 className="text-3xl font-bold underline">Hello world!</h1>
      <p>This is P tag</p>
      <Pricing></Pricing>
      <AssignmentMarks></AssignmentMarks>
      <PhoneBar></PhoneBar>
    </div>
  );
}

export default App;
