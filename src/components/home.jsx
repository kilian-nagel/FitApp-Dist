import React, { Component } from 'react';
import { homeSections } from '../data/homeSections';
import { workoutSections } from '../data/workoutSections';
import { statsSections } from '../data/StatsSections';
import Header from './header';
import Section from './section';
import { userContext } from '../hooks/userContext';
import { useContext } from 'react';
import {getStatsData} from '../data/getStatsData';


function Home() {
    const sections = homeSections.map((section,i)=>{return <Section id={section.id} key={i} title={section.title} cards={section.cards} layout={section.layout} section={section.type}></Section>});
    const {userData,setUserData} = useContext(userContext);
    return ( 
        <React.Fragment>
            <Header/>
            {sections}
        </React.Fragment>
    );
}

export default Home;