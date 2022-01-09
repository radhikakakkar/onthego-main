import React from "react";
import Header from "../header/Header";
import "./ThirdPage.css";
import image from "../../images/third.jpeg";
import { useNavigate } from "react-router-dom";

function ThirdPage() {
  const navigate = useNavigate();
  return (
    <div className="third-page-container">
      <div
        className="third-display-div"
        style={{
          backgroundImage: `url(${image})`,
          backgroundSize: "cover",
          backgroundPosition: "center center",
          backgroundRepeat: "no-repeat",
        }}
      ></div>
      <div className="third-content-div">
        <Header />
        <div className="third-page-text">
          <p id="text-question3">
            <p>What make us </p>
            <p>different?</p>
          </p>
          <p>We serve the people by </p>
          <p>by the people</p>
          <p>as they become the</p>
          <p>first link in </p>
          <p>the chain.</p>
        </div>
        <button
          className="next-btn"
          onClick={() => navigate("/introduction/page-four")}
        >
          Next<i className="fas fa-arrow-right"></i>
        </button>
      </div>
    </div>
  );
}

export default ThirdPage;
