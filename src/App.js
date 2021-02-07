import "./App.css";
import Navbar from "./components/NavBar_React";
import Tab_React from "./components/Tab_React";
import Counter from "./components/Counter";
import Calendar from "./components/Calendar";
import Timer from "./components/Timer";
import TrackMouse from "./components/TrackMouse";
import ReactForm from "./components/Form";
import SlideShow from "./components/SlideShow";
import SortTable from "./components/SortTable";
import TablePagination from "./components/Pagination";
import Routing from "./components/Routing";

function App() {
  return (
    <>
      <h2>Navbar</h2>
      <Navbar />
      <h2>Tab</h2>
      <Tab_React />
      <h2>Counter</h2>
      <Counter />
      <h2>Calendar</h2>
      <Calendar />
      <h2>Timer</h2>
      <Timer />
      <h2>Track Mouse</h2>
      <TrackMouse />
      <h2>React Form</h2>
      <ReactForm />
      <h2>Slide Show</h2>
      <SlideShow />
      <h2>Sort Table</h2>
      <SortTable />
      <h2>Pagination</h2>
      <TablePagination />
      <h2>Routing</h2>
      <Routing />
    </>
  );
}

export default App;
