import React, { useState } from 'react';
import Sidenav from './components/Sidenav.jsx';
import Main from './components/Main.jsx';
import Projects from './components/Projects.jsx';
import Contacts from './components/Contacts.jsx';



function App() {

  return (
    <div>
        <Sidenav />
        <Main />
        <Projects /> 
        <Contacts />
    </div>
  )
}

export default App
