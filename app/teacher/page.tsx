"use client";
import { useEffect, useState } from "react";
import Link from "next/link";
export default function Teacher(){
  const [ok,setOk]=useState(false);
  const [checked,setChecked]=useState(false);
  useEffect(()=>{try{const s=localStorage.getItem("dts_teacher"); if(s){const p=JSON.parse(s); if(p.completed&&p.verified) setOk(true);}}catch{} setChecked(true);},[]);
  if(!checked) return <div className="p-6">Loading...</div>;
  if(!ok) return <div className="max-w-[720px] mx-auto px-6 py-16 text-center"><Link href="/auth/teacher" className="btn-primary">Create teacher profile</Link></div>;
  return(<div className="max-w-[1280px] mx-auto px-6 py-10"><h1 className="text-[28px] font-black">Your teaching profile</h1><div className="mt-6 card p-8">Profile active</div></div>)
}
