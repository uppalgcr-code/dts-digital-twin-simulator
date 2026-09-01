
export const papers=[
{id:"jee-2024-p1",title:"JEE Main 2024",subtitle:"January Session",year:2024,exam:"JEE",qs:90,marks:360,duration:180,subject:"Physics, Chemistry, Maths",students:12400,color:"fiitjee-yellow"},
{id:"jee-2023-p1",title:"JEE Main 2023",subtitle:"April Session",year:2023,exam:"JEE",qs:90,marks:360,duration:180,subject:"Physics, Chemistry, Maths",students:9800,color:"fiitjee-navy"},
{id:"jee-2022-p1",title:"JEE Main 2022",subtitle:"Full Paper",year:2022,exam:"JEE",qs:90,marks:360,duration:180,subject:"Physics, Chemistry, Maths",students:8700,color:"fiitjee-yellow"},
{id:"jee-2019-p1",title:"JEE Main 2019",subtitle:"Full Paper",year:2019,exam:"JEE",qs:90,marks:360,duration:180,subject:"Physics, Chemistry, Maths",students:5800,color:"fiitjee-navy"},
{id:"neet-2024",title:"NEET 2024",subtitle:"Full Paper",year:2024,exam:"NEET",qs:180,marks:720,duration:200,subject:"Physics, Chemistry, Biology",students:15200,color:"fiitjee-yellow"},
{id:"neet-2023",title:"NEET 2023",subtitle:"Full Paper",year:2023,exam:"NEET",qs:180,marks:720,duration:200,subject:"Physics, Chemistry, Biology",students:13400,color:"fiitjee-navy"},
];
export function makeQuestions(count:number){
 const bank=[
  {q:"A particle moves with velocity v = 3t². What is distance in first 2 sec?",o:["4 m","6 m","8 m","10 m"],c:2,sub:"Physics",diff:"Medium",topic:"Kinematics"},
  {q:"If sin A = 3/5, what is cos A?",o:["4/5","3/4","5/4","1"],c:0,sub:"Maths",diff:"Easy",topic:"Trigonometry"},
  {q:"pH of 0.01M HCl?",o:["1","2","3","2.5"],c:1,sub:"Chemistry",diff:"Easy",topic:"Acids"},
  {q:"Derivative of x²?",o:["x","2x","x²","2"],c:1,sub:"Maths",diff:"Easy",topic:"Calculus"},
 ];
 let qs=[]; for(let i=0;i<count;i++){const b=bank[i%bank.length]; qs.push({id:i+1,q:b.q,options:b.o,correct:b.c,subject:b.sub,difficulty:b.diff,topic:b.topic})} return qs;
}
export function calcAnalysis(answers:number[], qs:any[], paper:any){
 let correct=0,wrong=0,unattempted=0,score=0;
 let subWise:any={Physics:{c:0,w:0,t:0,score:0},Chemistry:{c:0,w:0,t:0,score:0},Maths:{c:0,w:0,t:0,score:0}};
 answers.forEach((a,i)=>{
  const q=qs[i]
  if(a===-1) unattempted++; else if(a===q.correct){correct++; score+=4; if(subWise[q.subject]){subWise[q.subject].c++; subWise[q.subject].score+=4}} else {wrong++; score-=1; if(subWise[q.subject]){subWise[q.subject].w++; subWise[q.subject].score-=1}}
  if(subWise[q.subject]) subWise[q.subject].t++;
 })
 const total=paper.qs*4
 const pct=Math.round((score/total)*100)
 const potential=score+15
 const rankLow=Math.max(1,Math.round(20000-(pct*150)))
 const rankHigh=Math.round(26000-(pct*160))
 const shouldCoaching = score < 180 ? {need:true, type:"Professional coaching recommended", reason:"Structured guidance can add 40-60 marks", coaching:"Consider FIITJEE, Allen, Resonance - 12-15 hrs/week", improvement:"+40-60 marks possible"} : {need:false, type:"Self study + mentorship", reason:"You are on track with weekly doubt clearing", coaching:"Self study + 1 doubt session/week", improvement:"+12-19 marks"}
 return {correct,wrong,unattempted,score,total,pct,potential,rank:`${rankLow.toLocaleString()} - ${rankHigh.toLocaleString()}`,subWise,shouldCoaching}
}
