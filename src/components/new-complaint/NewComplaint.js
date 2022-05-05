import axios from "axios";
import CompHeader from "../complaints-header/CompHeader";
import "./NewComplaint.css";
import { useNavigate } from "react-router-dom";
// import { TextInputField } from 'evergreen-ui'


function NewComplaint({ add_new_complaint }) {
  const navigate = useNavigate();
  let latitude, longitude, newImage;

  function new_complaint(e) {
    e.preventDefault();
    const title = document.getElementById("complaint-title-input").value;
    const description = document.getElementById(
      "complaint-description-input"
    ).value;
    const formData = new FormData();
    formData.append("title", title);
    formData.append("description", description);
    formData.append("latitude", latitude);
    formData.append("longitude", longitude);
    formData.append("image", newImage);
    axios
      .post("https://onthego-server.herokuapp.com/save-complaint", formData)
      .then((res) => navigate("/complaint-registered"))
      .catch((err) => {
        console.log(err.response.data);
      });
  }

  const addImage = (event) => {
    newImage = event.target.files[0];
    const imagePreview = document.getElementById("imagePreview");
    const imageIcon = document.getElementsByClassName("imageUpload-label");
    const reader = new FileReader();
    reader.addEventListener("load", function () {
      imagePreview.setAttribute("src", this.result);
      imagePreview.style.visibility = "visible";
      imagePreview.style.width = "40%";
      imageIcon.style.width = "60%";
    });
    reader.readAsDataURL(newImage);

  };

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

      <form
        method="POST"
        className="complaint-form"
        onSubmit={new_complaint}
      // onLoad={locate()}
      >
        <div id="current-location-field">
          <p>Your Location:</p>
          <div className="current-location">
            <span id="latitude"></span>
            <span id="longitude"></span>
          </div>

        </div>
        <div className="complaint-title">
          <input
            type="text"
            name="comaplaint-title-input"
            className="form-control"
            id="complaint-title-input"
            placeholder=" "
            size={50}

          // style=" font-size:2em; "
          ></input>
          <label className="form-label">Complaint Title</label>
          {/* <TextInputField
            inputWidth={400}
            label="Complaint Title"
            description="Enter a titl for your complaint"
            placeholder="complaint title"
          /> */}
        </div>

        <div className="img-container">

          <img src="" id="imagePreview" style={{ height: "300px" }}></img>

          <label className="imageUpload-label" htmlFor="imageUpload">
            <div className="image-icon">
              <i class="fas fa-camera"></i>
            </div>
          </label>

          <input
            type="file"
            name="image"
            id="imageUpload"
            accept="image/*"
            capture="environment"
            onChange={addImage}
          ></input>
          
        </div>

        <div className="complaint-description">
          <textarea
            type="text"
            placeholder=" "
            size={150}
            className="form-control"
            name="complaint-description-input"
            id="complaint-description-input"

          ></textarea>
          <label className="form-label-t">Complaint Description</label>

        </div>
        <button type="submit" className="orange-btn">
          Submit
        </button>
      </form>
    </div>
  );
}

export default NewComplaint;
