"use client"
import { useEffect, useState } from "react"
import Link from "next/link"
export default function Papers(){
const [ok,setOk]=useState(false)
const [ck,setCk]=useState(false)
useEffect(()=>{const s=localStorage.getItem("dts_student"); if(s){try{const p=JSON.parse(s); if(p.completed&&p.verified) setOk(true)}catch{}} setCk(true)},[])
if(!ck) return <div className="p-6">Loading papers...</div>
if(!ok) return <div className="max-w-[720px] mx-auto px-6 py-16 text-center"><h1 className="text-[28px] font-bold">Create profile to practice</h1><p className="text-[13px] text-[#6B6B6B] mt-2">Login via Google/FB to start full 90 questions practice</p><Link href="/auth/student" className="inline-block mt-6 bg-black text-white px-6 py-3 rounded-full">Login via Google/FB</Link></div>
return(
<div className="max-w-[1280px] mx-auto px-6 py-10">
<h1 className="text-[28px] font-bold">Practice papers - full papers in one go</h1>
<div className="mt-6 grid md:grid-cols-3 gap-5">
{[{id:"jee-2024-p1",title:"JEE Main 2024",qs:90,marks:360,dur:180},{id:"jee-2023-p1",title:"JEE Main 2023",qs:90,marks:360,dur:180},{id:"jee-2019-p1",title:"JEE Main 2019",qs:90,marks:360,dur:180},{id:"neet-2024",title:"NEET 2024",qs:180,marks:720,dur:200}].map((p:any)=><div key={p.id} className="soft-card p-6"><div className="font-bold">{p.title}</div><div className="text-[12px] text-[#6B6B6B]">{p.qs} Qs • {p.marks} marks • {p.dur} min • Full paper in one go</div><div className="mt-4 flex gap-2"><Link href={`/papers/${p.id}/exam`} className="flex-1 bg-black text-white py-2.5 rounded-full text-center text-[12px] font-semibold">Start full {p.qs}Q paper</Link></div></div>)}
</div>
</div>
)
}
