import React from "react";
import Header from "../header/Header";
import { useNavigate } from "react-router-dom";

import "./FirstPage.css";

function FirstPage() {
  const navigate = useNavigate();
  return (
    <div className="first-page-container">
      <div className="first-display-div"></div>
      <div className="first-content-div">
        <Header />
        <div className="first-page-text">
          <p>Helping you commute</p>
          <p>without fret,</p>
          <p>fixing one hinderance a time</p>
        </div>
        <button
          onClick={() => navigate("/introduction/page-two")}
          className="next-btn"
        >
          Continue<i className="fas fa-arrow-right"></i>
        </button>
      </div>
    </div>
  );
}

export default FirstPage;
