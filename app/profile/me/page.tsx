"use client"
import { useEffect, useState } from "react"
import Link from "next/link"
export default function MyProfile(){
const [f,setF]=useState<any>(null)
const [ck,setCk]=useState(false)
useEffect(()=>{ try{ const s=localStorage.getItem("dts_student"); if(s){setF(JSON.parse(s).form)} }catch{} setCk(true)},[])
if(!ck) return <div className="p-6 text-[13px]">Loading your profile...</div>
if(!f) return <div className="max-w-[720px] mx-auto px-6 py-16 text-center"><h1 className="text-[24px] font-black">Please login to see your profile</h1><Link href="/auth/student" className="inline-block mt-4 btn-primary">Login with Google or Facebook</Link></div>
return(
<div className="max-w-[1280px] mx-auto px-6 py-10">
<div className="card p-8 flex justify-between items-start"><div className="flex gap-4"><div className="w-14 h-14 bg-[#FFCC00] border-2 border-black rounded-full flex items-center justify-center font-black text-[18px]">{f.name?f.name[0]:"G"}</div><div><h1 className="text-[22px] font-black">{f.name}</h1><p className="text-[13px] text-[#6B6B6B] mt-1">{f.school} • {f.city} • {f.address}</p><p className="text-[12px] text-[#9B9B9B] mt-1">Parent: {f.parentName} • {f.parentPhone}</p></div></div><span className="text-[11px] bg-[#FFCC00] border-2 border-black px-3 py-1 rounded-full font-black">Logged in via {f.provider||"Google"}</span></div>
<div className="mt-6 grid md:grid-cols-3 gap-6">
<div className="md:col-span-2 card p-8"><h3 className="font-black">Your details</h3><div className="mt-4 grid md:grid-cols-2 gap-3 text-[13px]"><div className="bg-[#FFFBEB] border-2 border-black rounded-xl p-3"><div className="text-[11px] font-bold">SCHOOL</div><div className="font-bold mt-1">{f.school} • Class {f.className} • Roll {f.rollNo}</div></div><div className="bg-[#FFFBEB] border-2 border-black rounded-xl p-3"><div className="text-[11px] font-bold">CONTACT</div><div className="font-bold mt-1">{f.city} • {f.phone}</div><div className="text-[12px] text-[#6B6B6B]">{f.address}</div></div><div className="bg-[#FFFBEB] border-2 border-black rounded-xl p-3"><div className="text-[11px] font-bold">PARENT</div><div className="font-bold mt-1">{f.parentName}</div><div className="text-[12px] text-[#6B6B6B]">{f.parentPhone} • {f.email}</div></div></div><div className="mt-6 flex gap-3"><Link href="/papers" className="btn-primary text-[13px] py-2.5">Practice full paper</Link><Link href="/dashboard" className="btn-navy text-[13px] py-2.5">Download data</Link></div></div>
<div className="space-y-4"><div className="card-navy p-6"><div className="font-black text-[14px] text-[#FFCC00]">Ready to practice?</div><div className="text-[12px] text-white/70 mt-2">Full 90 questions in one go, 360 marks, 180 minutes. Your personal twin updates after each paper.</div><Link href="/papers/jee-2024-p1/exam" className="inline-block mt-4 bg-[#FFCC00] text-black border-2 border-black px-5 py-2.5 rounded-full text-[12px] font-black">Start full paper now</Link></div></div>
</div>
</div>
)
}
