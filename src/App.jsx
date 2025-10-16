import React from "react";
import { Analytics } from "@vercel/analytics/react";
import Navbar from "./components/NavBar";
import FinderContainer from "./components/FinderContainer";
import Footer from "./components/Footer";
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
          title="BSc.Hon Paramedical"
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
          title="B.Voc Paramedical"
          place="Find Nearest Centers"
          placeholder="Enter your city or Pincode"
          dataset={centers}
          formatter={(center) => (
            <>
              {/* <div>
                <strong>{center.campus}</strong>,
              </div>
              <strong>Address:</strong> {center.address}. —
              <span className="distance"> {center.distance.toFixed(2)} km</span> */}
              <div
                style={{
                  display: "flex",
                  justifyContent: "space-between",
                  alignItems: "center",
                  margin: "2px",
                }}
              >
                <strong>{center.campus}</strong>&nbsp;
                <button
                  onClick={() => navigator.clipboard.writeText(center.address)}
                  className="copy-button"
                >
                  Copy Address
                </button>
              </div>
              <strong>Address:</strong> {center.address}. —
              <span className="distance"> {center.distance.toFixed(2)} km</span>
            </>
          )}
        />

        <FinderContainer
          title="BBA in Hotel Management"
          place="Find Nearest Centers"
          placeholder="Enter your city or Pincode"
          dataset={BSFICenters}
          formatter={(center) => (
            <>
              <div
                style={{
                  display: "flex",
                  justifyContent: "space-between",
                  alignItems: "center",
                  margin: "2px",
                }}
              >
                <strong className="universitiy_name">
                  {center.university}
                </strong>{" "}
                <button
                  onClick={() => navigator.clipboard.writeText(center.address)}
                  className="copy-button"
                >
                  Copy Address
                </button>
              </div>
              <strong>Address:</strong> {center.address}. —
              <strong>{center.campus}</strong>, State: {center.state}, Region:{" "}
              {center.region} —
              <span className="distance"> {center.distance.toFixed(2)} km</span>
            </>
          )}
        />
      </div>
      <Footer />
      <Analytics />
    </>
  );
}
