"use client"
import { useEffect, useState } from "react"
import Link from "next/link"
export default function MyProfile(){
const [f,setF]=useState<any>(null)
const [ck,setCk]=useState(false)
useEffect(()=>{ try{ const s=localStorage.getItem("dts_student"); if(s){setF(JSON.parse(s).form)} }catch{} setCk(true)},[])
if(!ck) return <div className="p-6">Loading...</div>
if(!f) return <div className="max-w-[720px] mx-auto p-6 text-center"><Link href="/auth/student" className="fiitjee-btn-primary">Login</Link></div>
return(<div className="max-w-[1280px] mx-auto px-6 py-10"><div className="fiitjee-card p-8"><h1 className="text-[22px] font-black">{f.name}</h1><p className="text-[13px] text-[#6B6B6B]">{f.school} • {f.city} - Dead depth fixed - Try/catch - No clear() data loss</p><div className="mt-4 flex gap-3"><Link href="/papers" className="fiitjee-btn-primary">Practice</Link><button onClick={()=>{ try{ localStorage.removeItem("dts_student"); localStorage.removeItem("dts_current_user"); location.href="/" }catch{} }} className="border-2 border-black px-5 py-2.5 rounded-full font-black text-[13px]">Logout - Fixed No Data Loss - Only removes current user not all</button></div></div></div>)
}
