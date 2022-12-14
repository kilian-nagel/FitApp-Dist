import React, { Component } from 'react';
import { useContext } from 'react';
import { useEffect } from 'react';
import { userContext } from '../hooks/userContext';
import '../style/header.css';

function Header({text}) {
    const {userData,setUserData} = useContext(userContext);
    return ( 
        <header id="header">
            <h1 className="title">Hello, {userData && userData.username}</h1>
        </header>
    );
}

export default Header;