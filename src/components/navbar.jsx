import React from "react";
import "./navbar.css";
import img1 from "./Images/HRmatter.png";
import dashboardImg from "./Images/dashboard-examples.png";
import img4 from "./Images/WhatsApp Image 2023-08-19 at 13.24.19.jpg";
import wave from "./Images/wavw.jpg";
export default function Navbar() {
  return (
    <div className="navbar-main">
      <div className="navbar">
        <div className="company-img-text">
          <img className="company-logo" src={img1} alt="logo" />
          <h5 className="text1">Platefrom</h5>
          <h5>Why HRmatters</h5>
          <h5>Pricing</h5>
          <h5>Business Type</h5>
        </div>
        <div className="login-button-text">
          <h5 id="dark-lg">Login</h5>
          <button className="clickme-button"> Schedule A Demo</button>
        </div>
      </div>
      {/* *********************************************************************************** */}
      <div className="firstComponent">
        <img className="dashboardImg" src={dashboardImg} alt="logo" />
        <div className="text-right">
          <h2 className="h2-Heading-navbar">
            Powering the future Of <br />
            <span className="work">work .</span>
          </h2>
          <div className="loremPara1-navbar">
            Hr matter is a people operation platfrom in Saudi Arabia that uses
            Artifial Intelligence to fully automate HR processes & function in
            an easy-to-use and efficent way .
          </div>
          <button className="zoom">Get Started</button>
          <img src={img4} alt="logo" id="colouring-box" />
        </div>
      </div>
      {/* ************************************************************************************ */}
      <div className="word-container">
        <h3>
          <span>Onboarding</span>, <span>Scheduling</span>, <span>Payroll</span>
          , <span>Leave</span>,<br />
          <span>management</span>, <span>Request management</span>,
          <span>Workchat</span> <br />
          <span>messaging</span>. <span>All In One Place</span>
        </h3>
      </div>
      <img src={wave} alt="img" className="waveImg" />
    </div>
  );
}
