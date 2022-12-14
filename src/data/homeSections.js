

export const homeSections = [
    {
        id:'activity',
        title:'statistics',
        type:'stats',
        layout:'',
        cards:[
            {
                name:'sessions',
                title:'sessions',
                icon:'fas fa-flag',
                content:'See more data about your recent sessions.',
                bgColor:'black',
                bgImage:'',
            },
            {
                name:'exercices',
                title:'burned calories',
                icon:'fas fa-bolt',
                content:'Find out what is your favorite exercice.',
                bgColor:'#001F54',
                bgImage:'',
            },
            {
                name:'progression',
                title:'progression',
                icon:'fas fa-chart-simple',
                content:'Track your progression , and reach your goals.',
                bgColor:'#034078',
                bgImage:'',
            }
        ]
    },
    {
        id:'workouts',
        title:'workouts',
        type:'trainings',
        layout:'',
        cards:[
            {
                name:'strength',
                title:'strength workouts',
                icon:'fas fa-flag',
                content:'get more muscles and get stronger',
                bgColor:'black',
                bgImage:'/strength.jpg',
            },
            {
                name:'calories',
                title:'fitness',
                icon:'fas fa-bolt',
                content:'Define and be more tonic',
                bgColor:'#001F54',
                bgImage:'/fitness.jpg',
            },
            {
                name:'progression',
                title:'cardio workouts',
                icon:'fas fa-chart-simple',
                content:'Lose weight , improve cardio.',
                bgColor:'#034078',
                bgImage:'/cardio.jpg',
            }
        ]
    }
]