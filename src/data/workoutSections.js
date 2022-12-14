
export const workoutSections = [
    {
        id:'training',
        title:'strength workouts',
        type:'training',
        layout:'row',
        section:'/training',
        cards:[
            {
                name:'',
                uid:0,
                title:'squat killer',
                icon:'fas fa-flag',
                content:'type : dumbell , strength',
                exercises:[
                    {name:'weighted squat',sets:3,reps:10,weight:8},
                    {name:'lunges',sets:3,reps:15,weight:0},
                    {name:'weighted squat',sets:3,reps:10,weight:8},
                    {name:'lunges',sets:3,reps:15,weight:0},
                ],
                bgColor:'black',
                bgImage:'none',
            },
            {
                name:'',
                uid:1,
                title:'explosiveness',
                icon:'fas fa-bolt',
                content:'type : explosive , strength',
                exercises:[
                    {name:'jumping squats',sets:3,reps:10,weight:0},
                    {name:'stato-dynamic push-ups',sets:3,reps:15,weight:0},
                    {name:'jumping squats',sets:3,reps:10,weight:0},
                    {name:'stato-dynanmic push-ups',sets:3,reps:15,weight:0},
                ],
                bgColor:'#001F54',
                bgImage:'none',
            },
        ]
    },
    {
        id:'training',
        title:'fitness workouts',
        layout:'row',
        cards:[
            {
                name:'',
                uid:2,
                title:'strong core',
                icon:'fas fa-flag',
                content:'type : bodyweight , core',
                bgColor:'black',
                bgImage:'none',
            },
            {
                name:'',
                uid:3,
                title:'push-up king',
                icon:'fas fa-bolt',
                content:'type : bodyweight , chest',
                bgColor:'#001F54',
                bgImage:'none',
            },
        ]
    },
    {
        id:'training',
        title:'cardio workouts',
        layout:'row',
        cards:[
            {
                name:'',
                uid:4,
                title:'saturday sweat',
                icon:'',
                content:'type : cardio',
                bgColor:'black',
                bgImage:'none',
            },
            {
                name:'',
                uid:5,
                title:'jumping jacks streak',
                icon:'',
                content:'type : bodyweight , chest',
                bgColor:'#001F54',
                bgImage:'none',
            },
        ]
    },
]