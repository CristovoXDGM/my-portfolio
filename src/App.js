import React from 'react';
import './App.css';
import NavBarComponent from './components/navbar';
import HeaderComponent from './components/header';
import FirstSection from './components/first-section';


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
