import logo from './logo.svg';
import './App.css';
import React, {useState} from 'react';
// import {FirstCom, FistStateData, fistStateData} from './firstCom';
import TabButtons from './components/tabButtons/TabButtons';


function App() {
    function handleClick(selectedButton) {
      const div = document.getElementById('dataContent');

      div.innerText = selectedButton ;
    }

  return (
    <div className="App">
      <menu id='tabButtonDiv'>
        <TabButtons onSelect={() => handleClick('Test 1')}>Test 1</TabButtons>
        <TabButtons onSelect={() => handleClick('Test 2')}>Test 2</TabButtons>
        <TabButtons onSelect={() => handleClick('Test 3')}>Test 3</TabButtons>
        <TabButtons onSelect={() => handleClick('Test 4')}>Test 4</TabButtons>
      </menu>
      <div id='dataContent'>

      </div>
    </div>
  );
}

export default App;
