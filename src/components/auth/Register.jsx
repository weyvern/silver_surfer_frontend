import React, { useState, useContext, useRef } from 'react';
import { Link, useHistory } from 'react-router-dom';
import axios from 'axios';
//import { GlobalContext } from '../Context/GlobalState';

const Register = () => {
    const [newUser, setNewUser] = useState({});
    //const { addNewUser } = useContext(GlobalContext);
    const form = useRef();
    const history = useHistory();

    const handleChange = (e) => {
        setNewUser({...newUser, [e.target.name]: e.target.value});
    }

    const handleSubmit = (e) => {
        const {name, lastName, email, password} = newUser;
        e.preventDefault();
        console.log(newUser);

        //Validation

        //Password length
        if(password.length < 5) {
            return window.alert("Password needs to be longer than 5 characters.");
        }

        //Empty fields
        if(!name || !lastName || !email || !password) {
            return window.alert("Empty fields: Please fill out every field.");
        }
        sendRegisterData(newUser);
        form.current.reset();
    }


    const sendRegisterData = async (newUser) => {
        try {
            const config = {
                headers: {
                    "Content-Type": "application/json"
                }
            }
            const res = await axios.post('http://localhost:8000/api/v1/auth/signup', newUser, config);
            console.log(res.data.token);
            setNewUser({});
            history.push("/userprofile");
        }
        catch(err) {
            //details is an array --> go trhough all keys and pull out error messages
            console.log(err.response.data.details[0]);

             /*
                //User already registered
                if(email === ) {
                    return window.alert("A Uuser with this email already exists. Please go to login");
                }
            */

            alert("Pleas provide valid login credentials or create an account");
        }
    }


    return (
        <div>
            <div className="card rounded-lg text-dark">
                <div className="card-header py-4">Sign up</div>
                <div className="card-body">
                    <form ref={form} onSubmit={handleSubmit}>
                        <div className="form-row">
                            <div className="form-group col-md-6"><label className="small text-gray-600" for="leadCapFirstName" name="name" >First Name</label><input className="form-control rounded-pill" id="leadCapFirstName" name="name" type="text" onChange={handleChange} required/></div>
                            <div className="form-group col-md-6"><label className="small text-gray-600" for="leadCapLastName" name="lastName" >Last Name</label><input className="form-control rounded-pill" id="leadCapLastName" name="lastName" type="text" onChange={handleChange} required/></div>
                        </div>
                        <div className="form-group"><label className="small text-gray-600" for="leadCapEmail" name="email">Email address</label><input className="form-control rounded-pill" id="leadCapEmail" name="email" type="email" onChange={handleChange} required/></div>
                        <div className="form-group"><label className="small text-gray-600" for="leadCapPassword" name="password">Password</label><input className="form-control rounded-pill" id="leadCapPassword" name="password" type="password" onChange={handleChange} required/></div>
                        <button className="btn btn-secondary btn-marketing btn-block rounded-pill mt-4" type="submit">Register Now</button>
                    </form>
                    <div className="row py-5 justify-content-around m-0">
                        <p>Already have an account?</p>
                        <Link to="/login"><button className="btn btn-secondary btn-marketing rounded-pill">Go to Login<svg className="svg-inline--fa fa-arrow-right fa-w-14 ml-1" aria-hidden="true" focusable="false" data-prefix="fas" data-icon="arrow-right" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512" data-fa-i2svg=""><i className="fas fa-arrow-right ml-1"></i></svg></button></Link>
                    </div>
                </div>
               
            </div>
        </div>
        
    );
};

export default Register;
