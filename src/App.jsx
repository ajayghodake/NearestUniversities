import React from "react";
import Navbar from "./components/NavBar";
import FinderContainer from "./components/FinderContainer";
import universities from "./data/universities";
import centers from "./data/emversityCenters";
import BSFICenters from "./data/bsfiCenters";
import "./App.css";

export default function App() {
  return (
    <>
      <Navbar />
      <div className="container-wrapper">
        <FinderContainer
          title="BSc.Hon"
          place="Find Nearest University"
          placeholder="Enter your city or Pincode"
          dataset={universities}
          formatter={(uni) => (
            <>
              <strong>{uni.name}</strong> in <strong>{uni.city}</strong>, State:{" "}
              {uni.state}, Region: {uni.region} —
              <span className="distance"> {uni.distance.toFixed(2)} km</span>
            </>
          )}
        />

        <FinderContainer
          title="B.Voc"
          place="Find Nearest Centers"
          placeholder="Enter your city or Pincode"
          dataset={centers}
          formatter={(center) => (
            <>
              <strong className="universitiy_name">{center.university}</strong>{" "}
              — <strong>{center.campus}</strong>, State: {center.state}, Region:{" "}
              {center.region} —
              <span className="distance"> {center.distance.toFixed(2)} km</span>
            </>
          )}
        />

        <FinderContainer
          title="BBA"
          place="Find Nearest Centers"
          placeholder="Enter your city or Pincode"
          dataset={BSFICenters}
          formatter={(center) => (
            <>
              <strong className="universitiy_name">{center.university}</strong>{" "}
              — <strong>{center.campus}</strong>, State: {center.state}, Region:{" "}
              {center.region} —
              <span className="distance"> {center.distance.toFixed(2)} km</span>
            </>
          )}
        />
      </div>
    </>
  );
}
