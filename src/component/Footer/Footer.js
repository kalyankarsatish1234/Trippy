import React from 'react';
import twitterLogo from "../../images/twitter_logo.jpg";
import githubLogo from "../../images/github_logo.png";

import './footer.css';
import './Footer2.css';



const Footer = () => {
  return (
    <div className='footer'>
      <footer className="footer">
        <div className="footerData">
          <h1>PRODUCT OFFERING</h1>
          <p>
            Flights, International Flights, Charter Flights, Hotels, International Hotels, Homestays and Villas, Activities, Holidays In India, 
            International Holidays, Book Hotels From UAE, myBiz for Corporate Travel, Book Online Cabs, Book Bus Tickets, Book Train Tickets, Cheap Tickets to India, 
            Book Flights From US, Book Flights From UAE, Trip Planner, Gift Cards, Trip Money, Trip Ideas, Travel Blog, PNR Status, Trippy Advertising Solutions, 
            One Way Cab
          </p>
        </div>
        {/* ... (repeat similar structure for other sections) */}
        <div className="footerTerms" id='fotdetails'>
          <div className="footerCard">
            <h1>Why Trippy?</h1>
            <p>
              Established in 2024, Trippy has positioned itself as one of the leading companies, providing great offers, competitive airfares, 
              exclusive discounts, and a seamless online booking experience to many of its customers. The experience of booking your flight tickets, hotel stay, 
              and holiday package through our desktop site or mobile app can be done with complete ease and no hassles at all. We also deliver amazing offers, 
              such as Instant Discounts, Fare Calendar, MyRewardsProgram, MyWallet, and many more while updating them from time to time to better suit our customers’ 
              evolving needs and demands. Inspired by the collaborative spirit of our college project, we strive to bring the best travel experience to our users.
            </p>
          </div>
          <div className="footerCard">
            <h1>Booking Flights with Trippy</h1>
            <p>
              At Trippy, you can find the best of deals and cheap air tickets to any place you want by booking your tickets on our website or app. 
              Being a leading website for hotel, flight, and holiday bookings, Trippy helps you book flight tickets that are affordable and customized 
              to your convenience. With customer satisfaction being our ultimate goal, we also have a 24/7 dedicated helpline to cater to our customer’s 
              queries and concerns. Serving over 5 million happy customers, we at Trippy are glad to fulfill the dreams of folks who need a quick and easy 
              means to find air tickets. You can get a hold of the cheapest flight of your choice today while also enjoying the other available options for your 
              travel needs with us.
            </p>
          </div>
          <div className="footerCard">
            <h1>Domestic Flights with Trippy</h1>
            <p>
              Trippy is a leading player for flight bookings. With the cheapest fare guarantee, experience great value at the lowest price. 
              Instant notifications ensure current flight status, instant fare drops, amazing discounts, instant refunds and rebook options, 
              price comparisons and many more interesting features.
            </p>
          </div>
        </div>
        {/* ... (repeat similar structure for other sections) */}
        <div className="footerLastBx">
          <div className="footerIcons">
            <a href="https://twitter.com" target="_blank" rel="noopener noreferrer">
              <img src={twitterLogo} alt="Twitter" width="30" height="30" />
            </a>
            <a href="https://github.com" target="_blank" rel="noopener noreferrer">
              <img src={githubLogo} alt="GitHub" width="30" height="30" />
            </a>
            {/* Add other social media icons and links as needed */}
          </div>
          <div className="footer-container">
            <table>
              <thead>
                <tr>
                  <th>About Us</th>
                  <th>Explore</th>
                  <th>Help & Support</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>
                    <ul>
                      <li><a href="/about">Our Story</a></li>
                      <li><a href="/team">Our Team</a></li>
                      <li><a href="/careers">Careers</a></li>
                    </ul>
                  </td>
                  <td>
                    <ul>
                      <li><a href="/destinations">Destinations</a></li>
                      <li><a href="/hotels">Hotels</a></li>
                      <li><a href="/flights">Flights</a></li>
                    </ul>
                  </td>
                  <td>
                    <ul>
                      <li><a href="/contact">Contact Us</a></li>
                      <li><a href="/faq">FAQ</a></li>
                      <li><a href="/terms">Terms of Use</a></li>
                    </ul>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
          <div className="footerCopyrightbx">
            <h1>© 2024 TRIPPY PVT. LTD.</h1>
            <h2>Country <b>India USA UAE</b></h2>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Footer;
