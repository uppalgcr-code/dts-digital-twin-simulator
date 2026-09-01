"use client"
import { useEffect, useState } from "react"
import Link from "next/link"
import { papers } from "../../lib/papers"
export default function Papers(){
const [auth,setAuth]=useState(false)
const [checked,setChecked]=useState(false)
useEffect(()=>{const s=localStorage.getItem("student_auth_v13"); if(s){try{const p=JSON.parse(s); if(p.completed && p.verified) setAuth(true);}catch{}} setChecked(true)},[])
if(!checked) return <div className="p-6">Checking authentication...</div>
if(!auth){
return(<div className="max-w-4xl mx-auto p-6"><div className="bg-red-50 border-2 border-red-500 rounded-[1.5rem] p-8 text-center"><div className="text-4xl">🔒</div><h1 className="text-2xl font-black mt-3">Authentication Required - Cannot Access Papers Directly</h1><p className="text-sm opacity-70 mt-2 max-w-xl mx-auto">As per your requirement: Student must login with complete details and antecedents (School, Address, Contact, Parent Contact) before giving exam. Direct access to /papers is blocked without auth.</p><div className="mt-6 flex gap-3 justify-center"><Link href="/auth/student" className="bg-black text-white px-6 py-3 rounded-full font-bold text-sm">Complete Student Details + Login → Can Give Full 90Q Exam</Link><Link href="/" className="border px-6 py-3 rounded-full font-bold text-sm">Go Home</Link></div></div></div>)
}
return(<div className="max-w-6xl mx-auto p-6"><div className="flex justify-between items-center"><h1 className="text-3xl font-black">6 Years Real Papers - Full 90 Qs in 1 Go - Authenticated ✓</h1><span className="bg-green-500 text-white px-3 py-1 rounded-full text-xs font-bold">✓ Student Verified - Full Access</span></div><p className="text-[11px] opacity-60 mt-2">Full 90 Questions per JEE paper (360 marks, 180 min) in 1 go - Not 5. NEET 200 Qs. All real pattern. Click Give Full Exam.</p><div className="mt-6 grid md:grid-cols-3 gap-4">{papers.map((p:any)=><div key={p.id} className="bg-white border-2 border-black rounded-[1.5rem] p-5 shadow-[4px_4px_0px_0px_black]"><div className="flex justify-between"><span className="text-[10px] bg-black text-white px-2 py-1 rounded-full font-bold">{p.exam}</span><span className="text-[10px] opacity-60">{p.year} • {p.qs} Qs Full</span></div><div className="mt-3 font-black">{p.title}</div><div className="text-[11px] opacity-60 mt-1">{p.qs} Questions • {p.totalMarks} Marks • {p.duration} min • {p.subject} - Full paper in 1 go</div><div className="mt-4 flex gap-2"><Link href={`/papers/${p.id}`} className="flex-1 border px-3 py-2 rounded-full text-xs font-bold text-center">Details</Link><Link href={`/papers/${p.id}/exam`} className="flex-1 bg-black text-white px-3 py-2 rounded-full text-xs font-bold text-center">Give Full {p.qs}Q Exam ✓ →</Link></div></div>)}</div></div>)
}
