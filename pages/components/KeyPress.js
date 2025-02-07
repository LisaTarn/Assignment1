import { useState } from 'react';
import React from 'react';

function KeyPress() {
    const [key, setKey] = useState('');
  
    const handleKeyPress = (event) => {
      setKey(event.key);
    };
  
    return (
      <div>
        <input type="text" onKeyDown={handleKeyPress} placeholder="Press a key" />
        <p>You pressed: {key}</p>
      </div>
    );
  }

  export default KeyPress;

