import React from 'react';
import possibilityImage from '../../assets/possibility.png';
import './Possibility.css';

const Possibility = () => (
  <div className="gpt3__possibility section__padding" id="possibility">
    <div className="gpt3__possibility-image">
      <img src={possibilityImage} alt="possibility" />
    </div>
    <div className="gpt3__possibility-content">
      <h4>Join Us to Explore the Future</h4>
      <h1 className="gradient__text">Unleash the Potential of Voice AI: Beyond Your Wildest Imagination</h1>
      <p>Discover endless possibilities with our Voice AI technology. From revolutionizing industries to enhancing everyday experiences, our platform empowers you to embark on a journey of innovation and discovery.</p>
      <h4>Join Us to Explore the Future</h4>
    </div>
  </div>
);

export default Possibility;
