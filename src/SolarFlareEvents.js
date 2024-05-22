import React, { useState, useEffect } from 'react';

const SolarFlareEvents = () => {
  const [flares, setFlares] = useState([]);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchFlares = async () => {
      try {
        const startDate = '2024-05-15';
        const endDate = '2024-05-22';
        const apiKey = 'r4O4JBvPqE68c5uHJGghEThotzCaZwGkdt41Hwtq';
        const url = `https://api.nasa.gov/DONKI/FLR?startDate=${startDate}&endDate=${endDate}&api_key=${apiKey}`;
        
        const response = await fetch(url);
        if (!response.ok) {
          throw new Error('Failed to fetch solar flare events');
        }
        
        const data = await response.json();
        setFlares(data);
        setError(null);
      } catch (error) {
        setError(error.message);
      }
    };

    fetchFlares();
  }, []);

  return (
    <div className='solar-flare-container'>
      <h2>Solar Flare Events</h2>
      {error && <p>Error: {error}</p>}
      <ul>
        {flares.map((flare, index) => (
          <li key={index}>
            <strong>Class:</strong> {flare.classType}<br />
            <strong>Peak Time:</strong> {flare.peakTime}<br />
          </li>
        ))}
      </ul>
    </div>
  );
};

export default SolarFlareEvents;
