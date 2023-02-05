import React from "react";
import "./resume.css";
// import Build from "../../assets/images/build.png";
import Requirements from "../../assets/images/requirements.png";
// import Consultant from "../../assets/images/consultant.png";
import Card from "../card/card";

const Resume = () => {
  return (
    <div className="resume">
      <div className="resume-left">
        <span>Learn more about me &</span>
        <span>my experiences</span>
        <span>summary statement about interests UPDATE</span>
        <button className="button resume-button">Download Resume</button>
      </div>
      <div className="resume-right">
        <div>
          <Card
            image={Requirements}
            heading={"Technical Product Manager"}
            subtext={"insert subtext"}
          />
        </div>
        {/* <div>
          <Card
            image={Build}
            heading={"FulLStack Developer"}
            subtext={"insert subtext"}
          />
        </div>
        <div>
          <Card
            image={Consultant}
            heading={"Technology Consultant"}
            subtext={"insert subtext"}
          />
        </div> */}
      </div>
    </div>
  );
};

export default Resume;
