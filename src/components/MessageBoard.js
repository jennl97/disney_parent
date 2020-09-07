import React from "react";
import { Card, CardContent, CardHeader, CardDescription } from 'semantic-ui-react';


function MessageBoard(props){
    console.log('props: ', props);
    return(
    <div>
        <Card>
            <CardContent>
                <CardHeader>{props.title}</CardHeader>
                <CardDescription>Parent ID: {props.parentId}</CardDescription>
                <CardDescription>Attraction: {props.attraction}</CardDescription>
                <CardDescription>Number of Children: {props.children}</CardDescription>
                <CardDescription>Time: {props.time}</CardDescription>
            </CardContent>
        </Card>
    </div>
    )
}

export default MessageBoard;