import React, { Component } from 'react';
import LoginButton from './loginButton.jsx'
import LogoutButton from './logoutButton.jsx';
import '../style/style.css';
import '../style/loginpage.css'

function LoginPage() {
    return ( 
        <div className="app">
            <section id="home" className="home">
                <h1 className="title">Get in better shape now</h1>
                <p className="text">FitProject help you to organize , plan your workouts.</p>
                <div className="btn-container">
                    <LoginButton></LoginButton>
                    <LogoutButton></LogoutButton>
                </div>
            </section>
        </div>
    );
}

export default LoginPage;