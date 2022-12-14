

export const homeSections = [
    {
        id:'activity',
        title:'recent activity',
        type:'stats',
        layout:'',
        cards:[
            {
                name:'sessions',
                title:'sessions',
                icon:'fas fa-flag',
                content:'You exercised 10min today.',
                bgColor:'black',
                bgImage:'',
            },
            {
                name:'calories',
                title:'burned calories',
                icon:'fas fa-bolt',
                content:'You burn 100calories today.',
                bgColor:'#001F54',
                bgImage:'',
            },
            {
                name:'progression',
                title:'progression',
                icon:'fas fa-chart-simple',
                content:'You gained 1 pound this week',
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
                content:'Lose weights , improve cardio system.',
                bgColor:'#034078',
                bgImage:'/cardio.jpg',
            }
        ]
    }
]