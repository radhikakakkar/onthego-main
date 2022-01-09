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
import FirstPage from "./components/first-page/FirstPage";
import FourthPage from "./components/fourth-page/FourthPage";
import NewComplaint from "./components/newComplaint/NewComplaint";
import OptionsPage from "./components/options-page/OptionsPage";
import SecondPage from "./components/second-page/SecondPage";
import ThirdPage from "./components/third-page/ThirdPage";
import ComplaintDeets from "./components/complaint-details/ComplaintDeets";

function App() {
  const [complaints, setComplaints] = useState([]);

  function add_new_complaint(new_complaint) {
    console.log("add_new_complaint");
    complaints.push(new_complaint);
    setComplaints(complaints);

    // <ActiveComplaints complaints={complaints} />
  }
  
  return (
    <Router>
      <div className="App">
        <Routes>
          <Route path="/introduction/page-one" element={<FirstPage />}></Route>
          <Route path="/introduction/page-two" element={<SecondPage />}></Route>
          <Route
            path="/introduction/page-three"
            element={<ThirdPage />}
          ></Route>
          <Route
            path="/introduction/page-four"
            element={<FourthPage />}
          ></Route>
          <Route path="/choose-to-proceed" element={<OptionsPage />}></Route>
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
{
  /* <SecondPage />
          </Route>
          <Route path="/introduction/page3">
            <ThirdPage />
          </Route>
          <Route path="/introduction/page4">
            <FourthPage />
          </Route>
          <Route path="/choose-to-proceed">
            <OptionsPage />
          </Route>
          <Route path="/complaint-registered">
            <CompDone />
          </Route>
          <Route path="/create-complaint">
            <NewComplaint add_new_complaint={add_new_complaint} />
          </Route>
          <Route path="/complaint-details">
            <ComplaintDeets />
          </Route> */
}
{
  /* <ActiveComplaints complaints={complaints} /> */
}

{
  /* <FirstPage /> */
}
{
  /* <SecondPage /> */
}
{
  /* <ThirdPage /> */
}
{
  /* <FourthPage /> */
}
{
  /* <OptionsPage /> */
}
{
  /* <CompDone /> */
}

{
  /* <ActiveComplaints complaints={complaints} /> */
}
