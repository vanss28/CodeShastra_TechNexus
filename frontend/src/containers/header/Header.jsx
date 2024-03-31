import React, { useState } from "react";
import ai from "../../assets/ai.png";
import "./Header.css";
import TextBubble from "./TextBubble";
const Header = () => {
  const [isListening, setIsListening] = useState(false);

  const handleButtonClick = () => {
    setIsListening(true);
    // Add logic here to start listening to user input
  };

  return (
    <div className="gpt3__header section__padding" id="home">
      <div className="gpt3__header-content">
      <TextBubble text="Hello!" align="left" />
      <TextBubble text="Hi there!" align="right" />

        <h1 className="gradient__text">Let’s Get Started</h1>
        <p>Your Voice AI Assistant</p>
        <div className="gpt3__header-content_input">
          <button type="button" onClick={handleButtonClick}>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="16"
              height="16"
              fill="currentColor"
              className="bi bi-mic"
              viewBox="0 0 16 16"
            >
              <path d="M3.5 6.5A.5.5 0 0 1 4 7v1a4 4 0 0 0 8 0V7a.5.5 0 0 1 1 0v1a5 5 0 0 1-4.5 4.975V15h3a.5.5 0 0 1 0 1h-7a.5.5 0 0 1 0-1h3v-2.025A5 5 0 0 1 3 8V7a.5.5 0 0 1 .5-.5" />
              <path d="M10 8a2 2 0 1 1-4 0V3a2 2 0 1 1 4 0zM8 0a3 3 0 0 0-3 3v5a3 3 0 0 0 6 0V3a3 3 0 0 0-3-3" />
            </svg>
          </button>
          {isListening && <p className="listening-text">Jarvis is listening...</p>}
        </div>
      </div>
      <div className="gpt3__header-image">
        <img src={ai} alt="ai" />
      </div>
    </div>
  );
};

export default Header;
