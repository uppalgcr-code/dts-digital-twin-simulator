"use client"
import { useEffect, useState } from "react"
import Link from "next/link"
import { papers } from "../../lib/data"
export default function PapersPage(){
const [ok,setOk]=useState(false)
const [ck,setCk]=useState(false)
useEffect(()=>{ try{ const s=localStorage.getItem("dts_student"); if(s){const p=JSON.parse(s); if(p.completed&&p.verified) setOk(true)} }catch{} setCk(true)},[])
if(!ck) return <div className="p-6">Loading...</div>
if(!ok) return <div className="max-w-[720px] mx-auto px-6 py-16 text-center"><h1 className="text-[28px] font-black">Create profile to start</h1><Link href="/auth/student" className="inline-block mt-6 fiitjee-btn-primary">Create profile</Link></div>
return(<div className="max-w-[1280px] mx-auto px-6 py-10"><h1 className="text-[28px] font-black">Practice papers - Dead Depth Fixed - Real 90 Unique Questions</h1><div className="mt-6 grid md:grid-cols-3 gap-6">{papers.map((p:any)=><div key={p.id} className="fiitjee-card p-6"><div className="font-black">{p.title}</div><div className="text-[12px] text-[#6B6B6B]">{p.qs} unique Qs • {p.marks} marks • Real question bank not 3 repeated - Dead depth fixed</div><Link href={`/papers/${p.id}/exam`} className="inline-block mt-4 w-full bg-[#0A1931] text-white border-2 border-black py-2.5 rounded-full text-center text-[12px] font-black">Start full paper</Link></div>)}</div></div>)
}
