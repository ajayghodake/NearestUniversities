import React, { useState, useRef, useEffect } from "react";
import "../App.css";

export default function FinderContainer({ title, placeholder, dataset, formatter }) {
  const [city, setCity] = useState("");
  const [results, setResults] = useState([]);
  const inputRef = useRef(null);

  useEffect(() => {
    inputRef.current?.focus();
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();
    const { findNearest } = await import("../utils/findNearest");
    const nearest = await findNearest(city, dataset);
    setResults(nearest);
    inputRef.current?.focus();
  };

  return (
    <div className="container">
      <h2 className="title">{title}</h2>
      <form onSubmit={handleSubmit} className="form">
        <input
          type="text"
          className="input"
          placeholder={placeholder}
          value={city}
          onChange={(e) => setCity(e.target.value)}
          ref={inputRef}
        />
        <button type="submit" className="button">
          Find Nearest
        </button>
      </form>

      {results.length > 0 && (
        <div className="result">
          <h2 className="subtitle">Top 3 Results:</h2>
          <hr />
          <ol className="university-list">
            {results.map((item, index) => (
              <div key={index}>
                <li className="university-item">{formatter(item)}</li>
                {index < results.length - 1 && <hr />}
              </div>
            ))}
          </ol>
        </div>
      )}
    </div>
  );
}
