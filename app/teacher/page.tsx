"use client"
import { useEffect, useState } from "react"
import Link from "next/link"
export default function Teacher(){
const [ok,setOk]=useState(false)
const [ck,setCk]=useState(false)
useEffect(()=>{ try{ const s=localStorage.getItem("dts_teacher"); if(s){const p=JSON.parse(s); if(p.completed&&p.verified) setOk(true)} }catch{} setCk(true)},[])
if(!ck) return <div className="p-6 text-[13px]">Loading...</div>
if(!ok) return <div className="max-w-[720px] mx-auto px-6 py-16 text-center"><h1 className="text-[24px] font-black">Create your teacher profile to continue</h1><Link href="/auth/teacher" className="inline-block mt-6 btn-primary">Create teacher profile</Link></div>
return(<div className="max-w-[1280px] mx-auto px-6 py-10"><h1 className="text-[28px] font-black">Your teaching profile</h1><p className="text-[13px] text-[#6B6B6B] mt-1">Your experience, qualification and how students can connect with you.</p><div className="mt-6 card p-8"><div className="flex gap-4"><div className="w-14 h-14 bg-[#0A1931] border-2 border-black rounded-full flex items-center justify-center text-white font-black">RS</div><div><div className="font-black">Teaching profile active</div><div className="text-[12px] text-[#6B6B6B]">Your profile is visible to students</div></div></div></div></div>)
}
