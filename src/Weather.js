import React, { useState } from "react";

function Weather() {
  const [city] = useState("London");
  const [temperature] = useState("22°C");
  const [condition] = useState("Sunny");

  return (
    <div>
      <h2>City: {city}</h2>
      <p>Temperature: {temperature}</p>
      <p>Condition: {condition}</p>
    </div>
  );
}

export default Weather;
