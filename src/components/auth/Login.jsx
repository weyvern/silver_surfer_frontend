import React, { useState, useContext, useRef } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
//import { GlobalContext } from '../Context/GlobalState';


const Login = () => {
    const [user, setUser] = useState({});
    const [token, setToken] = useState({});

    const form = useRef();

    const handleChange = (e) => {
        setUser({...user, [e.target.name]: e.target.value});
    }

    const handleSubmit = (e) => {
        const {email, password} = user;
        e.preventDefault();
        
        if(!email || !password) {
            return window.alert("The usefulness of a cup is in its emptiness (old chinese proverb). And the usefulness of a todo lies in its text! Please type something in the input field.");
        }
        sendLoginData(user);
        
    }

    const sendLoginData = async (user) => {
        try {
            const config = {
                headers: {
                    "Content-Type": "application/json"
                }
            }
            const res = await axios.post('http://localhost:8000/api/v1/auth/signin', user, config);
            setToken(res.data.token);
            setUser({});
        }
        catch(err) {
            //details is an array --> go trhough all keys and pull out error messages
            console.log(err.response.data.details[0]);
            alert("Pleas provide valid login credentials or create an account");
            form.current.reset();
        }
    }


    return (
        <div>
            <div className="card rounded-lg text-dark">
                <div className="card-header py-4">Sign in</div>
                <div className="card-body">
                    <form ref={form} onSubmit={handleSubmit}>
                        <div className="form-group"><label className="small text-gray-600" for="leadCapEmail" name="email">Email address</label><input className="form-control rounded-pill" id="leadCapEmail" name="email" type="email" onChange={handleChange} required/></div>
                        <div className="form-group"><label className="small text-gray-600" for="leadCapPassword" name="password">Password</label><input className="form-control rounded-pill" id="leadCapPassword" name="password" type="password" onChange={handleChange} required/></div>
                        <button className="btn btn-secondary btn-marketing btn-block rounded-pill mt-4" type="submit">Login Now</button>
                    </form>
                    <div className="py-5 text-center">
                        <p>No account yet?</p>
                        <Link to="/register"><button className="btn btn-secondary btn-marketing rounded-pill">Go to Register<svg className="svg-inline--fa fa-arrow-right fa-w-14 ml-1" aria-hidden="true" focusable="false" data-prefix="fas" data-icon="arrow-right" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512" data-fa-i2svg=""><i className="fas fa-arrow-right ml-1"></i></svg></button></Link>
                    </div>
                </div>
            </div>
        </div>
        
    );
};

export default Login;
