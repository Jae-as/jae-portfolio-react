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
  return (
    <div className="footer">
      <img src={Wave} alt="footer background" style={{ width: "100%" }} />
      <div className="footer-content">
        <span>Come back every two weeks to track my progress!</span>
        <div className="footer-icons">
<GitHub color="white" size={"8rem"}/>
<LinkedIn color="white" size={"8rem"}/>
<Twitter color="white" size={"8rem"}/>
        </div>
      </div>
    </div>
  );
};

export default Footer;
