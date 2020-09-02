import React from 'react';
import { Switch, Route } from "react-router-dom";
import Home from "./home/Home"
import AuthLayout from "./layouts/AuthLayout"
import Register from "./auth/Register"
import LoginOption from "./auth/LoginOption"
import CreateUserProfile from "./auth/CreateUserProfile"

import './App.css';


import {AuthProvider} from '../context/AuthState';
import AppNavbar from './AppNavbar';


function App() {
  return (
    <div className="App">

      <Switch>
        <Route exact path="/" render={props => (
          <AuthLayout>
                <LoginOption {...props} />
            </AuthLayout>
        )} />  
        <Route exact path="/register" render={props => (
          <AuthLayout>
              <Register {...props} />
          </AuthLayout>
        )} />
        <Route exact path="/userprofile" ><CreateUserProfile /></Route>


        
      </Switch>
    </div>
  );
}

export default App;