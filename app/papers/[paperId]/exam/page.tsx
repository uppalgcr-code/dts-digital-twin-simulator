"use client"
import { useState, useEffect } from "react"
import Link from "next/link"
import { makeQuestions, calcAnalysis } from "../../../../lib/data"
export default function Exam({params}:{params:{paperId:string}}){
const isNeet=params.paperId.includes("neet")
const count=isNeet?180:90
const qs=makeQuestions(count)
const [ok,setOk]=useState(false)
const [ck,setCk]=useState(false)
const [idx,setIdx]=useState(0)
const [ans,setAns]=useState<number[]>(Array(count).fill(-1))
const [time,setTime]=useState((isNeet?200:180)*60)
const [done,setDone]=useState(false)
const [analysis,setAnalysis]=useState<any>(null)
useEffect(()=>{const s=localStorage.getItem("dts_student"); if(s){try{const p=JSON.parse(s); if(p.completed&&p.verified) setOk(true)}catch{}} setCk(true)},[])
useEffect(()=>{if(!ok||done) return; const t=setInterval(()=>setTime(v=>{if(v<=1){clearInterval(t); handleSubmit(); return 0} return v-1}),1000); return()=>clearInterval(t)},[ok,done])
function handleSubmit(){
 const result=calcAnalysis(ans, qs, {qs:count})
 setAnalysis(result)
 const all=JSON.parse(localStorage.getItem("dts_all_attempts")||"[]")
 all.push({...result,paperId:params.paperId,createdAt:new Date().toISOString()})
 localStorage.setItem("dts_all_attempts",JSON.stringify(all))
 setDone(true)
}
if(!ck) return <div className="p-6 text-[13px]">Loading your exam...</div>
if(!ok) return <div className="max-w-[720px] mx-auto px-6 py-16 text-center"><h1 className="text-[24px] font-bold">Please login to start</h1><Link href="/auth/student" className="inline-block mt-4 bg-black text-white px-6 py-3 rounded-full text-[13px]">Login with Google or Facebook</Link></div>
if(done && analysis){
 return(
  <div className="max-w-[1280px] mx-auto px-6 py-10">
    <h1 className="text-[32px] font-bold tracking-tight">Your detailed analysis</h1>
    <p className="text-[13px] text-[#6B6B6B] mt-1">Full {count} questions - here's what we found about your performance.</p>
    <div className="mt-8 grid md:grid-cols-4 gap-5">
      <div className="card p-6 bg-black text-white border-black"><div className="text-[11px] text-white/60 tracking-wide font-semibold">YOUR SCORE</div><div className="text-[32px] font-bold mt-1">{analysis.score} / {analysis.total}</div><div className="text-[12px] text-white/60 mt-1">{analysis.correct} correct • {analysis.wrong} wrong</div></div>
      <div className="card p-6"><div className="text-[11px] text-[#9B9B9B] tracking-wide font-semibold">TRUE POTENTIAL</div><div className="text-[28px] font-bold mt-1">{analysis.potential}</div><div className="text-[11px] text-[#6B6B6B]">You left {analysis.potential-analysis.score} marks recoverable</div></div>
      <div className="card p-6 bg-[#FEF3C7] border-[#FDE68A]"><div className="text-[11px] text-[#92400E] tracking-wide font-semibold">EXPECTED RANK</div><div className="text-[18px] font-bold mt-1">{analysis.rank}</div><div className="text-[11px] text-[#92400E]/80">Based on your performance</div></div>
      <div className={`card p-6 ${analysis.shouldCoaching.need?"bg-red-50 border-red-200":"bg-green-50 border-green-200"}`}><div className="text-[11px] font-bold tracking-wide">RECOMMENDATION</div><div className="text-[13px] font-bold mt-2">{analysis.shouldCoaching.type}</div><div className="text-[11px] text-[#6B6B6B] mt-1">{analysis.shouldCoaching.reason}</div><div className="text-[11px] mt-2 font-semibold">{analysis.shouldCoaching.coaching}</div></div>
    </div>
    <div className="mt-8 grid md:grid-cols-2 gap-6">
      <div className="card p-6"><div className="font-semibold">Test-wise analysis</div><div className="mt-4 space-y-2 text-[13px]">{Object.entries(analysis.subWise).map(([sub,data]:any)=><div key={sub} className="flex justify-between border-b border-[#E8E6E1] py-2"><span>{sub}</span><span>{data.c} correct • Score {data.score}</span></div>)}</div></div>
      <div className="card p-6"><div className="font-semibold">What we found</div><div className="mt-4 text-[13px] text-[#6B6B6B] leading-relaxed">Your true capability is {analysis.potential} ±8, but you scored {analysis.score} because of time and strategy. You don't need 20 new chapters. You need to recover {analysis.potential-analysis.score} marks. {analysis.shouldCoaching.coaching} — Potential improvement {analysis.shouldCoaching.improvement}.</div><div className="mt-6 flex gap-2"><Link href="/twin" className="bg-black text-white px-5 py-2.5 rounded-full text-[12px] font-semibold">See your twin</Link><Link href="/papers" className="border border-[#E8E6E1] px-5 py-2.5 rounded-full text-[12px] font-semibold">Practice another</Link></div></div>
    </div>
  </div>
 )
}
const m=Math.floor(time/60); const s=time%60; const answered=ans.filter(a=>a!==-1).length
return(
<div className="max-w-[1440px] mx-auto px-4 py-4">
<div className="sticky top-14 bg-white border border-[#E8E6E1] rounded-full px-5 py-2.5 flex justify-between items-center">
<div className="font-semibold text-[13px]">Question {idx+1} of {count} • {answered}/{count} answered</div>
<div className="flex items-center gap-2"><span className="bg-black text-white px-3 py-1 rounded-full text-[12px] font-semibold">{m}:{s.toString().padStart(2,"0")}</span><button onClick={handleSubmit} className="bg-black text-white px-4 py-1.5 rounded-full text-[12px] font-semibold">Submit paper</button></div>
</div>
<div className="mt-6 grid md:grid-cols-12 gap-5">
<div className="md:col-span-3 card p-4 h-fit max-h-[80vh] overflow-y-auto"><div className="font-semibold text-[12px]">Questions</div><div className="mt-3 grid grid-cols-6 gap-1.5">{qs.map((_:any,i:number)=><button key={i} onClick={()=>setIdx(i)} className={`h-8 rounded-full text-[11px] font-semibold border ${ans[i]!==-1?"bg-black text-white border-black":"bg-white border-[#E8E6E1]"} ${idx===i?"ring-2 ring-black ring-offset-1":""}`}>{i+1}</button>)}</div></div>
<div className="md:col-span-9 card p-7"><div className="flex justify-between"><span className="text-[11px] bg-[#F5F3EF] px-2.5 py-1 rounded-full font-semibold">{qs[idx].subject} • {qs[idx].difficulty}</span><span className="text-[11px] border border-[#E8E6E1] px-2.5 py-1 rounded-full">+4 / -1</span></div><h2 className="mt-4 text-[16px] font-semibold leading-relaxed">{qs[idx].q}</h2><div className="mt-5 space-y-2">{qs[idx].options.map((o:string,oi:number)=><button key={oi} onClick={()=>{const na=[...ans]; na[idx]=oi; setAns(na)}} className={`w-full text-left border rounded-xl px-4 py-3 text-[14px] ${ans[idx]===oi?"bg-black text-white border-black":"bg-white border-[#E8E6E1] hover:border-black"}`}>{String.fromCharCode(65+oi)}. {o}</button>)}</div><div className="mt-6 flex justify-between"><button onClick={()=>setIdx(Math.max(0,idx-1))} className="border border-[#E8E6E1] px-4 py-2 rounded-full text-[12px] font-semibold">Previous</button><button onClick={()=>setIdx(Math.min(count-1,idx+1))} className="bg-black text-white px-4 py-2 rounded-full text-[12px] font-semibold">Next</button></div></div>
</div>
</div>
)
}
