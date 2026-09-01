
// Mock Backend DB - In production replace with Supabase/Postgres
export const db={
 students:new Map(),
 teachers:new Map(),
 papers:[
  {id:"jee-2024-p1",title:"JEE Main 2024 Jan - Full 90 Qs",year:2024,exam:"JEE",qs:90,duration:180,marks:360,subject:"PCM"},
  {id:"jee-2023-p1",title:"JEE Main 2023 Apr - Full 90 Qs",year:2023,exam:"JEE",qs:90,duration:180,marks:360,subject:"PCM"},
  {id:"jee-2022-p1",title:"JEE Main 2022 Full 90 Qs",year:2022,exam:"JEE",qs:90,duration:180,marks:360,subject:"PCM"},
  {id:"jee-2019-p1",title:"JEE Main 2019 Full 90 Qs",year:2019,exam:"JEE",qs:90,duration:180,marks:360,subject:"PCM"},
  {id:"neet-2024",title:"NEET 2024 Full 180 Qs",year:2024,exam:"NEET",qs:180,duration:200,marks:720,subject:"PCB"},
 ],
 exams:[] as any[],
 problems:[] as any[],
 getStudent:(id:string)=>null,
};

export function generateQuestions(count:number, exam:string){
 const bank=[
  {q:"Particle v=3t^2, distance first 2s?",o:["4m","6m","8m","10m"],c:2},
  {q:"sinA=3/5, cosA=?",o:["4/5","3/4","5/4","1"],c:0},
  {q:"pH 0.01M HCl?",o:["1","2","3","2.5"],c:1},
  {q:"d/dx x^2?",o:["x","2x","x^2","2"],c:1},
  {q:"Unit Force?",o:["Joule","Newton","Watt","Pascal"],c:1},
  {q:"Carbon atomic number?",o:["6","8","12","14"],c:0},
  {q:"∫1/x?",o:["ln x","x","1/x^2","e^x"],c:0},
  {q:"Speed light?",o:["3e8","3e6","3e10","3e5"],c:0},
 ];
 let qs=[];
 for(let i=0;i<count;i++){const b=bank[i%bank.length]; qs.push({id:i+1,q:`Q${i+1} [${exam}-${["Physics","Chemistry","Maths"][i%3]}] ${b.q}`,options:b.o,correct:b.c,subject:["Physics","Chemistry","Maths"][i%3],difficulty:["Easy","Medium","Hard"][i%3],marks:4,explain:`Ans ${b.o[b.c]} - Standard`})}
 return qs;
}
