import React from "react";
import Header from "../header/Header";
import "./SecondPage.css";
import image from "../../images/second.jpeg";
import { useNavigate } from "react-router-dom";

function SecondPage() {
  const navigate = useNavigate();
  return (
    <div className="second-page-container">
      <div
        className="second-display-div"
        style={{
          backgroundImage: `url(${image})`,
          backgroundSize: "cover",
          backgroundPosition: "center center",
          backgroundRepeat: "no-repeat",
        }}
      ></div>
      <div className="second-content-div">
        <Header />
        <div className="second-page-text">
          <p id="text-question">What do we do?</p>
          <p>We let people step in</p>
          <p>as volunteers in order</p>
          <p>to make the city</p>
          <p>flawless.</p>
        </div>
        <button
          className="white-btn"
          onClick={() => navigate("/about-us-3")}
        >
          Next<i className="fas fa-arrow-right"></i>
        </button>
      </div>
    </div>
  );
}

export default SecondPage;