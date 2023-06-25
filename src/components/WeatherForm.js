import React, { useState } from 'react';
import './WeatherForm.css';

function WeatherForm() {
  const [postalCode, setPostalCode] = useState('');
  const [startDate, setStartDate] = useState('');
  const [endDate, setEndDate] = useState('');
  const [forecasts, setForecasts] = useState([]);

  const handleSubmit = (event) => {
    event.preventDefault();

    // Clear previous data
    setForecasts([]);

    fetch(`http://localhost:8080/api/v1/weather-summary?postalCode=${postalCode}&startDate=${startDate}&endDate=${endDate}`)
      .then(response => {
        if (response.ok) {
          return response.json();
        } else {
          throw new Error('Failed to fetch weather summary');
        }
      })
      .then(data => {
        setForecasts(data.forecasts);
      })
      .catch(error => {
        console.error(error);
      });
  };

  return (
    <div className="form-container">
      <h5>Enter your zipcode and date range to get a forecast! Forecast can only look forward 14 days from today.</h5>
      <form className="main-form" onSubmit={handleSubmit}>
        <label>
          <input placeholder="Zipcode" type="text" value={postalCode} onChange={event => setPostalCode(event.target.value)} />
        </label>
        <label>
          Start Date:
          <input type="date" value={startDate} onChange={event => setStartDate(event.target.value)} />
        </label>
        <label>
          End Date:
          <input type="date" value={endDate} onChange={event => setEndDate(event.target.value)} />
        </label>
        <button type="submit">Get Weather Summary</button>
      </form>

      <ul>
        {forecasts.map((item, index) => (
          <li key={index}>
            <b>Date:</b> {item.date}<br />
            <b>Average Precipitation Probability:</b> {item.averagePrecipitationProbability}<br />
            <b>Average Relative Humidity:</b> {item.averageRelativeHumidity}<br />
            <b>Average Wind Speed:</b> {item.averageWindSpeed}<br />
            <b>Lowest Temperature:</b> {item.lowestTemperature}<br />
            <b>Highest Temperature:</b> {item.highestTemperature}<br />
          </li>
        ))}
      </ul>
    </div>
  );
}
  export default WeatherForm;