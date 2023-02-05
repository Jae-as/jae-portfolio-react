import React from "react";
import "./portfolio.css";
import comiccase from "../../assets/images/comiccase.png";
import beautyshowcase from "../../assets/images/beautyshowcase.png";
import ecommerce from "../../assets/images/ecommercebackend.png";
import socialmediaapi from "../../assets/images/socialmediaapi.png";
import teamprofilegenerator from "../../assets/images/teamprofilegenerator.png";
import employeedatabase from "../../assets/images/employeedatabase.png";
import weatherdashboard from "../../assets/images/weatherdashboard.png";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";

const Portfolio = () => {
  return (
    <div className="portfolio" id="Portfolio">
      <span>Portfolio</span>
      <span>Check out my most recent projects below!</span>

      <Swiper
        slidesPerView={4.25}
        grabCursor={true}
        className="portfolio-slider"
      >
        <SwiperSlide>
          <img src={employeedatabase} alt="MySQL employee database"></img>
          <ul>
            <h4>Employee Database</h4>
            <li href="https://drive.google.com/file/d/17LAcV3ML6NSPj6owv1rilmwSGp_agDCA/view">Application</li>
            <li href="https://github.com/Jae-as/employee-cms">GitHub</li>
          </ul>
        </SwiperSlide>
        <SwiperSlide>
          <img
            src={teamprofilegenerator}
            alt="Team Profile Generator using commandline interface"
          ></img>
          <ul>
            <h4>Team Profile Generator</h4>
            <li href="https://drive.google.com/file/d/1eHoZI1tvpMDl_Ls3dbJ4nkEOM4GL2fVO/view">Application</li>
            <li href="https://github.com/Jae-as/team-profile-generator">GitHub</li>
          </ul>
        </SwiperSlide>
        <SwiperSlide>
          <img src={socialmediaapi} alt="Social Media API"></img>
          <ul>
            <h4>Social Media API</h4>
            <li href="">Application</li>
            <li href="https://github.com/Jae-as/social-network-api">GitHub</li>
          </ul>
        </SwiperSlide>
        <SwiperSlide>
          <img src={ecommerce} alt="Investory database"></img>
          <ul>
            <h4>Inventory Database</h4>
            <li href="https://drive.google.com/file/d/1V8mTUIC1xi63sfCDiWl5NeIOKS5Zhydr/view">Application</li>
            <li href="https://github.com/Jae-as/ecommerce-backend">GitHub</li>
          </ul>
        </SwiperSlide>
        <SwiperSlide>
          <img
            src={weatherdashboard}
            alt="html/css javascript weatherdash board"
          ></img>
          <ul>
            <h4>Weather Dashboard</h4>
            <li href="https://jae-as.github.io/weather-dashboard/">Application</li>
            <li href="https://github.com/Jae-as/weather-dashboard">GitHub</li>
          </ul>
        </SwiperSlide>
        <SwiperSlide>
          <img src={comiccase} alt="comic marketplace website"></img>
          <ul>
            <h4>Comicbook Marketplace</h4>
            <li href="https://comic-case.herokuapp.com/">Application</li>
            <li href="https://github.com/Jae-as/Comic-Case">GitHub</li>
          </ul>
        </SwiperSlide>
        <SwiperSlide>
          <img
            src={beautyshowcase}
            alt="beauty product suggestion website"
          ></img>
          <ul>
            <h4>Beauty Product Site</h4>
            <li href="https://danaguilera.github.io/Global-Beauty-Showcase/">Application</li>
            <li href="https://github.com/Jae-as/Global-Beauty-Showcase">GitHub</li>
          </ul>
        </SwiperSlide>
      </Swiper>
    </div>
  );
};

export default Portfolio;
