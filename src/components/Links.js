import React from "react";
import { Link } from "react-router-dom";
import logo from "../images/logo.png";

function Links () {
    return(
        <div>
             <nav>
          <div className='nav-links'>
            <img src={logo} />
            <Link className="nav-links links" to="/">Home</Link>
            <Link className="nav-links links" to="/request">Request Form</Link>
            <Link className="nav-links links" to="/messageboard">Message Board</Link>
          </div>
        </nav>
        </div>
    )    
}

export default Links;