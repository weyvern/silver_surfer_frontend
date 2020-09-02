import React, { createContext, useReducer } from 'react';
import AuthReducer from './AuthReducer';
import axios from 'axios';

//Initial State
const initialState = {

};

//create context
const AuthContext = createContext(initialState);

//ProviderComponent
const AuthProvider = ({ children }) => {
    const [state, dispatch] = useReducer(AuthReducer, initialState);

    //Action

    return (
            <AuthContext.Provider value={{
               
            }}>
            {children}
            </AuthContext.Provider>);
    }
    

    export { AuthContext, AuthProvider };