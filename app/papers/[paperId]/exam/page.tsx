"use client"
import { useState, useEffect } from "react"
import Link from "next/link"
import { makeQuestions } from "../../../../lib/data"
export default function E({params}:{params:{paperId:string}}){
const count=90
const qs=makeQuestions(count)
const [ok,setOk]=useState(false)
const [ck,setCk]=useState(false)
const [idx,setIdx]=useState(0)
const [ans,setAns]=useState<number[]>(Array(count).fill(-1))
const [time,setTime]=useState(180*60)
const [done,setDone]=useState(false)
useEffect(()=>{const s=localStorage.getItem("dts_student"); if(s){try{const p=JSON.parse(s); if(p.completed&&p.verified) setOk(true)}catch{}} setCk(true)},[])
useEffect(()=>{if(!ok||done) return; const t=setInterval(()=>setTime(v=>{if(v<=1){clearInterval(t); setDone(true); return 0} return v-1}),1000); return()=>clearInterval(t)},[ok,done])
if(!ck) return <div className="p-6">Loading...</div>
if(!ok) return <div className="max-w-[720px] mx-auto p-6 text-center"><h1 className="text-[24px] font-bold">Create profile to start</h1><Link href="/auth/student" className="inline-block mt-4 bg-black text-white px-6 py-3 rounded-full">Create profile</Link></div>
if(done){const sc=ans.filter((a,i)=>a===qs[i].correct).length*4; return(<div className="max-w-[960px] mx-auto px-6 py-10"><h1 className="text-[32px] font-bold">Finished {count} questions!</h1><div className="mt-6 soft-card p-8 bg-black text-white"><div className="text-[36px] font-bold">{sc} / {count*4}</div></div><div className="mt-6 flex gap-3"><Link href="/twin" className="bg-black text-white px-6 py-3 rounded-full">See your twin</Link><Link href="/papers" className="border px-6 py-3 rounded-full">Another paper</Link></div></div>)}
const m=Math.floor(time/60); const s=time%60; const answered=ans.filter(a=>a!==-1).length
return(<div className="max-w-[1440px] mx-auto px-4 py-4"><div className="sticky top-14 bg-white border rounded-full px-5 py-2.5 flex justify-between"><div className="font-semibold text-[13px]">Q {idx+1}/{count} • {answered}/{count} answered</div><div className="flex gap-2"><span className="bg-black text-white px-3 py-1 rounded-full text-[12px]">{m}:{s.toString().padStart(2,"0")}</span><button onClick={()=>setDone(true)} className="bg-black text-white px-4 py-1 rounded-full text-[12px]">Submit</button></div></div><div className="mt-6 grid md:grid-cols-12 gap-5"><div className="md:col-span-3 soft-card p-4 h-fit"><div className="font-semibold text-[12px]">Questions {count}</div><div className="mt-3 grid grid-cols-6 gap-1.5">{qs.map((_:any,i:number)=><button key={i} onClick={()=>setIdx(i)} className={`h-8 rounded-full text-[11px] font-semibold border ${ans[i]!==-1?"bg-black text-white":"bg-white"} ${idx===i?"ring-2 ring-black":""}`}>{i+1}</button>)}</div></div><div className="md:col-span-9 soft-card p-7"><div className="font-semibold">Q {idx+1} - {qs[idx].q}</div><div className="mt-5 space-y-2">{qs[idx].options.map((o:string,oi:number)=><button key={oi} onClick={()=>{const na=[...ans]; na[idx]=oi; setAns(na)}} className={`w-full text-left border rounded-xl px-4 py-3 text-[14px] ${ans[idx]===oi?"bg-black text-white":"bg-white"}`}>{String.fromCharCode(65+oi)}. {o}</button>)}</div><div className="mt-6 flex justify-between"><button onClick={()=>setIdx(Math.max(0,idx-1))} className="border px-4 py-2 rounded-full text-[12px]">Prev</button><button onClick={()=>setIdx(Math.min(count-1,idx+1))} className="bg-black text-white px-4 py-2 rounded-full text-[12px]">Next</button></div></div></div></div>)
}
