import React from "react";
import "./AboutThisPage.css";

const AboutThisSite: React.FC = () => {
  return (
    <section className="about-container">
      <div className="about-content">
        <h1>About This Page</h1>
        <p>
          This website is my personal project created to share my interests and ideas 
          in technology, design, and programming.
        </p>
        <p>
          Here, you’ll find collections of my favorite products, along with other useful 
          information and resources that I continuously develop and update.
        </p>
        <p>
          My goal is to build a space where I can freely experiment, learn, and share a 
          part of my creativity with you.
        </p>
        <p className="thank-you">
          Thank you for visiting, and I hope you enjoy your time here!
        </p>
      </div>
    </section>
  );
};

export default AboutThisSite;