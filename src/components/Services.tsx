import React from 'react';
import './Services.css';

const services = [
  { title: 'Solar Energy Solutions', description: 'Harness the power of the sun...' },
  { title: 'Wind Energy Systems', description: 'Tap into the wind\'s potential...' },
  { title: 'Energy Storage Solutions', description: 'Enhance your energy independence...' },
  { title: 'Consultation and Energy Audits', description: 'Optimize your energy use...' },
];

const Services: React.FC = () => {
  return (
    <section id="services" className="services">
      <h2>Services We Provide</h2>
      <div className="services__cards">
        {services.map((service, index) => (
          <div key={index} className="services__card">
            <h3>{service.title}</h3>
            <p>{service.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Services;
