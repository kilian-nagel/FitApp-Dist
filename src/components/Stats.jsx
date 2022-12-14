import React, { Component } from 'react';
import { useContext } from 'react';
import { getStatsData } from '../data/getStatsData';
import { statsSections } from '../data/StatsSections';
import { userContext } from '../hooks/userContext';
import Header from './header';
import Section from './section';

function Stats() {
    const {userData,setUserData} = useContext(userContext);
    const sections = statsSections.map((section,i)=>{return <Section id={section.id} key={i} title={section.title} cards={section.cards} layout={section.layout}></Section>});

    statsSections.map((section)=>{
        section.cards.map(card=>{
            let data = getStatsData[card.name].call(null,userData);
            card.content = data;
        })
    })
    
    return ( 
        <React.Fragment>
            <Header/>
            {sections}
        </React.Fragment>
    );
}

export default Stats;