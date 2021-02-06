import "./App.css";
import Navbar from "./components/NavBar_React";
import Tab_React from "./components/Tab_React";
import Counter from "./components/Counter";
import Calendar from "./components/Calendar";
import Timer from "./components/Timer";
import TrackMouse from "./components/TrackMouse";

function App() {
  return (
    <>
      <Navbar />
      <Tab_React />
      <Counter />
      <Calendar />
      <Timer />
      <TrackMouse />
    </>
  );
}

export default App;
