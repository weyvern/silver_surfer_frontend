import React from 'react';
import { Link } from 'react-router-dom';

const AppNavbar = () => {


    return (
        <div>
           <Link to={'/home'} activeClassName="active"><i>Home</i></Link>
           <Link to={'/feed'} activeClassName="active"><i>Feed</i></Link>
           <Link to={'/chat'} activeClassName="active"><i>chat</i></Link>
           <Link to={'/events'} activeClassName="active"><i>events</i></Link>
           <Link to={'/settings'} activeClassName="active"><i>settings</i></Link>
        </div> 
       
    );
};

export default AppNavbar;
