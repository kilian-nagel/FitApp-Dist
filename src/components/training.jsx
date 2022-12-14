
import React, { Component, useState } from 'react';
import { useEffect } from 'react';
import '../style/training.css'
import Header from './header';

// {name,desc,type,exercises}

function Training({training,handleTrainingEnd}) {
    const [isTrainingActive,setIsTrainingActive] = useState(false);
    const [exerciseCounter,setExerciseCounter] = useState(0);
    const exercises = training.exercises;
    
    function decrementCounter(){
        if(exerciseCounter>0){setExerciseCounter(exerciseCounter-1)}
    }

    function incrementCounter(){
        if(exerciseCounter+1>=exercises.length){
            console.log('a');
            handleTrainingEnd();
            setIsTrainingActive(false);
            return 0;
        }
        setExerciseCounter(exerciseCounter+1);
    }

    function startTraining(){
        setExerciseCounter(0);
        setIsTrainingActive(true);
    }

    return ( 
        <div id="training">
                <Header></Header>
                {
                isTrainingActive ?
                <div className='session'>            
                    <p className='exercise'>{exercises[exerciseCounter].name} x {exercises[exerciseCounter].reps}</p>
                    <button onClick={()=>{decrementCounter()}}>previous</button>
                    <button onClick={()=>{incrementCounter()}}>next</button>
                </div> 
                :
                <React.Fragment>
                    <p className="desc">{training.title}</p>
                    <button className="start-btn btn" onClick={()=>startTraining()}>start</button>
                    <div className="exercises">
                        <ul>
                            {(!isTrainingActive) && exercises && exercises.map((exercise,i)=>{
                                return <li key={i}>{exercise.name} {exercise.sets}x{exercise.reps}</li>
                            })}
                        </ul>
                    </div>
                </React.Fragment>
                }
        </div>
    );
}

export default Training;