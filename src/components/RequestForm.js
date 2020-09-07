import React, { useState, useEffect} from 'react';
import { Form, Field, withFormik } from "formik";
import axios from "axios";
import * as Yup from "yup";

class RequestForm extends React.Component{
    state = {
        name: "",
        // parks: "",
        // ride: "",
        // request: "",
        // number: "", 
        // age: "",
        comments: "",
        id: "",
        time: ""
    }
    
     handleChange = event => {
         this.setState({[event.target.name]: event.target.value});
         console.log(this.state);
        };

        handleSubmit = event => {
            event.preventDefault();
            axios
            .post('https://disneyparent-backend.herokuapp.com/posts', this.state)
            .then(res => {
                console.log(res)
            })
            .catch(err => {
                console.log(err)
            })
        }

    render(){
    return (
        <div className="requestForm">
            
                <Form onSubmit = {this.handleSubmit}>
                    <Field
                    component="input"
                    type="text"
                    name="name"
                    placeholder="Name"
                    value = {this.state.name}
                    onChange={this.handleChange}
                    />
                    {/* {touched.name && errors.name && (
                        <p className="error">{errors.name}</p>
                    )} */}
                     <Field
                    component="input"
                    type="text"
                    name="id"
                    placeholder="ID Number"
                    value = {this.state.id}
                    onChange={this.handleChange}
                    />
                     <Field
                    component="input"
                    type="text"
                    name="time"
                    placeholder="Time for request"
                    value = {this.state.time}
                    onChange={this.handleChange}
                    />
    
                    <Field
                    component="select" className="park-select" name="parks"  value = {this.state.parks}
                    onChange={this.handleChange}>
                    <option>Select A Park</option>
                    <option value="magicKingdom">Magic Kingdom</option>
                    <option value="animalKingdom">Animal Kingdom</option>
                    <option value="hollywoodStudios">Hollywood Studios</option>
                    <option value="epcot">Epcot</option>
                    </Field>
                   
                    <Field
                    component="input"
                    type="text"
                    name="ride"
                    placeholder="Nearest Ride"
                    value = {this.state.ride}
                    onChange={this.handleChange}
                    />
                    <Field
                    component="select" className="park-select" name="request"  value = {this.state.request}
                    onChange={this.handleChange}>
                        <option>Type of Request</option>
                        <option value="strollerExchange">Stroller Exchange</option>
                        <option value="parentSwap">Parent Swap</option>
                    </Field>
                    <Field
                    component="input"
                    type="number"
                    name="number"
                    placeholder="Number of Children"
                    value = {this.state.number}
                    onChange={this.handleChange}
                    />
                   <Field
                    component="input"
                    type="text"
                    name="age"
                    placeholder="Age of Children"
                    value = {this.state.age}
                    onChange={this.handleChange}
                    />
                    <Field
                    component="textarea"
                    type="text"
                    name="comments"
                    placeholder="Comments"
                    value = {this.state.coments}
                    onChange={this.handleChange}
                    />
                    <button type="submit">Submit</button>
                </Form>
          


        </div>
    )
 }
}

const propsToValuesMap = withFormik({
    mapPropsToValues({name, parks, ride, request, number, age, comments}){
        return {
           name: name || "",
           parks: parks || "",
           ride: ride || "",
           request: request || "",
           number: number || "", 
           age: age || "",
           comments: comments || ""
        };
    },

    validationSchema: Yup.object().shape({
       name: Yup.string().required("Parent's name is required")
    //    parks: Yup.array().required("Park is required")
       
    }),
    

});

const RequestFormFormik = propsToValuesMap(RequestForm);

export default RequestFormFormik;