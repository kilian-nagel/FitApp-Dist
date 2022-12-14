import React, { Component, useContext } from 'react';

export const getStatsData = {
    sessions:function (userData){
        if(1){
            const sessionsData = getSessions(userData);
            return `You did ${sessionsData.week} workout(s) this week.
            You did ${sessionsData.total} workout(s) in total.
            `;
        } else {
            return 'no data.'
        }
    },
    exercises:function(userData){
        const exercises = getMostAndLeastPracticedExercices(userData);
        console.log(exercises);
        return `The exercice you practiced the most is ${exercises[0][0]} : ${exercises[0][1]} total rep(s). The exercice you practiced the least is ${exercises[1][0]} : ${exercises[1][1]} total rep(s).`
    },
    progression:function(userData){
        const NbtrainingsDoneThisWeek = getSessions(userData);
        const NbtrainingsDoneLastWeek = getSessionsDonePreviousWeeks(userData,2);
        return `You did ${NbtrainingsDoneThisWeek.week} training(s) this weeks , whereas you did ${NbtrainingsDoneLastWeek.week} last week.`;
    }
}

function getSessions(userData){
    const sessions = userData.data.trainings;
    let month = 0;
    let week = 0;
    let total = userData.data.trainings.length;
    let actual_date = new Date();
    let actual_time = Math.floor(actual_date.getTime() / 1000);
    let seconds_in_a_week = 86400*7;

    for(let session in sessions){
        let session_date = sessions[session].metadata.date;
        session_date = new Date(session_date);
        session_date = Math.floor(session_date.getTime() / 1000);
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
    let nbSessionsCurrentWeek = getSessionsDonePreviousWeeks(0);
    let nbSessionsLastWeek = getSessionsDonePreviousWeeks(1);
    return `You did ${nbSessionsCurrentWeek} this week , You did ${nbSessionsLastWeek} sessions last week.`;
}

function getSessionsDonePreviousWeeks(userData,previousWeeksNb){
    const trainings = userData.data.trainings;
    let total_workouts_done = userData.data.trainings.length;
    let workouts_done_during_week = 0;
    let trainingsCount = 0;
    let actual_date = new Date();
    let actual_time = Math.floor(actual_date.getTime() / 1000);
    let seconds_in_n_week = (86400*7)*previousWeeksNb;
    let seconds_in_n_week_minus_1 = (86400*7)*previousWeeksNb-(86400*7);
    for(let i in trainings){
        let training_date = trainings[i].metadata.date;
        training_date = new Date(training_date);
        training_date = Math.floor(training_date.getTime() / 1000);
        if(actual_time-seconds_in_n_week<=training_date && actual_time-seconds_in_n_week_minus_1 > training_date){
            workouts_done_during_week ++;
        }
    }
    return {
        'week':workouts_done_during_week,
        'month':0,
        'total':total_workouts_done
    }
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
        for(let e of exercises){
            if(!(Object.keys(trainingCount).indexOf(e.name)>-1)){
                trainingCount[e.name] = e.reps;
            } else {
                trainingCount[e.name] += e.reps;
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