"use client"
import { useEffect, useState } from "react"
import Link from "next/link"
export default function P(){
const [f,setF]=useState<any>(null)
const [ck,setCk]=useState(false)
useEffect(()=>{const s=localStorage.getItem("dts_student"); if(s){try{setF(JSON.parse(s).form)}catch{}} setCk(true)},[])
if(!ck) return <div className="p-6">Loading...</div>
if(!f) return <div className="max-w-[720px] mx-auto p-6 text-center"><Link href="/auth/student" className="bg-black text-white px-6 py-3 rounded-full">Create profile</Link></div>
return(<div className="max-w-[1280px] mx-auto px-6 py-10"><div className="soft-card p-8"><h1 className="text-[24px] font-bold">{f.name}</h1><p className="text-[13px] text-[#6B6B6B]">{f.school} • {f.city} • {f.address}</p><p className="text-[12px] text-[#9B9B9B]">Parent {f.parentName} {f.parentPhone} • Instagram {f.insta||"uppal_gaurav"} works • Facebook {f.fb||"gaurav.uppal.16"} works</p><div className="mt-6 flex gap-3"><Link href="/papers" className="bg-black text-white px-5 py-2.5 rounded-full text-[13px]">Practice full papers</Link><Link href="/twin" className="border px-5 py-2.5 rounded-full text-[13px]">See twin</Link></div></div></div>)
}
