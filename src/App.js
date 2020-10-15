import React from 'react';
import { Link, Route } from 'react-router-dom';
import logo from './images/logo.png';
import Links from "../src/components/Links.js";

import './App.css';

//import components
// import ParentLogin from "./components/ParentLogin";
// import RequestForm from "./components/RequestForm";
// import MessageBoardList from "./components/MessageBoardList";
// import MessageBoard from './components/MessageBoard';


function App() {
 
  return (
    <div className="App">
      <header>
      <nav>
          <div className='nav-links'>
           <Links />
          </div>
    </nav>
      </header>
      <div className='body'>
        <h1>Welcome to the Disney Stroller Swap!</h1>
      </div>

      </div>
  );
}

export default App;
