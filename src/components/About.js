import React from 'react';
import '../styles/About.css';
import CachedImage from '../ressources/CachedImage.jpeg'; 

const About = () => {
  return (
    <section className="about">
      <div className="about__image-container">
        <img src={CachedImage} alt="Wind Turbines" className="about__image" />
      </div>
      <div className="about__content">
        <h2 className="about__title">About us</h2>
        <p className="about__description">
          Our vision is to revolutionize the way we power our world by embracing the limitless
          potential of renewable energy. Founded with a passion for sustainability and
          innovation, we are committed to providing cutting-edge solutions that not only meet
          today's energy needs but also safeguard our planet for future generations.
        </p>
        <button className="about__button">
          Learn More ↗
        </button>
      </div>
    </section>
  );
};

export default About;
