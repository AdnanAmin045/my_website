import './App.css';
import React from 'react';
import Navbar from './Web-Components/navbar.js';
import Home from './Web-Components/home.js';
import About from './Web-Components/about.js';
import Education from './Web-Components/education.js';
import Services from './Web-Components/services.js';
import Skills from './Web-Components/skills.js';
import Projects from './Web-Components/projects.js';
import Contact from './Web-Components/contact.js';
import Footer from './Web-Components/footer.js';
import Contactform from './Web-Components/contactForm.js';
import { useState, useEffect} from 'react';

function App() {

// toggle the dark mode

const [theme,setTheme] = useState('');
const [bodyColor,setBodyColor] = useState('#FAFAFA');

useEffect (() =>{
  document.body.className = theme;
  document.body.style.backgroundColor = bodyColor;
},[theme,bodyColor]);

const toggleMode = () =>{
  setTheme(theme === '' ? 'dark' : '');
  setBodyColor(bodyColor === '#FAFAFA' ? '#3c4043' : '#FAFAFA');
}




// Change the color mood icon

const[iconClass,setIconClass] = useState("ri-moon-line");

const changeIconClass = () =>{
  setIconClass((prevValue) =>
    prevValue === "ri-moon-line" ? "ri-sun-line" : "ri-moon-line"
  );
}


  return (
    <>
        <Navbar toggleMode={toggleMode} changeIconClass={changeIconClass} iconClass={iconClass} bodyColor={bodyColor} />
        <Home bodyColor={bodyColor}/>
        <About/>
        <Education/>
        <Skills />
        <Services/>
        <Projects/>
        <Contact />
        <Contactform />
        <Footer/>
    </>
  );
}

export default App;
