import React from "react";
import twitterIcon from "../assets/Twitter Icon.png";
import facebookIcon from "../assets/Facebook Icon.png";
import instagramIcon from "../assets/Instagram Icon.png";
import githubIcon from "../assets/github Icon.png";

export default function Footer() {
  return (
    <div className="footer">
      <img src={twitterIcon} alt="" />
      <img src={facebookIcon} alt="" />
      <img src={instagramIcon} alt="" />
      <img src={githubIcon} alt="" />
    </div>
  );
}
