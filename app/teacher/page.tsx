"use client"
import { useEffect, useState } from "react"
import Link from "next/link"
export default function T(){
const [ok,setOk]=useState(false)
const [ck,setCk]=useState(false)
useEffect(()=>{const s=localStorage.getItem("dts_teacher"); if(s){try{const p=JSON.parse(s); if(p.completed&&p.verified) setOk(true)}catch{}} setCk(true)},[])
if(!ck) return <div className="p-6">Loading...</div>
if(!ok) return <div className="max-w-[720px] mx-auto p-6 text-center"><h1 className="text-[24px] font-bold">Share your teaching profile</h1><Link href="/auth/teacher" className="inline-block mt-4 bg-black text-white px-6 py-3 rounded-full">Create teacher profile</Link></div>
return(<div className="max-w-[1280px] mx-auto px-6 py-10"><h1 className="text-[28px] font-bold">Your teaching profile</h1><div className="mt-6 soft-card p-8"><div className="flex gap-4"><div className="w-14 h-14 bg-black rounded-full flex items-center justify-center text-white font-bold">RS</div><div><div className="font-bold">Rahul Sharma</div><div className="text-[12px] text-[#6B6B6B]">IIT JEE Physics • 10+ years • Ex-Allen Kota</div></div></div><div className="mt-6 grid md:grid-cols-2 gap-4"><div className="bg-[#F5F3EF] rounded-xl p-4 text-[13px]"><b>Experience</b><div>Allen Kota 6 yrs, Resonance 4 yrs</div></div><div className="bg-[#F5F3EF] rounded-xl p-4 text-[13px]"><b>Qualification</b><div>IIT Bombay B.Tech, M.Sc Gold, GATE AIR 45</div></div></div></div></div>)
}
