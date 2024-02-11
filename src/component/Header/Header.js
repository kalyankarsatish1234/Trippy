import React from "react";
import { Link } from "react-router-dom";
import { Routes, Route } from "react-router-dom"; // Import Routes and Route from react-router-dom
// Import your Login component
import mytrip from "../../images/mytrip.jpg";
import MyBiz from "../../images/MyBiz.jpg";
import mytrip2 from "../../images/mytrip2.jpg";
import Login from "../Login/Login23";
import "./Header.css";

function Header() {
  const logo = window.location.origin + "/mytrip2.jpg";
  const mybiz = window.location.origin + "/MyBiz.jpg";
  const travellug = window.location.origin + "/mytrip2.jpg";

  return (
    <div>
      <div className="header-main" id="Header">
        <div>
          <img
            className="header-img-2"
            src={logo}
            alt="List Your Property"
           
            width="30"
            height="30"
          />
          
        </div>
        <div className="header-mybiz" style={{ marginRight: "-70px" }}>
         <a href="https://mybiz.makemytrip.com/"> <img
            className="header-img-2"
            src={MyBiz}
            alt="mybiz"
            width="30"
            height="30"
            style={{ paddingRight: "5px" }}
          /></a>
          <div>
            <div className="header-mybiz-1">Introducing myBiz</div>
            <div className="header-mybiz-2">Business Travel Solution</div>
          </div>
        </div>
        <div className="header-mytrips" style={{ marginLeft: "50px" }}>
        
        <a href="/login">
        <img
            src={mytrip2}
            alt="mybiz"
            width="30"
            height="30"
            style={{ paddingRight: "5px" }}
          /></a>  
          <div>
            <div className="header-mytrips-1">MyTrips</div>
            <div className="header-mytrips-2">Manage your bookings</div>
          </div>
        </div>
        <div className="header-login">
          {/* Replace <a> tag with <Link> */}
          <Link to="/Login" style={{ color: "white", textDecoration: "none" }}>
            Login
          </Link>
        </div>
      </div>
      {/* Define Routes for Login component */}
      <Routes>
        <Route>
          <Route path="/Login" element={<Login />} />
        </Route>
      </Routes>
    </div>
  );
}

export default Header;
