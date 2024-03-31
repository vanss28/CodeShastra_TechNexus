// TextBubble.js

import React from 'react';
import './TextBubble.css';

const TextBubble = ({ text, align }) => {
  return (
    <div className={`text-bubble ${align}`}>
      {text}
    </div>
  );
};

export default TextBubble;
