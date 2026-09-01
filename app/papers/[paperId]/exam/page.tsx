"use client"
import { useState, useEffect } from "react"
import Link from "next/link"
import { makeQuestions, calcAnalysis } from "../../../../lib/data"
export default function Exam({params}:{params:{paperId:string}}){
const count=90
const qs=makeQuestions(count)
const [ok,setOk]=useState(false)
const [ck,setCk]=useState(false)
const [idx,setIdx]=useState(0)
const [ans,setAns]=useState<number[]>(Array(count).fill(-1))
const [time,setTime]=useState(180*60)
const [done,setDone]=useState(false)
const [analysis,setAnalysis]=useState<any>(null)
useEffect(()=>{const s=localStorage.getItem("dts_student"); if(s){try{const p=JSON.parse(s); if(p.completed&&p.verified) setOk(true)}catch{}} setCk(true)},[])
useEffect(()=>{if(!ok||done) return; const t=setInterval(()=>setTime(v=>{if(v<=1){clearInterval(t); handleSubmit(); return 0} return v-1}),1000); return()=>clearInterval(t)},[ok,done])
function handleSubmit(){ const r=calcAnalysis(ans,qs,{qs:count}); setAnalysis(r); const all=JSON.parse(localStorage.getItem("dts_all_attempts")||"[]"); all.push({...r,paperId:params.paperId,createdAt:new Date().toISOString()}); localStorage.setItem("dts_all_attempts",JSON.stringify(all)); setDone(true) }
if(!ck) return <div className="p-6">Loading...</div>
if(!ok) return <div className="max-w-[720px] mx-auto p-6 text-center"><Link href="/auth/student" className="bg-black text-white px-6 py-3 rounded-full">Login</Link></div>
if(done && analysis){
 return(<div className="max-w-[1280px] mx-auto px-6 py-10"><h1 className="text-[32px] font-black">Your detailed analysis - FIITJEE colors</h1><div className="mt-6 grid md:grid-cols-4 gap-5"><div className="fiitjee-navy p-6 rounded-[20px]"><div className="text-[11px] text-white/60">YOUR SCORE</div><div className="text-[32px] font-black">{analysis.score}/{analysis.total}</div></div><div className="fiitjee-card p-6 bg-[#FFCC00]"><div className="text-[11px] font-black">TRUE POTENTIAL</div><div className="text-[28px] font-black">{analysis.potential}</div></div><div className="fiitjee-card p-6"><div className="text-[11px] font-black">EXPECTED RANK</div><div className="text-[18px] font-black">{analysis.rank}</div></div><div className={`fiitjee-card p-6 ${analysis.shouldCoaching.need?"bg-red-50":"bg-green-50"}`}><div className="text-[11px] font-black">RECOMMENDATION</div><div className="text-[13px] font-black mt-1">{analysis.shouldCoaching.type}</div><div className="text-[11px] mt-1">{analysis.shouldCoaching.coaching}</div></div></div><div className="mt-8 flex gap-3"><Link href="/twin" className="fiitjee-btn-navy">See twin</Link><Link href="/papers" className="fiitjee-btn-primary">Another paper</Link></div></div>)
}
const m=Math.floor(time/60); const s=time%60; const answered=ans.filter(a=>a!==-1).length
return(<div className="max-w-[1440px] mx-auto px-4 py-4"><div className="sticky top-16 bg-[#0A1931] text-white border-2 border-black rounded-full px-5 py-2.5 flex justify-between items-center shadow-[4px_4px_0px_0px_black]"><div className="font-bold text-[13px]">Q {idx+1}/{count} • {answered}/{count}</div><div className="flex gap-2"><span className="bg-[#FFCC00] text-black border-2 border-black px-3 py-1 rounded-full text-[12px] font-black">{m}:{s.toString().padStart(2,"0")}</span><button onClick={handleSubmit} className="bg-white text-black border-2 border-black px-4 py-1 rounded-full text-[12px] font-black">Submit</button></div></div><div className="mt-6 grid md:grid-cols-12 gap-5"><div className="md:col-span-3 fiitjee-card p-4 h-fit"><div className="font-black text-[12px]">Questions {count}</div><div className="mt-3 grid grid-cols-6 gap-1.5">{qs.map((_:any,i:number)=><button key={i} onClick={()=>setIdx(i)} className={`h-8 rounded-full text-[11px] font-black border-2 border-black ${ans[i]!==-1?"bg-[#FFCC00] text-black":"bg-white"} ${idx===i?"ring-2 ring-[#0A1931]":""}`}>{i+1}</button>)}</div></div><div className="md:col-span-9 fiitjee-card p-7"><div className="font-black">Q {idx+1} [{qs[idx].subject}] - {qs[idx].q}</div><div className="mt-5 space-y-2">{qs[idx].options.map((o:string,oi:number)=><button key={oi} onClick={()=>{const na=[...ans]; na[idx]=oi; setAns(na)}} className={`w-full text-left border-2 border-black rounded-xl px-4 py-3 text-[14px] font-bold ${ans[idx]===oi?"bg-[#FFCC00] text-black":"bg-white"}`}>{String.fromCharCode(65+oi)}. {o}</button>)}</div><div className="mt-6 flex justify-between"><button onClick={()=>setIdx(Math.max(0,idx-1))} className="border-2 border-black px-4 py-2 rounded-full text-[12px] font-black">Prev</button><button onClick={()=>setIdx(Math.min(count-1,idx+1))} className="bg-[#0A1931] text-white border-2 border-black px-4 py-2 rounded-full text-[12px] font-black">Next</button></div></div></div></div>)
}
