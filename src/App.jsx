import React, { useState } from 'react';
import Sidenav from './components/Sidenav.jsx';
import Main from './components/Main.jsx';
import Projects from './components/Projects.jsx';
import AboutMe from './components/AboutMe.jsx';
import Contacts from './components/Contacts.jsx';

// TODO; 



function App() {

  return (
    <div>
        <Sidenav />
        <Main />
        <Projects /> 
        <AboutMe />
        <Contacts />
    </div>
  )
}

export default App
