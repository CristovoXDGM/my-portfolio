import React from 'react';
import './App.css';
import NavBarComponent from './components/navbar';
import HeaderComponent from './components/header';
import FirstSection from './components/first-section';
import { Link, DirectLink, Element, Events, animateScroll as scroll, scrollSpy, scroller } from 'react-scroll';

function App() {
  return (

    <div className="App" >
      <body className id='page-top'>
        <NavBarComponent></NavBarComponent>
        <HeaderComponent></HeaderComponent>

        <FirstSection></FirstSection>

      </body>

    </div>

  );
}

export default App;
