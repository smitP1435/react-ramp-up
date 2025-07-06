import logo from "./logo.svg";
import "./App.css";
import React, { useState } from "react";
// import {FirstCom, FistStateData, fistStateData} from './firstCom';
import TabButtons from "./components/tabButtons/TabButtons";

function App() {
    const [content, setContent ] = useState('Test Content');

    function handleClick(selectedButton) {
      setContent(selectedButton)
    }

  return (
    <div className="App">
      <menu id='tabButtonDiv'>
        <TabButtons onSelect={() => handleClick('test 1')}>Test 1</TabButtons>
        <TabButtons onSelect={() => handleClick('test 2')}>Test 2</TabButtons>
        <TabButtons onSelect={() => handleClick('test 3')}>Test 3</TabButtons>
        <TabButtons onSelect={() => handleClick('test 4')}>Test 4</TabButtons>
      </menu>
      {content}
    </div>
  );
}

export default App;

// import React from 'react';

// IMPORTANT:
// In this Udemy environment, you CAN'T import & use useState like this:
// import { useState } from 'react'
// Instead, import & use it like this:
// import React from 'react';
// React.useState(...)

// don't change the Component name "App"
// export default function App() {
//   const [alertPopUp, setAlertPopUp] = React.useState();

//   function handleClick(btn) {
//     setAlertPopUp(btn);
//   }

//   let popUpElements = (alertPopUp === 'delete' ?
//     <div data-testid="alert" id="alert">
//       <h2>Are you sure?</h2>
//       <p>These changes can't be reverted!</p>
//       <button onClick={() => handleClick("proceed")}>Proceed</button>
//     </div>
//     :
//     <button onClick={() => handleClick("delete")}>Delete</button>
//   );

//   return (
//     <div>
//       {popUpElements}
//     </div>
//   );
// }

// export default function App() {
//   const [style, setStyle] = React.useState(0);

//   function handleClick() {
//     style ? setStyle(0) : setStyle(1);
//   }

//   const isActive = style ? "active" : undefined;

//   return (
//     <div>
//       <p>Style me!</p>
//       <button className={isActive} onClick={handleClick}>
//         Toggle style
//       </button>
//     </div>
//   );
// }



// import React from 'react';
// import Todo from './Todo'

// // don't remove the export keyword here!
// export const DUMMY_TODOS = [
//     'Learn React',
//     'Practice React',
//     'Profit!'
// ];

// // don't change the Component name "App"
// export default function App() {
//   return (
//   <div>
//     {DUMMY_TODOS.map( listItem => <Todo text={listItem} />)}
//   </div>
//   )
// }
