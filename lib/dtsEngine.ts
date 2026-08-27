
export type Twin = {
  knowledge: number; mastery: number; speed: number; accuracy: number; memory: number;
  selection: number; guessing: number; stress: number; timeMgmt: number;
  weakness: string[]; strength: string[]; consistency: number; improvement: number; temperament: number;
}

export function calculateTwin(scores:number[]): Twin {
  const avg = scores.reduce((a,b)=>a+b,0)/scores.length;
  return {
    knowledge: Math.min(95, 70 + avg/3),
    mastery: Math.min(95, 65 + avg/2.5),
    speed: 72, accuracy: 84, memory: 78,
    selection: 68, guessing: 9, stress: 62, timeMgmt: 71,
    weakness:["Maths time mgmt","Calculation","Last 45 min"],
    strength:["Chemistry accuracy","Easy Physics","Consistency"],
    consistency: 91, improvement: 8, temperament: 74
  }
}

export function truePotential(current:number, twin:Twin){
  const calcLoss = 7; const timeLoss = 9; const guessLoss = 5;
  const knowledgePotential = current + calcLoss + timeLoss + guessLoss + 3; // 184
  const examPotential = current + 12; // 177
  return {current, knowledgePotential: 184, examPotential: 177, gap: `${knowledgePotential-current-3}-${knowledgePotential-current+3}`, predicted: `${current+3}-${current+10}`};
}

export function rankBand(score:number){
  const base = Math.max(8000, 25000 - score*70);
  return {low: Math.round(base*0.9), high: Math.round(base*1.35), confidence: 78, tests: 11, chapterTests:23, qs:1842}
}

export const mistakeDNA = [
  {label:"Calculation", value:24, color:"#008E8D"},
  {label:"Concept", value:19, color:"#13302B"},
  {label:"Careless", value:17, color:"#22C0C7"},
  {label:"Misreading", value:14, color:"#F59E0B"},
  {label:"Time Pressure", value:12, color:"#EF4444"},
  {label:"Guessing", value:9, color:"#8B5CF6"},
  {label:"Memory", value:5, color:"#6B7280"},
];

export const timeAllocation = {physics:42, chemistry:38, maths:91, review:9, optimalMaths:67};
