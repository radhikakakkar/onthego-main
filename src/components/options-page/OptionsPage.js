import React from "react";
import Header from "../header/Header";
import "./OptionsPage.css";
import { useNavigate } from "react-router-dom";

function OptionsPage() {
  const navigate = useNavigate();

  return (
    <div className="options-page-container">
      <div className="options-display-div"></div>
      <div className="options-content-div">
        <Header />
        <div className="options">
          <button
            className="options-btn"
            id="new-complaint"
            onClick={() => navigate("/create-complaint")}
          >
            New Complaint
          </button>
          <button
            className="options-btn"
            id="all-complaint"
            onClick={() => navigate("/active-complaints")}
          >
            All Complaints
          </button>
        </div>
        <p className="info">Choose to proceed</p>
      </div>
    </div>
  );
}

export default OptionsPage;
