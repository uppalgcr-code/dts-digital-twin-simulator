"use client"
import { useEffect, useState } from "react"
import Link from "next/link"
export default function Teacher(){
const [ok,setOk]=useState(false)
const [ck,setCk]=useState(false)
useEffect(()=>{const s=localStorage.getItem("dts_teacher"); if(s){try{const p=JSON.parse(s); if(p.completed&&p.verified) setOk(true)}catch{}} setCk(true)},[])
if(!ck) return <div className="p-6">Loading...</div>
if(!ok) return <div className="max-w-[720px] mx-auto p-6 text-center"><Link href="/auth/teacher" className="fiitjee-btn-primary">Create teacher profile</Link></div>
return(<div className="max-w-[1280px] mx-auto px-6 py-10"><h1 className="text-[28px] font-black">Your teaching profile - FIITJEE colors</h1><div className="mt-6 fiitjee-card p-8"><div className="font-black">Rahul Sharma • IIT JEE Physics • 10+ years</div><div className="text-[13px] text-[#6B6B6B] mt-2">Allen Kota 6 years, Resonance 4 years</div></div></div>)
}
