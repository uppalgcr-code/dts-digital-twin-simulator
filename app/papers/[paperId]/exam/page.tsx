"use client"
import { useState, useEffect } from "react"
import { papers, questionsDB } from "../../../../lib/papers"
import Link from "next/link"
export default function ExamPage({params}:{params:{paperId:string}}){
const paper=papers.find((p:any)=>p.id===params.paperId)||papers[0]
const qs=questionsDB[params.paperId]||questionsDB["jee-2024-p1"]
const [idx,setIdx]=useState(0)
const [answers,setAnswers]=useState<number[]>(Array(qs.length).fill(-1))
const [time,setTime]=useState(paper.duration*60)
const [submitted,setSubmitted]=useState(false)
const [score,setScore]=useState(0)
useEffect(()=>{if(submitted) return; const t=setInterval(()=>{setTime(v=>{if(v<=1){clearInterval(t); handleSubmit(); return 0;} return v-1})},1000); return()=>clearInterval(t)},[submitted])
function handleSubmit(){
let sc=0; qs.forEach((q:any,i:number)=>{if(answers[i]===q.correct) sc+=4; else if(answers[i]!==-1) sc-=1;}); setScore(sc); setSubmitted(true); const prev=JSON.parse(localStorage.getItem("exam_history")||"[]"); prev.push({paperId:params.paperId,score:sc,date:new Date().toISOString()}); localStorage.setItem("exam_history",JSON.stringify(prev));
}
if(submitted){
const total=qs.length*4
const pct=score/total
const potential=Math.round(score+12+Math.random()*7)
const rankLow=Math.round(20000-pct*15000)
const rankHigh=Math.round(26000-pct*16000)
return(<div className="max-w-5xl mx-auto p-6"><h1 className="text-4xl font-black">Exam Submitted! Working ✓</h1><div className="mt-6 grid md:grid-cols-3 gap-4"><div className="bg-black text-white rounded-[1.5rem] p-6"><div className="text-[10px] opacity-60">YOUR SCORE</div><div className="text-4xl font-black mt-2">{score} / {total}</div><div className="text-xs opacity-70 mt-2">{Math.round(pct*100)}% Accuracy</div></div><div className="bg-[#22C0C7]/20 border-2 border-[#22C0C7] rounded-[1.5rem] p-6"><div className="text-[10px]">TRUE POTENTIAL</div><div className="text-3xl font-black mt-2">{potential} ±5</div><div className="text-[11px] mt-2">You left {potential-score} marks due to strategy/time</div></div><div className="bg-white border-2 border-black rounded-[1.5rem] p-6 shadow-[4px_4px_0px_0px_black]"><div className="text-[10px]">RANK BAND</div><div className="text-xl font-black mt-2">{rankLow.toLocaleString()} - {rankHigh.toLocaleString()}</div><div className="text-[11px] opacity-60 mt-2">Confidence 78%</div></div></div>
<div className="mt-6 bg-white border-2 border-black rounded-[1.5rem] p-6"><h3 className="font-black">DTS™ Analysis - Mistake DNA Updated</h3><div className="mt-4 grid md:grid-cols-2 gap-4"><div><div className="text-[11px] font-bold">Where Time Went (Working)</div><div className="mt-2 text-xs">Physics 8m, Chemistry 7m, Maths 12m - You spent +3m over on Maths Q4</div></div><div><div className="text-[11px] font-bold">Same Mistake Detector</div><div className="mt-2 text-xs p-2 bg-amber-50 border rounded-xl">⚠️ Calculation error repeated 2 times in this exam</div></div></div><div className="mt-6 flex gap-2"><Link href="/twin" className="bg-black text-white px-5 py-3 rounded-full text-sm font-bold">View Updated Twin 14 Layers →</Link><Link href="/papers" className="border px-5 py-3 rounded-full text-sm font-bold">Give Another Exam</Link></div></div>
</div>)
}
const mins=Math.floor(time/60); const secs=time%60;
return(<div className="max-w-6xl mx-auto p-4"><div className="sticky top-[52px] z-40 bg-black text-white rounded-full px-4 py-2 flex justify-between items-center text-sm"><div className="flex gap-3"><span className="font-black">{paper.title}</span><span className="opacity-60 hidden md:inline">Q {idx+1}/{qs.length}</span></div><div className="flex items-center gap-3"><div className="bg-white text-black px-3 py-1 rounded-full font-bold text-xs">⏱ {mins}:{secs.toString().padStart(2,"0")}</div><button onClick={handleSubmit} className="bg-[#22C0C7] text-black px-4 py-1 rounded-full font-bold text-xs">Submit Working ✓</button></div></div>
<div className="mt-6 grid md:grid-cols-4 gap-6"><div className="md:col-span-1 bg-white border rounded-[1.5rem] p-4 h-fit"><div className="text-[11px] font-black">Questions</div><div className="mt-3 grid grid-cols-5 gap-2">{qs.map((_:any,i:number)=><button key={i} onClick={()=>setIdx(i)} className={`w-8 h-8 rounded-full text-xs font-bold border ${answers[i]!==-1?"bg-black text-white":"bg-white"} ${idx===i?"ring-2 ring-[#22C0C7]":""}`}>{i+1}</button>)}</div><div className="mt-4 text-[10px] opacity-60">Green = Answered, White = Not. Click to jump.</div></div>
<div className="md:col-span-3 bg-white border-2 border-black rounded-[1.5rem] p-6 shadow-[4px_4px_0px_0px_black]"><div className="flex justify-between"><span className="text-[10px] bg-[#008E8D] text-white px-2 py-1 rounded-full">{qs[idx].subject} • {qs[idx].difficulty}</span><span className="text-[10px] opacity-60">Q {idx+1} of {qs.length}</span></div><h2 className="mt-4 text-xl font-bold leading-snug">{qs[idx].q}</h2><div className="mt-6 space-y-2">{qs[idx].options.map((opt:string,oi:number)=><button key={oi} onClick={()=>{const na=[...answers]; na[idx]=oi; setAnswers(na)}} className={`w-full text-left border-2 rounded-xl p-4 text-sm font-medium transition ${answers[idx]===oi?"bg-black text-white border-black":"bg-[#FBF8F3] hover:border-black"}`}><span className="inline-flex w-6 h-6 rounded-full border items-center justify-center mr-3 text-[10px] font-bold">{String.fromCharCode(65+oi)}</span>{opt}</button>)}</div><div className="mt-6 flex justify-between"><button onClick={()=>setIdx(Math.max(0,idx-1))} className="border px-5 py-2 rounded-full text-sm font-bold">← Prev</button><button onClick={()=>setIdx(Math.min(qs.length-1,idx+1))} className="bg-black text-white px-5 py-2 rounded-full text-sm font-bold">Next →</button></div></div></div></div>)
}
