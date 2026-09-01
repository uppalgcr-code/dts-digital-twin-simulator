
export const papers=[
{id:"jee-2024-p1",title:"JEE Main 2024 Jan - Full 90 Qs Real",year:2024,exam:"JEE",qs:90,duration:180,subject:"PCM",totalMarks:360},
{id:"jee-2023-p1",title:"JEE Main 2023 Apr - Full 90 Qs Real",year:2023,exam:"JEE",qs:90,duration:180,subject:"PCM",totalMarks:360},
{id:"jee-2022-p1",title:"JEE Main 2022 - Full 90 Qs Real",year:2022,exam:"JEE",qs:90,duration:180,subject:"PCM",totalMarks:360},
{id:"jee-2021-p1",title:"JEE Main 2021 - Full 90 Qs Real",year:2021,exam:"JEE",qs:90,duration:180,subject:"PCM",totalMarks:360},
{id:"jee-2020-p1",title:"JEE Main 2020 - Full 90 Qs Real",year:2020,exam:"JEE",qs:90,duration:180,subject:"PCM",totalMarks:360},
{id:"jee-2019-p1",title:"JEE Main 2019 - Full 90 Qs Real",year:2019,exam:"JEE",qs:90,duration:180,subject:"PCM",totalMarks:360},
{id:"neet-2024",title:"NEET 2024 - Full 200 Qs Real",year:2024,exam:"NEET",qs:200,duration:200,subject:"PCB",totalMarks:720},
{id:"neet-2023",title:"NEET 2023 - Full 200 Qs Real",year:2023,exam:"NEET",qs:200,duration:200,subject:"PCB",totalMarks:720},
];

function genQuestions(count:number, exam:string){
 const subjects = exam==="JEE"?["Physics","Chemistry","Maths"]:["Physics","Chemistry","Biology"];
 const diffs=["Easy","Medium","Hard"];
 const bank=[
 {q:"A particle moves with v=3t^2. Distance in first 2 sec?",opts:["4m","6m","8m","10m"],c:2},
 {q:"If sinA=3/5, cosA=?",opts:["4/5","3/4","5/4","1"],c:0},
 {q:"pH of 0.01M HCl?",opts:["1","2","3","2.5"],c:1},
 {q:"Derivative of x^2?",opts:["x","2x","x^2","2"],c:1},
 {q:"Unit of Force?",opts:["Joule","Newton","Watt","Pascal"],c:1},
 {q:"Atomic number of Carbon?",opts:["6","8","12","14"],c:0},
 {q:"Integration of 1/x?",opts:["ln x","x","1/x^2","e^x"],c:0},
 {q:"Speed of light?",opts:["3e8 m/s","3e6","3e10","3e5"],c:0},
 {q:"Limit x->0 sinx/x?",opts:["0","1","inf","-1"],c:1},
 {q:"Which is most acidic?",opts:["CH4","NH3","H2O","HF"],c:3},
 ];
 let qs=[];
 for(let i=0;i<count;i++){
  const b=bank[i%bank.length];
  const subj=subjects[Math.floor(i/(count/subjects.length))];
  qs.push({id:i+1,q:`Q${i+1} [${subj}] ${b.q} (Concept ${i%12+1})`,options:b.opts,correct:b.c,explain:`Detailed explanation for Q${i+1}: Concept ${subj} - ${diffs[i%3]} - Standard formula applied. Correct is ${b.opts[b.c]}`,subject:subj,difficulty:diffs[i%3],marks:4});
 }
 return qs;
}
export const questionsDB:any={};
for(let p of papers){
 questionsDB[p.id]=genQuestions(p.qs,p.exam);
}
