export const papers = [
  {id:"jee-2024-p1",title:"JEE Main 2024",year:2024,exam:"JEE",qs:90,marks:360,duration:180,students:12400},
  {id:"jee-2023-p1",title:"JEE Main 2023",year:2023,exam:"JEE",qs:90,marks:360,duration:180,students:9800},
  {id:"jee-2019-p1",title:"JEE Main 2019",year:2019,exam:"JEE",qs:90,marks:360,duration:180,students:5800},
  {id:"neet-2024",title:"NEET 2024",year:2024,exam:"NEET",qs:180,marks:720,duration:200,students:15200},
];

export function makeQuestions(count:number){
  const bank=[
    {q:"A particle moves with velocity v = 3t². Distance in first 2 sec?",o:["4 m","6 m","8 m","10 m"],c:2,sub:"Physics"},
    {q:"Unit of Force?",o:["Joule","Newton","Watt","Pascal"],c:1,sub:"Physics"},
    {q:"pH of 0.01M HCl?",o:["1","2","3","2.5"],c:1,sub:"Chemistry"},
    {q:"If sinA=3/5, cosA?",o:["4/5","3/4","5/4","1"],c:0,sub:"Maths"},
  ];
  const qs=[];
  for(let i=0;i<count;i++){
    const b=bank[i%bank.length];
    qs.push({id:i+1,q:`${i+1}. ${b.q}`,options:b.o,correct:b.c,subject:b.sub});
  }
  return qs;
}

export function calcAnalysis(answers:number[], qs:any[], paper:any){
  let correct=0,wrong=0,unattempted=0,score=0;
  let subWise:any={Physics:{c:0,w:0,t:0,score:0},Chemistry:{c:0,w:0,t:0,score:0},Maths:{c:0,w:0,t:0,score:0}};
  answers.forEach((a,i)=>{
    const q=qs[i];
    if(a===-1) unattempted++;
    else if(a===q.correct){correct++; score+=4; if(subWise[q.subject]){subWise[q.subject].c++; subWise[q.subject].score+=4;}}
    else {wrong++; score-=1; if(subWise[q.subject]){subWise[q.subject].w++; subWise[q.subject].score-=1;}}
    if(subWise[q.subject]) subWise[q.subject].t++;
  });
  const total=paper.qs*4;
  const pct=total>0?Math.round((score/total)*100):0;
  const potential=Math.min(total, score + Math.floor(wrong*0.7 + unattempted*0.5) + 8);
  const rankLow=Math.max(1,Math.round(25000 - (pct*180)));
  const rankHigh=Math.round(30000 - (pct*160));
  const shouldCoaching=score<150?{need:true,type:"Professional coaching can help you improve",reason:"Structured guidance can improve your score",coaching:"Consider a coaching program with regular tests",improvement:"Potential improvement of 40 to 60 marks"}:{need:false,type:"You are on track",reason:"Continue with weekly doubt clearing",coaching:"Self study with 1 doubt session per week",improvement:"Potential improvement of 12 to 19 marks"};
  return {correct,wrong,unattempted,score,total,pct,potential,rank:`${rankLow.toLocaleString()} - ${rankHigh.toLocaleString()}`,subWise,shouldCoaching};
}
