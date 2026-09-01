"use client"
import { useEffect, useState } from "react"
import Link from "next/link"
import { papers } from "../../lib/data"
export default function PapersPage(){
const [ok,setOk]=useState(false)
const [ck,setCk]=useState(false)
useEffect(()=>{const s=localStorage.getItem("dts_student"); if(s){try{const p=JSON.parse(s); if(p.completed&&p.verified) setOk(true)}catch{}} setCk(true)},[])
if(!ck) return <div className="p-6">Loading...</div>
if(!ok) return <div className="max-w-[720px] mx-auto px-6 py-16 text-center"><h1 className="text-[28px] font-black">Create profile to start</h1><Link href="/auth/student" className="inline-block mt-6 fiitjee-btn-primary">Create profile</Link></div>
return(<div className="max-w-[1280px] mx-auto px-6 py-10"><h1 className="text-[28px] font-black">Practice papers - FIITJEE colors</h1><div className="mt-6 grid md:grid-cols-3 gap-6">{papers.map((p:any)=><div key={p.id} className="fiitjee-card p-6"><div className="flex justify-between"><span className="text-[11px] bg-[#FFCC00] border-2 border-black px-2.5 py-1 rounded-full font-black">{p.exam} • {p.year}</span><span className="text-[11px]">{p.students} practiced</span></div><div className="font-black mt-4">{p.title}</div><div className="text-[12px] text-[#6B6B6B]">{p.qs} Qs • {p.marks} marks • {p.duration} min</div><Link href={`/papers/${p.id}/exam`} className="inline-block mt-4 w-full bg-[#0A1931] text-white border-2 border-black py-2.5 rounded-full text-center text-[12px] font-black shadow-[3px_3px_0px_0px_black]">Start full paper</Link></div>)}</div></div>)
}
