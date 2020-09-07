import React, { useState, useEffect } from 'react';
import { Form, Field, Formik, withFormik } from "formik";
import axios from "axios";
import * as Yup from "yup";
import Routes from "./Routes";

function ParentLogin({errors, touched, status, props}){
    const [auth, setAuth] = useState([]);

    return(
        <div className="loginForm">
     
       <Form>
           <Field
           component="input"
           type="text"
           name="userName"
           placeholder="User Name"
           />
           {touched.userName && errors.userName && (
               <p className="error">{errors.userName}</p>
           )}
            <Field
            component="input"
            type="password"
            name="password"
            placeholder="Password"
            />
            {touched.password && errors.password && (
                <p className="error">{errors.password}</p>
            )}
            <button type="submit" onClick={(prop) => props.history.push("/request")}>Login</button>
            

       </Form>
           
       </div>
       
    )
}

const propsToValuesMap = withFormik({
    mapPropsToValues({userName, password}){
        return {
            userName: userName || "",
            password: password || ""
        };
    },

    validationSchema: Yup.object().shape({
        userName: Yup.string().required("User name is required"),
        password: Yup.string().required("Password is required")
    })   
});

const ParentLoginFormik = propsToValuesMap(ParentLogin);



export default ParentLoginFormik;