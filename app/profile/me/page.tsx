"use client"
import { useEffect, useState } from "react"
import Link from "next/link"
export default function MyProfile(){
const [f,setF]=useState<any>(null)
const [ck,setCk]=useState(false)
useEffect(()=>{const s=localStorage.getItem("dts_student"); if(s){try{setF(JSON.parse(s).form)}catch{}} setCk(true)},[])
if(!ck) return <div className="p-6">Loading...</div>
if(!f) return <div className="max-w-[720px] mx-auto p-6 text-center"><Link href="/auth/student" className="fiitjee-btn-primary">Login</Link></div>
return(<div className="max-w-[1280px] mx-auto px-6 py-10"><div className="fiitjee-card p-8 flex justify-between"><div className="flex gap-4"><div className="w-14 h-14 bg-[#FFCC00] border-2 border-black rounded-full flex items-center justify-center font-black">{f.name?f.name[0]:"G"}</div><div><h1 className="text-[22px] font-black">{f.name}</h1><p className="text-[13px] text-[#6B6B6B]">{f.school} • {f.city}</p></div></div><span className="text-[11px] bg-[#FFCC00] border-2 border-black px-3 py-1 rounded-full font-black">Logged in via {f.provider}</span></div><div className="mt-6 flex gap-3"><Link href="/papers" className="fiitjee-btn-primary">Practice full paper</Link><Link href="/dashboard" className="fiitjee-btn-navy">Download data</Link></div></div>)
}
