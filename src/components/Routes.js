import React from "react";
import { Route } from "react-router-dom";

//import components here
import RequestFormPage from "./RequestFormPage";
import MessageBoardList from "./MessageBoardList"
import App from "../App";

function Routes () {
    return (
        <div>
            <Route exact path="/" component={App} />
            <Route path="/request" component={RequestFormPage} />
            <Route path="/messageboard" component={MessageBoardList} />
        </div>
    )
}
export default Routes;