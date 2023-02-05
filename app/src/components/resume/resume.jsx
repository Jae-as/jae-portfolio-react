import React from "react";
import "./resume.css";
import Build from "../../assets/images/build.png";
import Requirements from "../../assets/images/requirements.png";
import Consultant from "../../assets/images/consultant.png";
import Card from "../card/card";
import CurrentResume from "../../assets/docs/Resume_JanaeeWallace-20230205.pdf";

const Resume = () => {
  return (
    <div className="resume">
      <div className="resume-left">
        <span>Learn more about me &</span>
        <span>my experiences</span>
        <span>
          {" "}
          I have strong skills and interests in digital strategy, product
          management, <br />
          solution architecture, product performance analytics, and product
          investment strategy.
          <br /> I believe that I can help bridge the gap between emerging
          technologies and business strategies,
          <br /> customer experiences, and employee experiences to drive value
          creation and growth at start-ups <br />
          and private equity backed entities.
        </span>
        <a href={CurrentResume} download>
          <button className="button resume-button">Download Resume</button>
        </a>
      </div>
      <div className="resume-right">
        <div style={{ left: "2rem" }}>
          <Card
            image={Requirements}
            heading={"Technical Product Manager"}
            subtext={
              "Leading teams who build custom applications for life sciences and consumer product companies for over 6 years"
            }
          />
        </div>
        <div style={{ left: "30rem" }}>
          <Card
            image={Build}
            heading={"FulLStack Developer"}
            subtext={
              "Continuous learner with skills across HTML/CSS, JavaScropt, MySQL, MongoDB, React. New projects coming soon featuring Java and Golang"
            }
          />
        </div>
        <div style={{ left: "12rem", top: "12rem" }}>
          <Card
            image={Consultant}
            heading={"Technology Consultant"}
            subtext={
              "Supporting and leading the development of digital strategy and then activating fortune 500 digital transformations"
            }
          />
        </div>
      </div>
    </div>
  );
};

export default Resume;
