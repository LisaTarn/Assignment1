import React, { useState } from 'react';
import Hover from './Hover'
import KeyPress from './KeyPress'
import styles from './styles.module.css';

// prop to pass data into bio of About component

const pageContent = "Hi, I am Lisa. I am a computer programming student at Humber College, in Toronto, Ontario. I am currently learning React, Next.js and JAVA. Please go to the navigation bar above to see all the features"

// component to conditionally render between bio, keypress component, and hover component
function About(){

  // state handling
  
  const [link, setLink] = useState('bio');
  
 
  const renderContent = () => {
      switch (link) {
          case 'bio':
            return <p>{pageContent}</p>;
          case 'key press':
              return <KeyPress />
          case 'hover effect':
              return <Hover />;
      }
  }
  
  
  return (
      <div>
        <div className={styles.containerabout}>
      <button className={styles.button} onClick={() => setLink('bio')}>Bio</button>
            <button className={styles.button} onClick={() => setLink('key press')}>Key Press</button>
            <button className={styles.button} onClick={() => setLink('hover effect')}>Hover Effect</button>
            </div><div className={styles.renderabout}>
      { renderContent() }</div>
      </div>
  )
  }
  
  
  export default About;