"use client"
import { useEffect, useState } from "react"
import Link from "next/link"
import { papersData } from "../../lib/data"
export default function P(){
const [ok,setOk]=useState(false)
const [ck,setCk]=useState(false)
useEffect(()=>{const s=localStorage.getItem("dts_student"); if(s){try{const p=JSON.parse(s); if(p.completed&&p.verified) setOk(true)}catch{}} setCk(true)},[])
if(!ck) return <div className="p-6">Loading...</div>
if(!ok) return <div className="max-w-[720px] mx-auto px-6 py-16 text-center"><h1 className="text-[28px] font-bold">Create your profile to start practicing</h1><p className="text-[13px] text-[#6B6B6B] mt-2">We need your school details to give you full papers with personal analysis.</p><Link href="/auth/student" className="inline-block mt-6 bg-black text-white px-6 py-3 rounded-full font-semibold">Create profile</Link></div>
return(<div className="max-w-[1280px] mx-auto px-6 py-10"><h1 className="text-[28px] font-bold">Practice papers - full papers in one go</h1><div className="mt-6 grid md:grid-cols-3 gap-5">{papersData.map((p:any)=><div key={p.id} className="soft-card p-6"><div className="font-bold">{p.title}</div><div className="text-[12px] text-[#6B6B6B]">{p.qs} questions • {p.marks} marks • {p.duration} min</div><div className="mt-4 flex gap-2"><Link href={`/papers/${p.id}`} className="flex-1 border py-2 rounded-full text-center text-[12px] font-semibold">Details</Link><Link href={`/papers/${p.id}/exam`} className="flex-1 bg-black text-white py-2 rounded-full text-center text-[12px] font-semibold">Start full paper</Link></div></div>)}</div></div>)
}
