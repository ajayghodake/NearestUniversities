// src/App.jsx
import React, { useState } from "react";
import { findNearestUniversity } from "./utils/findNearestUniversity";
import './App.css';
export default function App() {
  const [city, setCity] = useState("");
  const [result, setResult] = useState(null);

  const handleSubmit = async (e) => {
    e.preventDefault();
    const nearest = await findNearestUniversity(city);
    setResult(nearest);
  };

  return (
    <div className="p-4 max-w-md mx-auto">
      <h1 className="text-xl font-bold mb-4">Find Nearest University</h1>
      <form onSubmit={handleSubmit} className="space-y-2">
        <input
          type="text"
          className="border p-2 w-full"
          placeholder="Enter your city"
          value={city}
          onChange={(e) => setCity(e.target.value)}
        />
        <button
          type="submit"
          className="bg-blue-600 text-white px-4 py-2 rounded"
        >
          Find Nearest
        </button>
      </form>

      {result && (
        <div className="mt-4">
          <h2 className="text-lg font-semibold">Nearest University:</h2>
          <p>{result.name} in {result.city}</p>
        </div>
      )}
    </div>
  );
}
