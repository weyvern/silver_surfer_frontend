import React, { useState, useContext } from 'react';
//import { GlobalContext } from '../Context/GlobalState';

const Login = () => {
    const [user, setUser] = useState({});

    const handleChange = (e) => {
        setUser({...user, [e.target.name]: e.target.value});
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        /*
        if(!newUser.name || !newUser.lastName || !newUser.email || !newUser.password) {
            return window.alert("The usefulness of a cup is in its emptiness (old chinese proverb). And the usefulness of a todo lies in its text! Please type something in the input field.");
        }

        let User = newUser;
        addNewUser(User);
        
        setNewUser({});*/
    }


    return (
        <div>
            <div className="card rounded-lg text-dark">
                <div className="card-header py-4">Sign in</div>
                <div className="card-body">
                    <form onSubmit={handleSubmit}>
                        <div className="form-group"><label className="small text-gray-600" for="leadCapEmail" name="email">Email address</label><input className="form-control rounded-pill" id="leadCapEmail" type="email" onChange={handleChange} required/></div>
                        <div className="form-group"><label className="small text-gray-600" for="leadCapPassword" name="password">Password</label><input className="form-control rounded-pill" id="leadCapPassword" type="password" onChange={handleChange} required/></div>
                        <button className="btn btn-secondary btn-marketing btn-block rounded-pill mt-4" type="submit">Login Now</button>
                    </form>
                </div>
            </div>
        </div>
        
    );
};

export default Login;
