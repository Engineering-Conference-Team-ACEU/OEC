import React from 'react';
import './Subscribe.css';

const Subscribe: React.FC = () => {
  return (
    <section className="subscribe">
      <h2>Subscribe Now to Get Started</h2>
      <p>
        Subscribe now to start your journey with renewable energy. Access expert
        solutions, reduce your carbon footprint, and save on energy costs today!
      </p>
      <form>
        <input type="email" placeholder="Enter Email" />
        <button>Subscribe</button>
      </form>
    </section>
  );
};

export default Subscribe;
