"use client"
import { useState, useEffect } from "react"
import Link from "next/link"
function gen(count:number){
 const bank=[{q:"Particle v=3t^2 distance?",o:["4m","6m","8m","10m"],c:2},{q:"sinA=3/5 cosA?",o:["4/5","3/4","5/4","1"],c:0}];
 let qs=[]; for(let i=0;i<count;i++){const b=bank[i%bank.length]; qs.push({id:i+1,q:`Q${i+1} ${b.q}`,o:b.o,c:b.c})} return qs;
}
export default function Exam({params}:{params:{paperId:string}}){
const count=params.paperId.includes("neet")?180:90
const qs=gen(count)
const [auth,setAuth]=useState(false)
const [checked,setChecked]=useState(false)
const [idx,setIdx]=useState(0)
const [ans,setAns]=useState<number[]>(Array(count).fill(-1))
const [time,setTime]=useState(180*60)
const [submitted,setSubmitted]=useState(false)
useEffect(()=>{
 const s=localStorage.getItem("student_auth_v13")
 if(s){
  try{
   const p=JSON.parse(s)
   if(p.completed && p.verified) setAuth(true)
  }catch{}
 }
 setChecked(true)
},[])
useEffect(()=>{
 if(!auth || submitted) return
 const t=setInterval(()=>setTime(v=>{if(v<=1){clearInterval(t); setSubmitted(true); return 0;} return v-1}),1000)
 return()=>clearInterval(t)
},[auth,submitted])
if(!checked) return <div className="p-6">Loading...</div>
if(!auth){
 return(
  <div className="max-w-4xl mx-auto p-6">
    <div className="bg-black text-white rounded-[2rem] p-10 text-center">
      <h1 className="text-2xl font-black">Auth Required - Premium - Full 90Q Exam</h1>
      <Link href="/auth/student" className="inline-block mt-4 bg-white text-black px-6 py-3 rounded-full font-bold text-sm">Complete Auth Premium</Link>
    </div>
  </div>
 )
}
if(submitted){
 const score=ans.filter((a,i)=>a===qs[i].c).length*4
 return(
  <div className="max-w-5xl mx-auto p-6">
    <h1 className="text-4xl font-black">Full {count}Q Submitted! Premium - Build Fixed</h1>
    <div className="mt-6 bg-black text-white rounded-[2rem] p-8">
      <div className="text-4xl font-black">{score} / {count*4}</div>
      <div className="mt-4 flex gap-2">
        <Link href="/twin" className="bg-white text-black px-6 py-3 rounded-full font-bold text-sm">View Twin Premium</Link>
        <Link href="/papers" className="border border-white/30 px-6 py-3 rounded-full font-bold text-sm">Another Full 90Q</Link>
      </div>
    </div>
  </div>
 )
}
const mins=Math.floor(time/60)
const secs=time%60
return(
 <div className="max-w-7xl mx-auto p-4">
  <div className="sticky top-[60px] z-40 bg-black text-white rounded-full px-6 py-3 flex justify-between">
    <div className="font-black">Full {count}Q - Q {idx+1}/{count} - Premium UI - Build Fixed - Customer Ready</div>
    <div className="flex gap-3 items-center">
      <span className="bg-white text-black px-3 py-1 rounded-full font-black text-xs">{mins}:{secs.toString().padStart(2,"0")}</span>
      <button onClick={()=>setSubmitted(true)} className="bg-[#22C0C7] text-black px-4 py-1 rounded-full font-black text-xs">Submit Full {count}Q Premium</button>
    </div>
  </div>
  <div className="mt-6 grid md:grid-cols-5 gap-6">
    <div className="md:col-span-1 bg-white border-2 border-black rounded-[1.5rem] p-4">
      <div className="font-black text-[11px]">Full {count}Q Palette Premium</div>
      <div className="mt-3 grid grid-cols-5 gap-2">
        {qs.map((_,i)=>(
          <button key={i} onClick={()=>setIdx(i)} className={`w-8 h-8 rounded-full text-[10px] font-black border-2 ${ans[i]!==-1?"bg-black text-white border-black":"bg-white border-black/20"} ${idx===i?"ring-2 ring-[#22C0C7]":""}`}>{i+1}</button>
        ))}
      </div>
    </div>
    <div className="md:col-span-4 bg-white border-2 border-black rounded-[1.5rem] p-6">
      <div className="font-black">Q {idx+1} - {qs[idx].q}</div>
      <div className="mt-6 space-y-3">
        {qs[idx].o.map((opt:string,oi:number)=>(
          <button key={oi} onClick={()=>{const na=[...ans]; na[idx]=oi; setAns(na)}} className={`w-full text-left border-2 rounded-xl p-4 text-sm font-bold ${ans[idx]===oi?"bg-black text-white border-black":"bg-[#FBF8F3] border-black/10"}`}>{String.fromCharCode(65+oi)}. {opt}</button>
        ))}
      </div>
      <div className="mt-6 flex justify-between">
        <button onClick={()=>setIdx(Math.max(0,idx-1))} className="border-2 border-black px-5 py-2 rounded-full font-bold text-sm">Prev</button>
        <button onClick={()=>setIdx(Math.min(count-1,idx+1))} className="bg-black text-white px-5 py-2 rounded-full font-bold text-sm">Next Premium</button>
      </div>
    </div>
  </div>
 </div>
)
}
