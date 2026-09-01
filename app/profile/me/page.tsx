"use client";
import { useEffect, useState } from "react";
import Link from "next/link";
export default function MyProfile(){
  const [form,setForm]=useState<any>(null);
  const [checked,setChecked]=useState(false);
  useEffect(()=>{try{const s=localStorage.getItem("dts_student"); if(s) setForm(JSON.parse(s).form);}catch{} setChecked(true);},[]);
  if(!checked) return <div className="p-6">Loading...</div>;
  if(!form) return <div className="max-w-[720px] mx-auto px-6 py-16 text-center"><Link href="/auth/student" className="btn-primary">Login</Link></div>;
  return(
    <div className="max-w-[1280px] mx-auto px-6 py-10">
      <div className="card p-8"><h1 className="text-[22px] font-black">{form.name}</h1><p className="text-[13px] text-[#6B6B6B]">{form.school} • {form.city}</p><div className="mt-6 flex gap-3"><Link href="/papers" className="btn-primary">Practice paper</Link><button onClick={()=>{localStorage.removeItem("dts_student"); location.href="/";}} className="border-2 border-black px-5 py-2.5 rounded-full font-black text-[13px]">Logout</button></div></div>
    </div>
  )
}
