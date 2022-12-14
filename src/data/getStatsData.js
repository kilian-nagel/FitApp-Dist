import React, { Component, useContext } from 'react';

export const getStatsData = {
    sessions:function (userData){
        if(1){
            const sessionsData = getSessions(userData);
            return `You did ${sessionsData.week} workouts this week.
            You did ${sessionsData.total} workouts in total.
            `;
        } else {
            return 'no data.'
        }
    },
    exercises:function(userData){
        const exercises = getMostAndLeastPracticedExercices(userData);
        console.log(exercises);
        return `The exercice you practiced the most is ${exercises[0][0]} : ${exercises[0][1]} total reps. The exercice you practiced the least is ${exercises[1][0]} : ${exercises[1][1]} total reps.`
    },
    progression:function(userData){
        return 'a';
    }
}

function getSessions(userData){
    const sessions = userData.data.trainings;
    let month = 0;
    let week = 0;
    let total = userData.data.trainings.length;
    let actual_date = new Date();
    let actual_time = Math.floor(actual_date.getTime() / 1000);

    for(let session in sessions){
        let session_date = sessions[session].metadata.date;
        session_date = new Date(session_date);
        session_date = Math.floor(session_date.getTime() / 1000);
        let seconds_in_a_week = 86400*7;
        if(actual_time-seconds_in_a_week<=session_date){
            week += 1;
        }
    }

    return {
        'week':week,
        'month':month,
        'total':total
    };
}

function getProgression(userData){
    return `You did `
}

function getSessionsDonePreviousWeeks(previousWeeksNb){
    let seconds_in_a_week = 86400*7;

}

function getMostAndLeastPracticedExercices(userData){
    let trainings = userData.data.trainings;
    let occurences = getExercisesOccurences(trainings);
    let maxFrequencyExercise = getMaxOccurenceExercice(occurences);
    let minFrequencyExercise = getLeastOccurenceExercise(occurences);
    return [maxFrequencyExercise,minFrequencyExercise]
}

function getExercisesOccurences(trainings){
    let trainingCount = {};
    for(let t in trainings){
        let exercises = trainings[t].exercises;
        for(let e in exercises){
            console.log(exercises[e]);
            if(!(exercises[e].name in Object.keys(trainingCount))){
                trainingCount[exercises[e].name] = exercises[e].reps;
            } else {
                trainingCount[exercises[e].name] += exercises[e].reps;
            }
        }
    }
    return trainingCount;
}

function getMaxOccurenceExercice(occurences){
    let max = 0;
    let maxName = '';
    for(let e in occurences){
        if(occurences[e]>max){
            max=occurences[e];
            maxName = e;
        }
    }
    console.log(occurences);
    return [maxName,max];
}

function getLeastOccurenceExercise(occurences){
    let min = null;
    let minName = '';
    for(let e in occurences){
        if(occurences[e]<min || min===null){
            min=occurences[e];
            minName = e;
        }
    }
    return [minName,min];
}