"use client";
import { useEffect, useState } from "react";
import Link from "next/link";
import { papers } from "@/lib/data";

export default function PapersPage(){
  const [ok,setOk]=useState(false);
  const [checked,setChecked]=useState(false);
  useEffect(()=>{
    try{
      const s=localStorage.getItem("dts_student");
      if(s){const p=JSON.parse(s); if(p.completed&&p.verified) setOk(true);}
    }catch{}
    setChecked(true);
  },[]);
  if(!checked) return <div className="p-6">Loading...</div>;
  if(!ok) return <div className="max-w-[720px] mx-auto px-6 py-16 text-center"><h1 className="text-[28px] font-black">Create your profile to start practicing</h1><Link href="/auth/student" className="inline-block mt-6 btn-primary">Create profile</Link></div>;
  return(
    <div className="max-w-[1280px] mx-auto px-6 py-10">
      <h1 className="text-[28px] font-black">Practice papers</h1>
      <div className="mt-8 grid md:grid-cols-3 gap-6">
        {papers.map((p:any)=><div key={p.id} className="card p-6"><div className="font-black">{p.title}</div><div className="text-[12px] text-[#6B6B6B] mt-1">{p.qs} questions • {p.marks} marks • {p.duration} min</div><Link href={`/papers/${p.id}/exam`} className="inline-block mt-4 w-full bg-[#0A1931] text-white border-2 border-black py-2.5 rounded-full text-center text-[12px] font-black">Start full paper</Link></div>)}
      </div>
    </div>
  )
}
