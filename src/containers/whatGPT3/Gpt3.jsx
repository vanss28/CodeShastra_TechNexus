import React from 'react';
import Features from '../../component/features/Feature';
import './Gpt3.css';

const WhatGPT3 = () => (
  <div className="gpt3__whatgpt3 section__padding" id="wgpt3">
    <div className="gpt3__whatgpt3-feature">
      <Features title="Understanding Voice AI" text="Voice AI represents the pinnacle of artificial intelligence, particularly in the realm of natural language processing. It enables machines to understand and respond to human speech, unlocking a multitude of applications across various industries and domains." />
    </div>
    <div className="gpt3__whatgpt3-heading">
      <h1 className="gradient__text">Unleash the Power of Voice AI</h1>
      <p>Explore Endless Possibilities</p>
    </div>
    <div className="gpt3__whatgpt3-container">
      <Features title="Empowering Conversational Interfaces" text="Integrate Voice AI capabilities into your applications to create conversational interfaces. Engage users in natural, human-like conversations and provide personalized assistance and responses, enhancing user experience and satisfaction." />
      <Features title="Enhancing Customer Support" text="Leverage Voice AI to revolutionize customer support experiences. Provide instant, round-the-clock assistance through voice-enabled chatbots and virtual assistants, delivering quick resolutions and improving customer satisfaction." />
      <Features title="Transforming Voice Search" text="Utilize Voice AI to enhance voice search functionalities. Enable users to perform complex searches and access relevant information using natural language commands, streamlining information retrieval processes and improving user engagement." />
    </div>
  </div>
);

export default WhatGPT3;
