"use client"
import { useEffect, useState } from "react"
import Link from "next/link"
export default function Teacher(){
const [ok,setOk]=useState(false)
const [ck,setCk]=useState(false)
useEffect(()=>{const s=localStorage.getItem("dts_teacher"); if(s){try{const p=JSON.parse(s); if(p.completed&&p.verified) setOk(true)}catch{}} setCk(true)},[])
if(!ck) return <div className="p-6 text-[13px]">Loading...</div>
if(!ok) return <div className="max-w-[720px] mx-auto px-6 py-16 text-center"><h1 className="text-[24px] font-bold">Create your teacher profile to continue</h1><Link href="/auth/teacher" className="inline-block mt-6 bg-black text-white px-6 py-3 rounded-full text-[13px]">Create teacher profile</Link></div>
return(<div className="max-w-[1280px] mx-auto px-6 py-10"><h1 className="text-[28px] font-bold">Your teaching profile</h1><p className="text-[13px] text-[#6B6B6B] mt-1">Your experience, qualification and how students can connect with you.</p><div className="mt-6 card p-8"><div className="flex gap-4"><div className="w-14 h-14 bg-black rounded-full flex items-center justify-center text-white font-bold">RS</div><div><div className="font-bold">Rahul Sharma</div><div className="text-[12px] text-[#6B6B6B]">IIT JEE Physics • 10+ years • Ex-Allen Kota</div></div></div><div className="mt-6 grid md:grid-cols-2 gap-4 text-[13px]"><div className="bg-[#F5F3EF] rounded-xl p-4"><b>Experience</b><div className="mt-1 text-[#6B6B6B]">Allen Kota 6 years, Resonance 4 years - 200+ selections</div></div><div className="bg-[#F5F3EF] rounded-xl p-4"><b>Qualification</b><div className="mt-1 text-[#6B6B6B]">B.Tech IIT Bombay, M.Sc Gold Medal, GATE AIR 45</div></div></div></div></div>)
}
