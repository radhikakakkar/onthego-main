import React from "react";
import Header from "../header/Header";
import "./FourthPage.css";
import image from "../../images/fourth.jpeg";
import { useNavigate } from "react-router-dom";

function FourthPage() {
  const navigate = useNavigate();
  return (
    <div className="fourth-page-container">
      <div
        className="fourth-display-div"
        style={{
          backgroundImage: `url(${image})`,
          backgroundSize: "cover",
          backgroundPosition: "center center",
          backgroundRepeat: "no-repeat",
        }}
      ></div>
      <div className="fourth-content-div">
        <Header />
        <div className="fourth-page-text">
          <p id="text-question">Is the information verified & legit?</p>
          <p>As it is the users on</p>
          <p>both ends of interface,</p>
          <p> the information is up to date.</p>
          <p>The credibility is </p> <p> further maintained by our </p>
          <p>‘click on location only’ </p>
          <p>feature</p>
        </div>
        <button
          className="orange-btn"
          onClick={() => navigate("/")}
        >
          Join Us
        </button>
      </div>
    </div>
  );
}

export default FourthPage;
