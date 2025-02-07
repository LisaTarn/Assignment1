import { useState } from 'react';
import React from 'react';

function Hover() {

  // handling state
  
  const [hoverCount, setHoverCount] = useState(0)
  const [isHovered, setIsHovered] = useState(false);

  const handleMouseOver = () => {
    setHoverCount(hoverCount + 1);
  };

  const style = {
    backgroundColor: isHovered ? 'lightpink' : 'lightyellow', 
    transition: 'background-color 0.3s',
    width: '200px',
    height: '200px',
  };

  return (
    <div
    style={style}
    onMouseEnter={() => setIsHovered(true)}
    onMouseLeave={() => setIsHovered(false)
      
    }
    >
      <p>You hovered {hoverCount} times</p>
      <div onMouseOver={handleMouseOver}>
        Hover over me
      </div>
    </div>
  );
}

export default Hover;