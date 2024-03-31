import React from 'react';
import './Features.css';
import Feature from '../../component/features/Feature';

const Features = () => {
  const featureData = [{
    "title":"Highly Accurate Speech Recognition",
    "text":"The voice assistant excels at understanding spoken commands and queries, even in noisy environments."
  },
  {
    "title":"Web Search",
    "text":"Conducts customized searches on the internet based on user queries and presents relevant information within its own browser window."
  },
  {
    "title":"Intuitive UI",
    "text":"The assistant has a user-friendly interface, offering both visual displays for responses/matched options and voice output."
  },
  {
    "title":"Natural Voice",
    "text":"While not mandatory, the assistant provides a realistic, pleasant voice that enhances user engagement."
  },
];

  return (
   <div className='gpt3__features section__padding' id="features">
    <div className='gpt3__features-heading'>
      <h1 className='gradient__text'>Welcome to Your Innovative Voice Assistant</h1>
      <p>Our voice assistant is built with advanced AI/ML capabilities to provide you with a seamless and personalized experience. Here's what it can do:</p>
    </div>
    <div className='gpt3__features-container'>
      {featureData.map((item,index)=>(
        <Feature title={item.title} key={index} text={item.text} id={item.title + index}/> 
      ))}
    </div>
   </div>
  );
}

export default Features;
