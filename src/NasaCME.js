import React, { useState, useEffect } from "react";

const NasaCME = () => {
  const [cmeData, setCmeData] = useState([]);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(true);

  const fetchCmeData = async () => {
    const startDate = "2024-05-20";
    const endDate = "2024-05-22";   
    const apiKey = "r4O4JBvPqE68c5uHJGghEThotzCaZwGkdt41Hwtq";  
    const url = `https://api.nasa.gov/DONKI/CME?startDate=${startDate}&endDate=${endDate}&api_key=${apiKey}`;

    try {
      const response = await fetch(url);
      if (!response.ok) {
        throw new Error("Failed to fetch CME data");
      }
      const data = await response.json();
      setCmeData(data);
    } catch (err) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchCmeData();
  }, []);

  return (
    <div className="nasa-cme">
      <h2>NASA Coronal Mass Ejections</h2>
      {error && <p className="error">{error}</p>}
      <ul>
        {cmeData.map((cme, index) => (
          <li key={index}>
            <h2>{cme.activityID}</h2>
            <p><strong>Start Time:</strong> {cme.startTime}</p>
            <p><strong>Note:</strong> {cme.note}</p>
            <p><strong>Catalog:</strong> {cme.catalog}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default NasaCME;
