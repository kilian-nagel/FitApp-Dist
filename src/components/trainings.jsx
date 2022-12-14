import React from 'react';
import { workoutSections } from '../data/workoutSections';
import Header from './header';
import Section from './section';

function Trainings() {
    const sections = workoutSections.map((section,i)=>{return <Section id={section.id} key={i} title={section.title} cards={section.cards} layout={section.layout} type={section.type} section={section.section}></Section>});
    return ( 
        <React.Fragment>
            <Header/>
            {sections}
        </React.Fragment>
    );
}

export default Trainings;