
import React, { Component } from 'react';
import { useState } from 'react';
import { useContext } from 'react';
import { userContext } from '../hooks/userContext';
import { Outlet, Link } from "react-router-dom";
import '../style/navbar.css';
import { useEffect } from 'react';

function Navbar({ handleClick, isAuthenticated }) {
    const [profileDisplay, setProfileDisplay] = useState('none');
    const {userData,setUserData} = useContext(userContext);

    function changeDisplayUserProfille() {
        if (profileDisplay === 'flex') {
            setProfileDisplay('none');
        }
        else {
            setProfileDisplay('flex');
        }
    }

    return (
        <header id="main-header" className='header'>
            <div className="btn-container">
                {
                    isAuthenticated ? <Link to="/" style={{ color: 'black' }}>
                        <i className="fa-solid fa-house"></i>
                    </Link> : ''
                }
            </div>
            <nav className='nav' style={{ position: 'relative' }}>
                <div className='btn-user btn' onClick={changeDisplayUserProfille} style={{ position: 'relative' }}>
                    <i className="btn btn-user fa-solid fa-user"></i>
                    <div className="profile" style={{ display: profileDisplay, position: 'absolute', marginTop: 10, right: 0 }}>
                        <p className='username'>{userData ? userData.username : 'guest'}</p>
                        <button className='btn btn-profile'>your profile</button>
                        <button className='btn btn-logout'>logout</button>
                    </div>
                </div>
            </nav>
        </header>
    );
}

export default Navbar;