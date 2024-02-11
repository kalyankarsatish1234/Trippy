import React from "react";
import Navigation_Bar from "./Navigation_Bar";
import "./Container_Nav_Options.css";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Flight_Component from "./Flight_Component";
import Hotel_Component from "./Hotel_Component";
import Login from "../Login/Login23";
import Header from "../Header/Header";

export default function Container_Nav_Options() {
  return (
    
      <div className="container-nav-options">
        <Navigation_Bar></Navigation_Bar>

        <div className="card">
          <Routes>
        
            <Route path="/flights" element={<Flight_Component />} />
            <Route path="/hotels" element={<Hotel_Component />} />
           
    
          </Routes>
          <div class="search_button_div">
            <button type="button" class="btn btn-primary">
              SEARCH
            </button>
          </div>
        </div>
      </div>
  );
}
