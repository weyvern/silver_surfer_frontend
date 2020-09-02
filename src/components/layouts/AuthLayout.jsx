import React from 'react';
import Picture from "../../assets/img/login/login_page.jpg";

const AuthLayout = ({ children }) => {
    return (
        <div id="AuthLayout" class="row">
            <div class="col-lg-5 d-flex justify-content-center align-items-center">
                <div class="container">
                    <h1 class="page-header-title">Build your next project faster with SB UI Kit Pro</h1>
                    <p class="page-header-text mb-5">Welcome to SB UI Kit Pro, a toolkit for building beautiful web interfaces, created by the developmet team at Start Bootstrap</p>
                    <div><img class="img-fluid" src={Picture} /></div>
                </div>
            </div>
            
            <div class="col-lg-7 bg-gradient-primary-to-secondary d-flex justify-content-center align-items-center">
                <div class="page-header-content">
                    <div class="container">
                        <div>
                            {children}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default AuthLayout;
