import React from "react";
import "./Flight_Detail_Selection.css";
import Date_Picker_Component from "./Date_Picker_Component";

export default function Flight_Detail_Selection(props) {

  const cities = [
    { value: "Mumbai" },
    { value: "Delhi" },
    { value: "Bangalore" },
    { value: "Hyderabad" },
    { value: "Chennai" },
    { value: "Kolkata" },
    { value: "Ahmedabad" },
    { value: "Pune" },
    { value: "Jaipur" },
    { value: "Lucknow" },
  ];

  return (
    <div class="flight_detail_container">
      <div class="flight_card">
        <h3>From</h3>
        <input
          className="flight_city_options"
          required
          type="text"
          placeholder="Delhi"
          id="fligth_from"
          list="fight_from_city_options" // ID of the datalist
        />
        <datalist id="fight_from_city_options">
          {cities.map((city) => (
            <option value={city.value} />
          ))}
        </datalist>
      </div>
      <div class="flight_card">
        <h3>To</h3>
        <input
          className="flight_city_options"
          type="text"
          placeholder="Mumbai"
          id="fligth_to"
          list="fight_to_city_options" // ID of the datalist
        />
        <datalist id="fight_to_city_options">
          {cities.map((city) => (
            <option value={city.value} />
          ))}
        </datalist>
      </div>
      <div class="flight_card">
        <h3>Departure</h3>
        <Date_Picker_Component ></Date_Picker_Component>
      </div>
      <div class="flight_card">
        <h3>Return</h3>
        <Date_Picker_Component disabled={props.radioValue === 1 ? true : false}></Date_Picker_Component>
      </div>
      <div class="flight_card">
        <h3>Travellers</h3>
        <input type = "number" id="flight_travellers"></input>
      </div>
    </div>
  );
}
