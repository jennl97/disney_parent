import React from "react";


//import component
import RequestForm from "./RequestForm";
import Links from "./Links";

function RequestFormPage(){
    return(
        <div className="App">
       <header>
      <nav>
          <div className='nav-links'>
           <Links />
          </div>
    </nav>
      </header>
            <div className="appHeader">
            <h1>Request Form</h1>
            <p>Submit request for parent ride swap or stroller swap here.</p>

            </div>
            
            <div className="form">
            <RequestForm />
            </div>
           
        </div>
    )
}



export default RequestFormPage;