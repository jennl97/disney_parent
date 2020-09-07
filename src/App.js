import React from 'react';
import { Link, Route } from 'react-router-dom';

import './App.css';

//import components
import ParentLogin from "./components/ParentLogin";
import RequestForm from "./components/RequestForm";
import MessageBoardList from "./components/MessageBoardList";
import MessageBoard from './components/MessageBoard';


function App() {
  // const [ RequestForm, setRequestForm] = React.useState("");

  return (
    <div className="App">
      <header>
        <nav>
          <div className='nav-links'>
            <Link className="links" to="/parent">Home</Link>
            {/* <NavLink exact className="some-link" to="/">Request form</NavLink> */}
            <Link className="links" to="/request">Request Form</Link>
            <Link className="links" to="/message">Message Board</Link>
          </div>
        </nav>
      </header>
      <div className="appHeader">
      <h1>Parent Login</h1>
      </div>
      <div className="form">
     <Route path="/parent" component={ParentLogin}/>
     </div>
     <div className="form">
       <h1>Request Form</h1>
     <Route path="/request" component={RequestForm}/>
     </div>
     <div className="messageBoard">
       <h1>Message Board</h1>
     <Route path="/message" component={MessageBoard}/>
     </div>
      </div>
  );
}

export default App;
