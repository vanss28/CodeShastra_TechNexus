import React from 'react';
import { Link } from 'react-router-dom'; // Import Link from react-router-dom if you're using React Router
import './Cta.css';

const Cta = () => {
  return (
    <div className='gpt3__cta'>
      <div className='gpt3__cta-container'>
        <p>Join Us to Explore the Future</p>
        <h3>Register today & start exploring the endless possibilities.</h3>
      </div>
      <div className='gpt3__cta-button'>
        <Link to="/signin">
          <button type="button">Get Started</button>
        </Link>
      </div>
    </div>
  );
};

export default Cta;
