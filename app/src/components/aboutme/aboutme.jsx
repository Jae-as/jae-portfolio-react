import React from "react";
import "./aboutme.css";
import PortfolioHeadshot from "../../assets/images/portfolioheadshot.png";

const AboutMe = () => {
  return (
    <div className="aboutme">
      <div className="aboutme-left">
        <div className="aboutme-name">
          <span>Janaeé Wallace</span>
          <span>Technical Product Manager & Fullstack Developer</span>
          <span>Small about me profile text UPDATE LATER</span>
        </div>
        <div className="aboutme-socials">
            <ul>
                <li className="button aboutme-button">LinkedIn</li>
                <li className="button aboutme-button">GitHub</li>
            </ul>
        </div>
      </div>
      <div className="aboutme-right"> <img src={PortfolioHeadshot} alt="portfolioheadshot"></img> </div>
    </div>
  );
};

export default AboutMe;
