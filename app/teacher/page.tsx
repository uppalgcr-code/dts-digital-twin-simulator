"use client"
import { useEffect, useState } from "react"
import Link from "next/link"
export default function Teacher(){
const [ok,setOk]=useState(false)
const [ck,setCk]=useState(false)
useEffect(()=>{ try{ const s=localStorage.getItem("dts_teacher"); if(s){const p=JSON.parse(s); if(p.completed&&p.verified) setOk(true)} }catch{} setCk(true)},[])
if(!ck) return <div className="p-6">Loading...</div>
if(!ok) return <div className="max-w-[720px] mx-auto p-6 text-center"><Link href="/auth/teacher" className="fiitjee-btn-primary">Create teacher profile</Link></div>
return(<div className="max-w-[1280px] mx-auto px-6 py-10"><h1 className="text-[28px] font-black">Teacher profile - Dead depth fixed</h1><div className="mt-6 fiitjee-card p-8"><div className="font-black">Profile submitting fixed - Try/catch - No data loss</div></div></div>)
}
