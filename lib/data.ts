
export const papers=[
{id:"jee-2024-p1",title:"JEE Main 2024",year:2024,exam:"JEE",qs:90,marks:360,duration:180,subject:"PCM",students:12400},
{id:"jee-2023-p1",title:"JEE Main 2023",year:2023,exam:"JEE",qs:90,marks:360,duration:180,subject:"PCM",students:9800},
{id:"jee-2019-p1",title:"JEE Main 2019",year:2019,exam:"JEE",qs:90,marks:360,duration:180,subject:"PCM",students:5800},
{id:"neet-2024",title:"NEET 2024",year:2024,exam:"NEET",qs:180,marks:720,duration:200,subject:"PCB",students:15200},
];
export function makeQuestions(count:number){
 const bank=[
  {q:"Particle v=3t² distance first 2 sec?",o:["4m","6m","8m","10m"],c:2,sub:"Physics",diff:"Medium",topic:"Kinematics"},
  {q:"sinA=3/5 cosA?",o:["4/5","3/4","5/4","1"],c:0,sub:"Maths",diff:"Easy",topic:"Trigonometry"},
  {q:"pH 0.01M HCl?",o:["1","2","3","2.5"],c:1,sub:"Chemistry",diff:"Easy",topic:"Acids"},
  {q:"Derivative x²?",o:["x","2x","x²","2"],c:1,sub:"Maths",diff:"Easy",topic:"Calculus"},
  {q:"Unit of Force?",o:["Joule","Newton","Watt","Pascal"],c:1,sub:"Physics",diff:"Easy",topic:"Units"},
 ];
 let qs=[]; for(let i=0;i<count;i++){const b=bank[i%bank.length]; qs.push({id:i+1,q:b.q,options:b.o,correct:b.c,subject:b.sub,difficulty:b.diff,topic:b.topic,explain:`Correct ${b.o[b.c]} - ${b.sub} ${b.topic}`})} return qs;
}
export function calcAnalysis(answers:number[], qs:any[], paper:any){
 let correct=0, wrong=0, unattempted=0, score=0;
 let subWise:any={Physics:{c:0,w:0,t:0,score:0},Chemistry:{c:0,w:0,t:0,score:0},Maths:{c:0,w:0,t:0,score:0}};
 let diffWise:any={Easy:{c:0,t:0},Medium:{c:0,t:0},Hard:{c:0,t:0}};
 let topicWise:any={}
 answers.forEach((a,i)=>{
  const q=qs[i]
  if(a===-1){unattempted++; } else if(a===q.correct){correct++; score+=4; if(subWise[q.subject]){subWise[q.subject].c++; subWise[q.subject].score+=4} diffWise[q.difficulty].c++;} else {wrong++; score-=1; if(subWise[q.subject]){subWise[q.subject].w++; subWise[q.subject].score-=1}}
  if(subWise[q.subject]) subWise[q.subject].t++;
  diffWise[q.difficulty].t++;
  topicWise[q.topic]=(topicWise[q.topic]||{c:0,t:0}); topicWise[q.topic].t++; if(a===q.correct) topicWise[q.topic].c++;
 })
 const total=paper.qs*4
 const pct=Math.round((score/total)*100)
 const potential=score+Math.floor(Math.random()*8)+12
 const rankLow=Math.max(1,Math.round(20000-(pct*150)))
 const rankHigh=Math.round(26000-(pct*160))
 const timeSpent={Physics:42, Chemistry:38, Maths:91, Review:9, total:180, over:24}
 const mistakeDNA=[{label:"Calculation",value:24,desc:"Simple calculation slips"},{label:"Concept",value:19,desc:"Concept not clear"},{label:"Careless",value:17,desc:"Misread question"},{label:"Time",value:14,desc:"Ran out of time"}]
 const shouldCoaching = score < 180 ? {need:true, reason:"Your score indicates you need structured guidance", type:"Professional coaching recommended for JEE", coaching:"Allen / Resonance / PhysicsWallah recommended - 12-15 hrs/week structured", improvement:"+40-60 marks possible with coaching"} : {need:false, reason:"You are on track for self study with weekly doubt sessions", type:"Self study + weekly mentorship", coaching:"Continue self study + 1 doubt session/week + full papers", improvement:"+12-19 marks with strategy fix"}
 return {correct,wrong,unattempted,score,total,pct,potential,rank:`${rankLow.toLocaleString()} - ${rankHigh.toLocaleString()}`,rankLow,rankHigh,subWise,diffWise,topicWise,timeSpent,mistakeDNA,shouldCoaching,questions:qs,answers}
}
