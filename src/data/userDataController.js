import axios from 'axios';

export function updateUserDataTrainings(user,training){
    let new_training = {
        name:training.title,
        type:training.content,
        exercises:training.exercises,
        metadata:{
            date:new Date(),
        }
    }
    console.log(user);
    user.data.trainings.push(new_training);
    axios.put('http://localhost:5000/user/updateUserData',{
        user:user,
    })
    .catch(err=>{
        console.log(err);
    })
}
