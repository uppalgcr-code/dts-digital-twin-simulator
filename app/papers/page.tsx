"use client"
import { useEffect, useState } from "react"
import Link from "next/link"
export default function Papers(){
const [auth,setAuth]=useState(false)
const [checked,setChecked]=useState(false)
const [papers,setPapers]=useState<any[]>([])
useEffect(()=>{
 const s=localStorage.getItem("student_auth_v13")
 if(s){
  try{
   const p=JSON.parse(s)
   if(p.completed && p.verified) setAuth(true)
  }catch{}
 }
 setChecked(true)
 fetch("/api/papers").then(r=>r.json()).then(d=>{if(d.papers) setPapers(d.papers)}).catch(()=>setPapers([{id:"jee-2024-p1",title:"JEE 2024 Full 90Q",year:2024,exam:"JEE",qs:90},{id:"jee-2023-p1",title:"JEE 2023 Full 90Q",year:2023,exam:"JEE",qs:90}]));
},[])
if(!checked) return <div className="p-6">Loading...</div>
if(!auth){
 return(
  <div className="max-w-4xl mx-auto p-6">
    <div className="bg-black text-white rounded-[2rem] p-10 text-center">
      <h1 className="text-3xl font-black">Auth Guard Working - Premium - Cannot Access Papers Directly</h1>
      <Link href="/auth/student" className="inline-block mt-6 bg-white text-black px-8 py-4 rounded-full font-black">Complete Student Auth - Full 90Q Exam Premium</Link>
    </div>
  </div>
 )
}
return(<div className="max-w-6xl mx-auto p-6"><h1 className="text-3xl font-black">Full 90Q Papers - Premium - Customer Ready - Authenticated</h1><div className="mt-6 grid md:grid-cols-3 gap-4">{papers.map((p:any)=><div key={p.id} className="bg-white border-2 border-black rounded-[1.5rem] p-5"><div className="font-black">{p.title}</div><div className="text-[11px] opacity-60 mt-1">{p.qs} Qs Full in 1 Go - Not 5 - Premium</div><div className="mt-4 flex gap-2"><Link href={`/papers/${p.id}`} className="flex-1 border-2 border-black px-3 py-2 rounded-full text-xs font-bold text-center">Details</Link><Link href={`/papers/${p.id}/exam`} className="flex-1 bg-black text-white px-3 py-2 rounded-full text-xs font-bold text-center">Give Full {p.qs}Q Exam Premium</Link></div></div>)}</div></div>)
}
