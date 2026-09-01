"use client"
import { useState, useEffect } from "react"
import Link from "next/link"
import { makeQuestions, calcAnalysis } from "../../../../lib/data"
export default function Exam({params}:{params:{paperId:string}}){
const count=params.paperId.includes("neet")?180:90
const [qs,setQs]=useState<any[]>([])
const [ok,setOk]=useState(false)
const [ck,setCk]=useState(false)
const [idx,setIdx]=useState(0)
const [ans,setAns]=useState<number[]>([])
const [time,setTime]=useState(180*60)
const [done,setDone]=useState(false)
const [analysis,setAnalysis]=useState<any>(null)
useEffect(()=>{ try{ setQs(makeQuestions(count)); setAns(Array(count).fill(-1)); const s=localStorage.getItem("dts_student"); if(s){const p=JSON.parse(s); if(p.completed&&p.verified) setOk(true)} }catch{} setCk(true)},[])
useEffect(()=>{ if(!ok||done) return; const t=setInterval(()=>setTime(v=>{if(v<=1){clearInterval(t); handleSubmit(); return 0} return v-1}),1000); return()=>clearInterval(t)},[ok,done])
function handleSubmit(){
  try{
    const studentData=JSON.parse(localStorage.getItem("dts_student")||"{}")?.form
    const result=calcAnalysis(ans, qs, {qs:count}, studentData)
    setAnalysis(result)
    const all=JSON.parse(localStorage.getItem("dts_all_attempts")||"[]")
    all.push({...result,paperId:params.paperId,createdAt:new Date().toISOString()})
    localStorage.setItem("dts_all_attempts",JSON.stringify(all))
    setDone(true)
  }catch{ alert("Error submitting paper") }
}
if(!ck) return <div className="p-6 text-[13px]">Loading your exam...</div>
if(!ok) return <div className="max-w-[720px] mx-auto px-6 py-16 text-center"><h1 className="text-[24px] font-black">Please login to start</h1><Link href="/auth/student" className="inline-block mt-4 btn-primary">Login with Google or Facebook</Link></div>
if(done && analysis){
 return(
  <div className="max-w-[1280px] mx-auto px-6 py-10">
    <h1 className="text-[32px] font-black">Your detailed analysis</h1>
    <p className="text-[13px] text-[#6B6B6B] mt-1">You completed {count} questions - here is what we found about your performance.</p>
    <div className="mt-8 grid md:grid-cols-4 gap-5">
      <div className="card-navy p-6"><div className="text-[11px] text-white/60 font-bold tracking-wide">YOUR SCORE</div><div className="text-[32px] font-black mt-1">{analysis.score} / {analysis.total}</div><div className="text-[12px] text-white/60 mt-1">{analysis.correct} correct • {analysis.wrong} wrong</div></div>
      <div className="card-yellow p-6"><div className="text-[11px] font-black tracking-wide">TRUE POTENTIAL</div><div className="text-[28px] font-black mt-1">{analysis.potential}</div><div className="text-[11px]">You left {analysis.potential-analysis.score} marks that you can get back</div></div>
      <div className="card p-6"><div className="text-[11px] font-black tracking-wide">EXPECTED RANK</div><div className="text-[18px] font-black mt-1">{analysis.rank}</div><div className="text-[11px] text-[#6B6B6B]">Based on your performance</div></div>
      <div className={`card p-6 ${analysis.shouldCoaching.need?"bg-[#FFEBEE] border-[#C62828]":"bg-[#E8F5E9] border-[#2E7D32]"}`}><div className="text-[11px] font-black tracking-wide">RECOMMENDATION</div><div className="text-[13px] font-black mt-2">{analysis.shouldCoaching.type}</div><div className="text-[11px] text-[#6B6B6B] mt-1">{analysis.shouldCoaching.reason}</div><div className="text-[11px] mt-2 font-bold">{analysis.shouldCoaching.coaching}</div></div>
    </div>
    <div className="mt-8 grid md:grid-cols-2 gap-6">
      <div className="card p-6"><div className="font-black">How you did by subject</div><div className="mt-4 space-y-2 text-[13px]">{Object.entries(analysis.subWise).map(([sub,data]:any)=><div key={sub} className="flex justify-between border-b py-2"><span>{sub}</span><span>{data.c} correct • Score {data.score}</span></div>)}</div></div>
      <div className="card p-6"><div className="font-black">What we recommend</div><div className="mt-4 text-[13px] text-[#6B6B6B] leading-relaxed">Your true capability is {analysis.potential}, but you scored {analysis.score}. You don't need 20 new chapters. You need to recover {analysis.potential-analysis.score} marks. {analysis.shouldCoaching.coaching} — {analysis.shouldCoaching.improvement}.</div><div className="mt-6 flex gap-2"><Link href="/twin" className="btn-navy text-[12px] py-2.5">See your twin</Link><Link href="/papers" className="btn-primary text-[12px] py-2.5">Practice another</Link></div></div>
    </div>
  </div>
 )
}
const m=Math.floor(time/60); const s=time%60; const answered=ans.filter(a=>a!==-1).length
return(
<div className="max-w-[1440px] mx-auto px-4 py-4">
<div className="sticky top-16 bg-[#0A1931] text-white border-2 border-black rounded-full px-5 py-2.5 flex justify-between items-center shadow-[4px_4px_0px_0px_black]">
<div className="font-bold text-[13px]">Question {idx+1} of {count} • {answered} of {count} answered</div>
<div className="flex items-center gap-2"><span className="bg-[#FFCC00] text-black border-2 border-black px-3 py-1 rounded-full text-[12px] font-black">{m}:{s.toString().padStart(2,"0")}</span><button onClick={handleSubmit} className="bg-white text-black border-2 border-black px-4 py-1.5 rounded-full text-[12px] font-black">Submit paper</button></div>
</div>
<div className="mt-6 grid md:grid-cols-12 gap-5">
<div className="md:col-span-3 card p-4 h-fit max-h-[80vh] overflow-y-auto"><div className="font-black text-[12px]">Questions</div><div className="mt-3 grid grid-cols-6 gap-1.5">{qs.map((_:any,i:number)=><button key={i} onClick={()=>setIdx(i)} className={`h-8 rounded-full text-[11px] font-black border-2 border-black ${ans[i]!==-1?"bg-[#FFCC00] text-black":"bg-white"} ${idx===i?"ring-2 ring-[#0A1931]":""}`}>{i+1}</button>)}</div></div>
<div className="md:col-span-9 card p-7"><div className="flex justify-between"><span className="text-[11px] bg-[#FFFBEB] border-2 border-black px-2.5 py-1 rounded-full font-bold">{qs[idx]?.subject} • {qs[idx]?.difficulty}</span><span className="text-[11px] border-2 border-black px-2.5 py-1 rounded-full font-bold">+4 / -1</span></div><h2 className="mt-4 text-[16px] font-bold leading-relaxed">{qs[idx]?.q}</h2><div className="mt-5 space-y-2">{qs[idx]?.options.map((o:string,oi:number)=><button key={oi} onClick={()=>{const na=[...ans]; na[idx]=oi; setAns(na)}} className={`w-full text-left border-2 border-black rounded-xl px-4 py-3 text-[14px] font-bold ${ans[idx]===oi?"bg-[#FFCC00] text-black":"bg-white"}`}>{String.fromCharCode(65+oi)}. {o}</button>)}</div><div className="mt-6 flex justify-between"><button onClick={()=>setIdx(Math.max(0,idx-1))} className="border-2 border-black px-4 py-2 rounded-full text-[12px] font-black">Previous</button><button onClick={()=>setIdx(Math.min(count-1,idx+1))} className="bg-[#0A1931] text-white border-2 border-black px-4 py-2 rounded-full text-[12px] font-black">Next</button></div></div>
</div>
</div>
)
}
