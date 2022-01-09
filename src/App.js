import { useState } from "react";
import "./App.css";
import {
  BrowserRouter as Router,
  renderMatches,
  Route,
  Routes,
  Link,
} from "react-router-dom";
import ActiveComplaints from "./components/active-complaints/ActiveComplaints";
import CompDone from "./components/comp-done/CompDone";
import NewComplaint from "./components/newComplaint/NewComplaint";
import OptionsPage from "./components/options-page/OptionsPage";
import ComplaintDeets from "./components/complaint-details/ComplaintDeets";

function App() {
  const [complaints, setComplaints] = useState([]);

  function add_new_complaint(new_complaint) {
    console.log("add_new_complaint");
    complaints.push(new_complaint);
    setComplaints(complaints);
  }
  
  return (
    <Router>
      <div className="App">
        <Routes>
          <Route path="/" element={<OptionsPage />}></Route>
          <Route path="/create-complaint" element={<NewComplaint add_new_complaint={add_new_complaint}/>}></Route>
          <Route path="/active-complaints" element={<ActiveComplaints />}></Route>
          <Route path="/complaint-details" element={<ComplaintDeets/>}></Route>
          <Route path="/complaint-registered" element={<CompDone />}></Route>
        </Routes>
      </div>
    </Router>
  );
}

export default App;