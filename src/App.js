import React, { Component, useContext, useEffect, useState } from 'react';
import axios from 'axios';
import { BrowserRouter, Routes, Route, Outlet } from "react-router-dom";
import { useAuth0 } from '@auth0/auth0-react';
import LoginPage from './components/LoginPage.jsx';
import Navbar from './components/navbar.jsx';
import Training from './components/training.jsx';
import Home from './components/home.jsx';
import Trainings from './components/trainings.jsx';
import Stats from './components/Stats.jsx';
import {workoutSections} from './data/workoutSections';
import { userContext } from './hooks/userContext.js';
import { currentTrainingContext } from './hooks/currentTrainingContext.js';
import './style/sections.css';
import { updateUserDataTrainings } from './data/userDataController.js';

function App() {
    const {
        isAuthenticated,
        user
    } = useAuth0();   

    const [userData,setUserData] = useState({});
    const [isLogged,setIsLogged] = useState(false);
    const [sectionsStack,setSectionsStack] = useState(['home']);
    const [currentTrainingIndex,setCurrentTrainingIndex] = useState({});
    const [training,setTraining] = useState({});


    function handleTrainingEnd(){
        console.log(userData);
        updateUserDataTrainings(userData,training);
    }

    function getTrainingByIndex(index){
        if(!Number.isFinite(index)){return ''}
        workoutSections.map(workoutType=>{
            workoutType.cards.map(workout=>{
                if(workout.uid===currentTrainingIndex){
                    setTraining(workout);
                }
            })
        })
        return 0;
    }

    useEffect(()=>{
        getTrainingByIndex(currentTrainingIndex);
    },[currentTrainingIndex])

    useEffect(()=>{
        login(user,setIsLogged);
    },[user]);

    useEffect(()=>{
        if(isLogged){
            fetchUserData(user,userData,setUserData);
        }
    },[isLogged]);

    useEffect(()=>{
        if(Number.isFinite(currentTrainingIndex)){getTrainingByIndex(currentTrainingIndex);}
    },[currentTrainingIndex]);

    return (
        isAuthenticated ?
            <div className="app">
                <userContext.Provider value={{userData,setUserData}}>
                    <currentTrainingContext.Provider value={{currentTrainingIndex,setCurrentTrainingIndex}}>
                        <BrowserRouter>
                            <Navbar isAuthenticated={isAuthenticated}></Navbar>
                            <Routes>
                                <Route path="/" element={<Home />} />
                                <Route path="/trainings" element={<Trainings />} />
                                <Route path="/stats" element={<Stats/>}/>
                                <Route path="/recipes" />
                                <Route path="/training" element={<Training training={training} handleTrainingEnd={handleTrainingEnd}/>}/>
                            </Routes>
                        </BrowserRouter>
                    </currentTrainingContext.Provider>
                </userContext.Provider>
            </div>
            :
        <div className="app">
            <Navbar isAuthenticated={isAuthenticated}/>
            <LoginPage />
        </div>
    );
}

function login(user,setIsLogged){
    if(user){
        axios.post('http://localhost:5000/auth/login',{
            username:user.nickname,
            uid:user.sub
        })
        .then(response=>{
            setIsLogged(true);
        })
        .catch(err=>{
            throw err;
        });
    }
}

function fetchUserData(user,userData,setUserData){
    if(user){
        axios.post('http://localhost:5000/user/getUserData',{
            uid:user.sub
        })
        .then(async(data)=>{
            await setUserData(data.data);
        })                                                                                                                                                                                                                
    }
}

export default App;