import React, { useState } from "react";
import { findNearestUniversities } from "./utils/findNearestUniversity";
import "./App.css";

export default function App() {
  const [city, setCity] = useState("");
  const [results, setResults] = useState([]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    const nearest = await findNearestUniversities(city);
    setResults(nearest);
  };

  return (
    <div className="container">
      <h2 className="title">Find Nearest University for EDGE</h2>
      <form onSubmit={handleSubmit} className="form">
        <input
          type="text"
          className="input"
          placeholder="Enter your city or Pincode"
          value={city}
          onChange={(e) => setCity(e.target.value)}
        />
        <button type="submit" className="button">
          Find Nearest
        </button>
      </form>

      {results.length > 0 && (
        <div className="result">
          <h2 className="subtitle">Top 3 Nearest Universities:</h2>
          <ol className="university-list">
            {results.map((uni, index) => (
              <li key={index} className="university-item">
                <div>
                  <strong>{uni.name}</strong> in {uni.city}, State: {uni.state}, Region: {uni.region} —
                  <span className="distance"> {uni.distance.toFixed(2)} km</span>
                </div>
              </li>
            ))}
          </ol>
        </div>
      )}
    </div>
  );
}
