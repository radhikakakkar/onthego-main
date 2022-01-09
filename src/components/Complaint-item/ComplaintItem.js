import React from "react";
import "./ComplaintItem.css";
import { useNavigate } from "react-router-dom";

function ComplaintItem({ complaint_data }) {

  const navigate = useNavigate();
  
  const {latitude, longitude, title} = complaint_data;

  const getDetails = () => {
    navigate("/complaint-details", {complaint_data});
  }

  return (
    <a onClick={getDetails}>
      <div className="complaint-sinppet-container">
      <div className="complaint-snippet">
        <div className="complaint-header" id="complaint-header">
          {title}
        </div>
        <div className="complaint-location" id="complaint-location">
          {`Latitude:${latitude} | Longitude:${longitude}`}
        </div>
        
      </div>
      <hr></hr>
    </div>
    </a>
  );
}

export default ComplaintItem;
