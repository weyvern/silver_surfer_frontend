import React, { useState, useContext } from 'react';
//import { GlobalContext } from '../Context/GlobalState';

const Register = () => {
    const [newUser, setNewUser] = useState({});
    //const { addNewUser } = useContext(GlobalContext);

    const handleChange = (e) => {
        setNewUser({...newUser, [e.target.name]: e.target.value});
    }

    const handleSubmit = (e) => {
        const {name, lastName, email, password} = newUser;
        e.preventDefault();
        /*
        //Validation

        //Password length
        if(password.length < 5) {
            return window.alert("Password needs to be longer than 5 characters.");
        }

        //Empty fields
        if(!name || !lastName || !email || !password) {
            return window.alert("Empty fields: Please fill out every field.");
        }

        //User already registered
        if(email === ) {
            return window.alert("A Uuser with this email already exists. Please go to login");
        }
        let User = newUser;
        addNewUser(User);
        */

        setNewUser({});
        this.props.history.push('/userprofile');
    }


    return (
        <div>
            <div className="card rounded-lg text-dark">
                <div className="card-header py-4">Sign up</div>
                <div className="card-body">
                    <form onSubmit={handleSubmit}>
                        <div className="form-row">
                            <div className="form-group col-md-6"><label className="small text-gray-600" for="leadCapFirstName" name="name" required>First Name</label><input className="form-control rounded-pill" id="leadCapFirstName" type="text" onChange={handleChange} required/></div>
                            <div className="form-group col-md-6"><label className="small text-gray-600" for="leadCapLastName" name="lastName" required>Last Name</label><input className="form-control rounded-pill" id="leadCapLastName" type="text" onChange={handleChange} required/></div>
                        </div>
                        <div className="form-group"><label className="small text-gray-600" for="leadCapEmail" name="email">Email address</label><input className="form-control rounded-pill" id="leadCapEmail" type="email" onChange={handleChange} required/></div>
                        <div className="form-group"><label className="small text-gray-600" for="leadCapPassword" name="password">Password</label><input className="form-control rounded-pill" id="leadCapPassword" type="password" onChange={handleChange} required/></div>
                        <button className="btn btn-secondary btn-marketing btn-block rounded-pill mt-4" type="submit">Register Now</button>
                    </form>
                    <div class="row py-5 justify-content-around m-0">
                        <p>Already have an account?</p>
                        <button class="btn btn-secondary btn-marketing rounded-pill">Go to Login<svg class="svg-inline--fa fa-arrow-right fa-w-14 ml-1" aria-hidden="true" focusable="false" data-prefix="fas" data-icon="arrow-right" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512" data-fa-i2svg=""><i class="fas fa-arrow-right ml-1"></i></svg></button>
                    </div>
                </div>
               
            </div>
        </div>
        
    );
};

export default Register;
