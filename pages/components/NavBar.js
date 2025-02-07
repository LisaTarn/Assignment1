import React, { useState } from "react";
import MainContent from './MainContent';
import Contact from './Contact';
import About from './About';
import styles from './styles.module.css';

//props to passdata in MainContent component

const pageTitle = "Welcome to my first React web application using Next.js"
const pageContent = "Please go to the navigation bar above to see all the features"

//conditional rendering for Navigation bar, buttons that link to MainContent component, Contact component (form submission), and About component (various event handling)

function NavBar(){
   
//NavBar component handling it's state

const [link, setLink] = useState('home');

const renderContent = () => {
    switch (link) {
        case 'home':
           return <MainContent title = {pageTitle} content = {pageContent} />;
        case 'contact':
            return <Contact />
        case 'about':
            return <About />;
    }
}


return (
    <div>
        <div className={styles.container}>
        
            <button className={styles.button} onClick={() => setLink('home')}>Home</button>
            <button className={styles.button} onClick={() => setLink('about')}>About</button>
            <button className={styles.button} onClick={() => setLink('contact')}>Contact</button>
        
        </div><center>
        <div className={styles.render}>
            {renderContent()} 
            </div></center>
            </div>  
)
}


export default NavBar;