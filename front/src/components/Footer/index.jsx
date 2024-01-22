import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import FavoriteIcon from "@mui/icons-material/Favorite";
import TwitterIcon from '@mui/icons-material/Twitter';
import FacebookIcon from '@mui/icons-material/Facebook';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import GitHubIcon from '@mui/icons-material/GitHub';
import "./index.scss"

const Footer = () => {
  return (
    <>
      <div className="footer">
        <div className="container">
          <div className="row">
            <div className="info col-xl-3">
              <img
                src="https://preview.colorlib.com/theme/timezone/assets/img/logo/logo.png"
                alt=""
              />
              <p>
                Asorem ipsum adipolor sdit amet, consectetur adipisicing elitcf
                sed do eiusmod tem.
              </p>
            </div>
            <div className="info col-xl-3">
              <h4>Quick Links</h4>
              <p>About</p>
              <p>Offers&Discounts</p>
              <p>Get Coupon</p>
              <p>Contact Us</p>
            </div>
            <div className="info col-xl-3">
              <h4>New Products</h4>
              <p>Woman Cloth</p>
              <p>Man Accessories</p>
              <p>Fashion Accessories</p>
              <p>Rubber made Toys</p>
            </div>
            <div className="info col-xl-3">
              <h3>Support</h3>
              <p>About</p>
              <p>Offers&Discounts</p>
              <p>Get Coupon</p>
              <p>Contact Us</p>
            </div>
          </div>
        </div>

        <div className="footer-bottom">
          <div className="title">
            <p>
              Copyright ©2024 All rights reserved | This template is made with{" "}
              <span><FavoriteIcon /></span> by <span>Colorlib</span>
            </p>
          </div>
          <div className="icon">
            <div className="social">
              <TwitterIcon />
            </div>
            <div className="social">
              <FacebookIcon />
            </div>
            <div className="social">
              <LinkedInIcon />
            </div>
            <div className="social">
              <GitHubIcon />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Footer;
