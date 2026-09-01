"use client"
import { useEffect, useState } from "react"
import Link from "next/link"
import { papers } from "../../lib/data"
export default function PapersPage(){
const [ok,setOk]=useState(false)
const [ck,setCk]=useState(false)
useEffect(()=>{const s=localStorage.getItem("dts_student"); if(s){try{const p=JSON.parse(s); if(p.completed&&p.verified) setOk(true)}catch{}} setCk(true)},[])
if(!ck) return <div className="p-6 text-[13px]">Loading your practice papers...</div>
if(!ok) return <div className="max-w-[720px] mx-auto px-6 py-16 text-center"><h1 className="text-[28px] font-bold">Create your profile to start practicing</h1><p className="text-[13px] text-[#6B6B6B] mt-2">We need your school details to give you full papers with personal analysis.</p><Link href="/auth/student" className="inline-block mt-6 bg-black text-white px-6 py-3 rounded-full font-semibold text-[13px]">Create profile</Link></div>
return(
<div className="max-w-[1280px] mx-auto px-6 py-10">
<h1 className="text-[28px] font-bold tracking-tight">Practice papers</h1>
<p className="text-[13px] text-[#6B6B6B] mt-1">Full papers in one go - real pattern, instant feedback, personal twin update.</p>
<div className="mt-8 grid md:grid-cols-3 gap-5">
{papers.map((p:any)=><div key={p.id} className="card p-6"><div className="flex justify-between"><span className="text-[11px] bg-black text-white px-2.5 py-1 rounded-full font-semibold">{p.exam} • {p.year}</span><span className="text-[11px] text-[#9B9B9B]">{p.students.toLocaleString()} practiced</span></div><div className="font-bold mt-4">{p.title}</div><div className="text-[12px] text-[#6B6B6B] mt-1">{p.qs} questions • {p.marks} marks • {p.duration} minutes</div><Link href={`/papers/${p.id}/exam`} className="inline-block mt-5 w-full bg-black text-white py-2.5 rounded-full text-center text-[12px] font-semibold">Start full paper</Link></div>)}
</div>
</div>
)
}
