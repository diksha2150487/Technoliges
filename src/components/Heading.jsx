import React from "react";
import "./Heading.css";
function Heading() {
  return (
    <div className="container">
      <div className="subContainer">
        <div className="part-1">
          <button className="btn">Get Started</button>
        </div>
        <div className="part-2">
          <h1>Interactive Demo </h1>
          <p>
            Get familliar with the plateform by .contact us by email:{" "}
            <span style={{ color: "orangered" }}>admin@HRmatters.me</span>
          </p>
        </div>
      </div>
    </div>
  );
}

export default Heading;
