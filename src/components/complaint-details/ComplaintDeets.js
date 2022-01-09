import React from "react";
import CompHeader from "../complaints-header/CompHeader";
import "./ComplaintDeets.css";
import { useNavigate } from "react-router-dom";

function ComplaintDeets(complaint_data) {
  const navigate = useNavigate();
  const {_id, latitude, longitude, title, image, description} = complaint_data;
  return (
    <div className="complaint-deets-container">
      <CompHeader />
      <span className="active-complaints-header">Active Complaints</span>
      <hr></hr>
      <div className="complaint-deets-body">
        <div className="complaint-title2">
          <span className="label-header">
            Complaint Title:
            <span className="field-information" id="title">
              {title}
            </span>
          </span>
        </div>
        <div className="complaint-location2" id="complaint-location">
          <span className="label-header">
            Location:
            <span className="field-information" id="location">
              {`Latitude:${latitude} | Longitude:${longitude}`}
            </span>
          </span>
        </div>
        <div className="detailed-img-display">
          <span class="label-header">Images:</span>
          <div class="all-images">
            <img id="img" src={`http://localhost:5000/${image}`} alt="image"></img>
          </div>
        </div>
        <div className="detailed-description">
          <span class="label-header">Description:</span>
          <p id="detailed-description-text">{description}</p>
        </div>
      </div>
      <button className="return-home-btn" onClick={() => navigate("/active-complaints")}>Home</button>
    </div>
  );
}

export default ComplaintDeets;
