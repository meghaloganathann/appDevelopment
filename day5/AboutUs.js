import React from 'react';
import './AboutUs.css';

const AboutUs = () => {
  return (
    <div className="about-us">
      <div className="content-container">
        <h1>About Us</h1>
        <p>We offer full range of garage services to vehicle owners in Tucson. Our professionals know how to handle a wide range of car services.<br>
        </br> Whether you drive a passenger car or medium sized truck or SUV, our mechanics strive to ensure that your vehicle will be performing at its best before leaving our car shop.<br></br>
         Whether you drive a medium sized truck or passenger car or SUV, our mechanics strive to ensure.</p>
         <p>Our expertise with various vehicles, automotive technologies is as diverse as the people and experience we bring to CarZ®.<br></br>
         We believe in the power of ordinary people to do extra ordinary things.<br></br>
         We employ our collective potential to vastly improve your automotive service experience.<br></br>
         We all have one thing in common…Passion for the automobile.<br></br>
         We make one promise…to treat your vehicle as we would our own.<br></br>
         We take one oath…to never compromise your Vehicle Performance and Occupant Safety!<br></br>
         Expect from us…Great Service, Budget Price™</p>
      </div>
      <div className="image-container">
        <img src="mech.jpg" alt="Left Image" />
      </div>
      <div className="image-container">
        <img src="mech2" alt="Right Image" />
      </div>
    </div>
  );
};

export default AboutUs;
