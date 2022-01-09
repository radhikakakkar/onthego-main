import axios from "axios";
import CompHeader from "../complaints-header/CompHeader";
import "./NewComplaint.css";
import { useNavigate } from "react-router-dom";

function NewComplaint({ add_new_complaint }) {
  const navigate = useNavigate();
  let latitude, longitude, newImage;

  function new_complaint(e) {
    e.preventDefault();
    const title = document.getElementById("complaint-title-input").value;
    const description = document.getElementById("complaint-description-input").value;
    const formData = new FormData();
    formData.append('title', title);
    formData.append('description', description);
    formData.append('latitude', latitude);
    formData.append('longitude', longitude);
    formData.append('image', newImage);
    axios.post('http://localhost:5000/save-complaint', formData)
    .then(res => navigate("/complaint-registered"))
    .catch(function (response) {
      console.log(response);
    });
  }

  const addImage = (event) => {
      newImage = event.target.files[0];
  }

  function locate() {
    function success(position) {
      latitude = position.coords.latitude;
      longitude = position.coords.longitude;

      document.getElementById("latitude").innerHTML =
        `<span style="color:#3586fb;">Latitude:</span>` + latitude;
      document.getElementById("longitude").innerHTML =
        `<span style="color:#3586fb;">Longitude:</span>` + longitude;
    }

    function error() {
      alert("Unable to retrieve your location");
    }

    if (!navigator.geolocation)
      alert("Geolocation is not supported by your browser");
    else navigator.geolocation.getCurrentPosition(success, error);
  }

  return (
    <div className="new-complaint-container">
      <CompHeader />
      <span className="new-complaint-header">Register your complaint here</span>
      <hr></hr>

      <form method="POST" className="complaint-form" onSubmit={new_complaint} onLoad={locate()}>
        <div id="current-location-text">
          <p>Your Location:</p>
          <span id="latitude"></span>
          <span id="longitude"></span>
        </div>
        <div className="complaint-title">
          <input
            type="text"
            name="comaplaint-title-input"
            id="complaint-title-input"
            className="new-complaint-input"
            placeholder="Complaint Title"
          ></input>
        </div>

        <div className="img-container">
          <label htmlFor="imageUpload"><h1><i class="fas fa-camera"></i></h1></label>
          <input type="file" name="image" id="imageUpload" accept="image/*" capture="environment" onChange={addImage} ></input>
        </div>

        <div className="complaint-description">
          <textarea
            type="text"
            placeholder="Complaint Description"
            className="complaint-description-input"
            name="complaint-description-input"
            id="complaint-description-input"
          ></textarea>
        </div>
        <button  type="submit" className="submit-form">Submit</button>
      </form>
    </div>
  );
}

export default NewComplaint;
