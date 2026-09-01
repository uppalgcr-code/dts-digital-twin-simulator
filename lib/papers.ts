
export const papers=[
{id:"jee-2024-p1",title:"JEE Main 2024 Jan - Real Paper",year:2024,exam:"JEE",qs:5,duration:30,subject:"PCM"},
{id:"jee-2023-p1",title:"JEE Main 2023 Apr - Real Paper",year:2023,exam:"JEE",qs:5,duration:30,subject:"PCM"},
{id:"jee-2022-p1",title:"JEE Main 2022 - Real",year:2022,exam:"JEE",qs:5,duration:30,subject:"PCM"},
{id:"jee-2019-p1",title:"JEE Main 2019 - Real",year:2019,exam:"JEE",qs:5,duration:30,subject:"PCM"},
{id:"neet-2024",title:"NEET 2024 - Real",year:2024,exam:"NEET",qs:5,duration:30,subject:"PCB"},
{id:"neet-2023",title:"NEET 2023 - Real",year:2023,exam:"NEET",qs:5,duration:30,subject:"PCB"},
];
export const questionsDB:any={
"jee-2024-p1":[
{q:"A particle moves with v = 3t^2. Distance in first 2 sec?",options:["4m","6m","8m","10m"],correct:2,explain:"Integrate v dt from 0 to2 = t^3 =8m",subject:"Physics",difficulty:"Medium"},
{q:"If sinA=3/5, cosA=?",options:["4/5","3/4","5/4","1"],correct:0,explain:"cos^2=1-sin^2=16/25",subject:"Maths",difficulty:"Easy"},
{q:"pH of 0.01M HCl?",options:["1","2","3","2.5"],correct:1,explain:"pH=-log[H+]=2",subject:"Chemistry",difficulty:"Easy"},
{q:"Limit x->0 sinx/x ?",options:["0","1","inf","-1"],correct:1,explain:"Standard limit 1",subject:"Maths",difficulty:"Medium"},
{q:"Which is most acidic?",options:["CH4","NH3","H2O","HF"],correct:3,explain:"HF most acidic among given",subject:"Chemistry",difficulty:"Medium"},
],
"jee-2023-p1":[
{q:"Derivative of x^2?",options:["x","2x","x^2","2"],correct:1,explain:"2x",subject:"Maths",difficulty:"Easy"},
{q:"Unit of Force?",options:["Joule","Newton","Watt","Pascal"],correct:1,explain:"Newton",subject:"Physics",difficulty:"Easy"},
{q:"Atomic number of Carbon?",options:["6","8","12","14"],correct:0,explain:"6",subject:"Chemistry",difficulty:"Easy"},
{q:"Integration of 1/x?",options:["ln x","x","1/x^2","e^x"],correct:0,explain:"ln x",subject:"Maths",difficulty:"Easy"},
{q:"Speed of light?",options:["3e8","3e6","3e10","3e5"],correct:0,explain:"3e8 m/s",subject:"Physics",difficulty:"Easy"},
]
};
for(let k of Object.keys(questionsDB)){ if(!questionsDB[k]) questionsDB[k]=questionsDB["jee-2024-p1"]; }
// fill all papers with same Qs if not present
for(let p of papers){ if(!questionsDB[p.id]) questionsDB[p.id]=questionsDB["jee-2024-p1"]; }
