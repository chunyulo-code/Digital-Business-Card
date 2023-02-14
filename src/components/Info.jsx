import React from "react";
import profile from "../assets/Rectangle 90.png";
import mailIcon from "../assets/Mail.png";
import linkedinIcon from "../assets/linkedin.png";

export default function Info() {
  return (
    <div className="info">
      <img className="info--image" src={profile} alt="" />
      <div className="info--text">
        <h1 className="info--name">Laura Smith</h1>
        <h3 className="info--jobTitle">Frontend Developer</h3>
        <h4 className="info--link">laurasmith.website</h4>

        <div className="btns">
          <button className="mailBtn">
            <img src={mailIcon} alt="" /> Email
          </button>
          <button className="linkedinBtn">
            <img src={linkedinIcon} alt="" /> Linkedin
          </button>
        </div>
      </div>
    </div>
  );
}
