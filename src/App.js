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
import MarkdownPreviewer from "./components/MarkdownPreviewer";
import APIcall from "./components/APIcall";
import Cache from "./components/Cache";
import ImageUpload from "./components/ImageUpload";
import ReactCharts from "./components/ReactCharts";
import ReduxTodoList from "./components/ReduxTodoList";
import BasicAnimation from "./components/BasicAnimation";
import Calculator from "./components/Calculator";
import Positioning from "./components/Positioning";
import Flexbox from "./components/Flexbox";
import Testing from "./components/Testing";

// Redux imports
import { Provider } from "react-redux";
import ConfigureStore from "./redux/configureStore";

const store = ConfigureStore();

function App() {
  return (
    <>
      <h2 className="section-header">Navbar</h2>
      <Navbar />
      <h2 className="section-header">Tab</h2>
      <Tab_React />
      <h2 className="section-header">Counter</h2>
      <Counter />
      <h2 className="section-header">Calendar</h2>
      <Calendar />
      <h2 className="section-header">Timer</h2>
      <Timer />
      <h2 className="section-header">Track Mouse</h2>
      <TrackMouse />
      <h2 className="section-header">React Form</h2>
      <ReactForm />
      <h2 className="section-header">Slide Show</h2>
      <SlideShow />
      <h2 className="section-header">Sort Table</h2>
      <SortTable />
      <h2 className="section-header">Pagination</h2>
      <TablePagination />
      <h2 className="section-header">Routing</h2>
      <Routing />
      <h2 className="section-header">Markdown Previewer</h2>
      <MarkdownPreviewer />
      <h2 className="section-header">API Call</h2>
      <APIcall />
      <h2 className="section-header">Cache</h2>
      <Cache />
      <h2 className="section-header">Image Upload</h2>
      <ImageUpload />
      <h2 className="section-header">React Charts</h2>
      <ReactCharts />
      <h2 className="section-header">Redux Todo List</h2>
      <Provider store={store}>
        <ReduxTodoList />
      </Provider>
      <h2 className="section-header">Basic Animation</h2>
      <BasicAnimation />
      <h2 className="section-header">Calculator</h2>
      <Calculator />
      <h2 className="section-header">Positioning</h2>
      <Positioning />
      <h2 className="section-header">Flexbox</h2>
      <Flexbox />
      <h2 className="section-header">Testing</h2>
      <Testing />
    </>
  );
}

export default App;
