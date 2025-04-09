// import React, { useState, useRef, useEffect } from "react";
// import { findNearestUniversities } from "./utils/findNearestUniversity";
// import "./App.css";

// export default function App() {
//   const [city, setCity] = useState("");
//   const [results, setResults] = useState([]);
//   const inputRef = useRef(null);

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     const nearest = await findNearestUniversities(city);
//     setResults(nearest);
//     // setCity("");
//     inputRef.current?.focus();
//   };

// useEffect(() => {
//   inputRef.current.focus();
// }, [])

//   return (
//     <div className="container">
//       <h2 className="title">Find Nearest University for EDGE</h2>
//       <form onSubmit={handleSubmit} className="form">
//         <input
//           type="text"
//           className="input"
//           placeholder="Enter your city or Pincode"
//           value={city}
//           onChange={(e) => setCity(e.target.value)}
//           ref={inputRef}
//         />
//         <button type="submit" className="button">
//           Find Nearest
//         </button>
//       </form>

//       {results.length > 0 && (
//         <div className="result">
//           <h2 className="subtitle">Top 3 Nearest Universities:</h2>
//           <ol className="university-list">
//             {results.map((uni, index) => (
//               <li key={index} className="university-item">
//                 <div>
//                   <strong>{uni.name}</strong> in {uni.city}, State: {uni.state}, Region: {uni.region} —
//                   <span className="distance"> {uni.distance.toFixed(2)} km</span>
//                 </div>
//               </li>
//             ))}
//           </ol>
//         </div>
//       )}


      
//     </div>
//   );
// }



import React, { useState, useRef, useEffect } from "react";
import { findNearestUniversities } from "./utils/findNearestUniversity";
import { findNearestCenters } from "./utils/findNearestCenters";
import "./App.css";

export default function App() {
  const [cityUni, setCityUni] = useState("");
  const [cityCenter, setCityCenter] = useState("");
  const [uniResults, setUniResults] = useState([]);
  const [centerResults, setCenterResults] = useState([]);

  const inputRefUni = useRef(null);
  const inputRefCenter = useRef(null);

  useEffect(() => {
    inputRefUni.current?.focus();
  }, []);

  const handleUniversitySubmit = async (e) => {
    e.preventDefault();
    const nearest = await findNearestUniversities(cityUni);
    setUniResults(nearest);
    inputRefUni.current?.focus();
  };

  const handleCenterSubmit = async (e) => {
    e.preventDefault();
    const nearest = await findNearestCenters(cityCenter);
    setCenterResults(nearest);
    inputRefCenter.current?.focus();
  };

  return (
    <div className="container-wrapper">

      {/* 🏫 University Finder Container */}
      <div className="container">
        <h2 className="title">Find Nearest University for EDGE</h2>
        <form onSubmit={handleUniversitySubmit} className="form">
          <input
            type="text"
            className="input"
            placeholder="Enter your city or Pincode"
            value={cityUni}
            onChange={(e) => setCityUni(e.target.value)}
            ref={inputRefUni}
          />
          <button type="submit" className="button">
            Find Nearest Universities
          </button>
        </form>

        {uniResults.length > 0 && (
          <div className="result">
            <h2 className="subtitle">Top 3 Nearest Universities:</h2>
            <ol className="university-list">
              {uniResults.map((uni, index) => (
                <li key={index} className="university-item">
                  <strong>{uni.name}</strong> in {uni.city}, State: {uni.state}, Region: {uni.region} —
                  <span className="distance"> {uni.distance.toFixed(2)} km</span>
                </li>
              ))}
            </ol>
          </div>
        )}
      </div>

      {/* 🏢 Center Finder Container */}
      <div className="container">
        <h2 className="title">Find Nearest Emversity SMART Centers</h2>
        <form onSubmit={handleCenterSubmit} className="form">
          <input
            type="text"
            className="input"
            placeholder="Enter your city or Pincode"
            value={cityCenter}
            onChange={(e) => setCityCenter(e.target.value)}
            ref={inputRefCenter}
          />
          <button type="submit" className="button">
            Find Nearest Centers
          </button>
        </form>

        {centerResults.length > 0 && (
          <div className="result">
            <h2 className="subtitle">Top 3 Nearest Centers:</h2>
            <ol className="university-list">
              {centerResults.map((center, index) => (
                <li key={index} className="university-item">
                  <strong>{center.campus}</strong> – {center.address}, State: {center.state}, Region: {center.region} —
                  <span className="distance"> {center.distance.toFixed(2)} km</span>
                </li>
              ))}
            </ol>
          </div>
        )}
      </div>

    </div>
  );
}

