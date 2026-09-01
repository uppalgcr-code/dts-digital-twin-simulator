
export const papers=[
{id:"jee-2024-p1",title:"JEE Main 2024",subtitle:"January Session",year:2024,exam:"JEE",qs:90,marks:360,duration:180,subject:"Physics, Chemistry, Maths",students:12400},
{id:"jee-2023-p1",title:"JEE Main 2023",subtitle:"April Session",year:2023,exam:"JEE",qs:90,marks:360,duration:180,subject:"Physics, Chemistry, Maths",students:9800},
{id:"neet-2024",title:"NEET 2024",subtitle:"Full Paper",year:2024,exam:"NEET",qs:180,marks:720,duration:200,subject:"Physics, Chemistry, Biology",students:15200},
];
export function makeQuestions(count:number){
  const bank=[
    {q:"A particle moves with velocity v = 3t². What is the distance covered in first 2 seconds?",o:["4 m","6 m","8 m","10 m"],c:2,sub:"Physics",diff:"Medium",topic:"Kinematics"},
    {q:"What is the unit of force?",o:["Joule","Newton","Watt","Pascal"],c:1,sub:"Physics",diff:"Easy",topic:"Units"},
    {q:"What is the pH of 0.01M HCl?",o:["1","2","3","2.5"],c:1,sub:"Chemistry",diff:"Easy",topic:"Acids"},
    {q:"If sin A = 3/5, what is cos A?",o:["4/5","3/4","5/4","1"],c:0,sub:"Maths",diff:"Easy",topic:"Trigonometry"},
  ];
  let qs=[]; for(let i=0;i<count;i++){const b=bank[i%bank.length]; qs.push({id:i+1,q:`${i+1}. ${b.q}`,options:b.o,correct:b.c,subject:b.sub,difficulty:b.diff,topic:b.topic})} return qs;
}
export function calcAnalysis(answers:number[], qs:any[], paper:any, studentData?:any){
  let correct=0,wrong=0,unattempted=0,score=0;
  let subWise:any={Physics:{c:0,w:0,t:0,score:0},Chemistry:{c:0,w:0,t:0,score:0},Maths:{c:0,w:0,t:0,score:0}};
  answers.forEach((a,i)=>{ const q=qs[i]; if(a===-1) unattempted++; else if(a===q.correct){correct++; score+=4; if(subWise[q.subject]){subWise[q.subject].c++; subWise[q.subject].score+=4}} else {wrong++; score-=1; if(subWise[q.subject]){subWise[q.subject].w++; subWise[q.subject].score-=1}} if(subWise[q.subject]) subWise[q.subject].t++; });
  const total=paper.qs*4; const pct=total>0?Math.round((score/total)*100):0;
  const potential=Math.min(total, score + Math.floor(wrong*0.7 + unattempted*0.5) + 8);
  const rankLow=Math.max(1,Math.round(25000 - (pct*180) - (correct*15))); const rankHigh=Math.round(30000 - (pct*160) - (correct*10));
  const className=studentData?.className||"12th";
  let shouldCoaching;
  if(score<150){ shouldCoaching={need:true,type:"Professional coaching can help you improve",reason:"With structured guidance, you can improve your score significantly",coaching:"Consider a coaching program with regular tests - 12 to 15 hours per week",improvement:"Potential improvement of 40 to 60 marks"}; }
  else { shouldCoaching={need:false,type:"You are on track",reason:"Your current approach is working - continue with weekly doubt clearing",coaching:"Continue self study with 1 doubt session per week",improvement:"Potential improvement of 12 to 19 marks with better strategy"}; }
  return {correct,wrong,unattempted,score,total,pct,potential,rank:`${rankLow.toLocaleString()} - ${rankHigh.toLocaleString()}`,subWise,shouldCoaching};
}
