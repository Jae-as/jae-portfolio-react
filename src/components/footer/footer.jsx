import React from "react";
import "./footer.css";
import Wave from "../../assets/images/wave.png";
import GitHub from "@iconscout/react-unicons/icons/uil-github";
import LinkedIn from "@iconscout/react-unicons/icons/uil-linkedin";
import Twitter from "@iconscout/react-unicons/icons/uil-twitter";
// import GitHub from "../../assets/icons/github.png";
// import LinkedIn from "../../assets/icons/linkedin.png";
// import Twitter from "../../assets/icons/twitter.png";

const Footer = () => {
  const openGithub = () => {
    window.open("https://github.com/Jae-as");
  };
  const openLinkedIn = () => {
    window.open("https://www.linkedin.com/in/janaeewallace/");
  };
  const openTwitter = () => {
    window.open("https://twitter.com/janaeewallace");
  };

  return (
    <div className="footer">
      <img src={Wave} alt="footer background" style={{ width: "100%" }} />
      <div className="footer-content">
        <span>Come back every two weeks to track my progress!</span>
        <div className="footer-icons">
          <GitHub color="white" size={"8rem"} onClick={openGithub} />
          <LinkedIn color="white" size={"8rem"} onClick={openLinkedIn} />
          <Twitter color="white" size={"8rem"} onClick={openTwitter} />
        </div>
      </div>
    </div>
  );
};

export default Footer;
