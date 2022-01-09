import React from "react";
import CompHeader from "../complaints-header/CompHeader";
import "./CompDone.css";
import { useNavigate } from "react-router-dom";

function CompDone() {
  const navigate = useNavigate();

  return (
    <div className="complaint-done-container">
      <CompHeader />
      <span class="comp-done-header">Thank you!</span>
      <div className="complaint-done-body">
        <div className="symbol">
          <i id="correct" className="fas fa-check-circle"></i>
        </div>
        <div className="comp-done-text">
          <p>Your Complaint has</p>
          <p>been registered.</p>
        </div>
      </div>
      <button class="view-btn" onClick={() => navigate("/complaint-details")}>
        View
      </button>
    </div>
  );
}

export default CompDone;
