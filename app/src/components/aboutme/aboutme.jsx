import React from "react";
import "./aboutme.css";
import PortfolioHeadshot from "../../assets/images/portfolioheadshot.png";
import { Link } from "react-router-dom";

const AboutMe = () => {
  return (
    <div className="aboutme">
      <div className="aboutme-left">
        <div className="aboutme-name">
          <span>Janaeé Wallace</span>
          <span>
            Technical Product Manager, Fullstack Developer, Technology
            Consultant and aspiring Solution Architect
          </span>
          <span>
            I am originally from the Bahamas so I love all things blue and
            beach. I have been working as a Digital Strategist, Complex Solution
            Delivery Lead and Technical Product Manager in the Digital and
            Emerging Technology, Technology Consulting practice at Ernst & Young
            LLP for over 6 years. During my time at EY I have worked on several
            client engagements focused on customer experience design, digital
            strategy, application design, dashboard development, native
            application development, eCommerce strategy and emerging technology
            (i.e., cloud technology, mobility strategy, blockchain technology,
            internet of things). In addition to being a client server, I have
            assisted with designing and implementing an investment intake
            strategy for an internal product/platform investment fund, led
            practice-wide technical training and upskilling initiatives, and
            created multiple diversity and inclusiveness initiatives. I have
            also served as an advisor and Chief of Staff to a start-up venture
            fund and have since started my own investor journey as an angel
            investor in multiple companies. I have continued my technical growth
            and development by successfully completing a full stack application
            development certification and I plan to continue expanding my skills
            and building upon current collection of certifications from SAFe®
            and Amazon Web Services.{" "}
          </span>
        </div>
        <div className="aboutme-socials">
          <ul>
            <Link to="https://www.linkedin.com/in/janaeewallace/">
              <li className="button aboutme-button">LinkedIn</li>
            </Link>
            <Link to="https://github.com/Jae-as">
              <li className="button aboutme-button">GitHub</li>
            </Link>
          </ul>
        </div>
      </div>
      <div className="aboutme-right">
        {" "}
        <img src={PortfolioHeadshot} alt="portfolioheadshot"></img>{" "}
      </div>
    </div>
  );
};

export default AboutMe;
