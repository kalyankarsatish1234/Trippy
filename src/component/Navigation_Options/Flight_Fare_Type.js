import React from "react";
import "./Flight_Fare_Type.css";

export default function Flight_Fare_Type() {
  const fareTypes = [
    { text: "Regular", value: 1 },
    { text: "Armed Forces", value: 2 },
    { text: "Student", value: 3 },
  ];

  return (
    <div class="flight_fare_type_container">
      <div class="wrap_div">
        <div class="text">
          Select a <br /> fare type:
        </div>
        <div class="flight_fare_type_radio-buttons">
          {fareTypes.map((fareType, idx) => (
            <label key={idx}>
              <input type="radio" name="fareType" value={fareType.value} />
              {fareType.text} <br />
              fares
            </label>
          ))}
        </div>
      </div>

      <div class="flight_trending_flight">
        <div class="text">
          Trending <br />
          Searches:
        </div>
        <button class="flight_trending_flight_button">Mumbai - Pune</button>
      </div>
    </div>
  );
}
