import React from "react";
import axios from "axios";
import { useState } from "react";
import ComplaintItem from "../complaint-item/ComplaintItem";
import CompHeader from "../complaints-header/CompHeader";
import "./ActiveComplaints.css";
import { useNavigate } from "react-router-dom";

function ActiveComplaints(complaints) {
  const navigate = useNavigate();

  const [list, setList] = useState([]);

  async function fetchData() {
    const res = await (
      await axios.get("https://onthego-server.herokuapp.com/")
    ).data.data;
    setList(res);
  }

  fetchData();

  return (
    <div className="active-complaints-container">
      <CompHeader />
      <span className="active-complaints-header">Active Complaints</span>
      <hr></hr>
      <div className="cardList">
        {list.map((item) => (
          <ComplaintItem key={item._id} complaint_data={item} />
        ))}
      </div>
      <button
        onClick={() => navigate("/create-complaint")}
        className="new-complaint-btn"
      >
        New Complaint
      </button>
    </div>
  );
}

export default ActiveComplaints;
