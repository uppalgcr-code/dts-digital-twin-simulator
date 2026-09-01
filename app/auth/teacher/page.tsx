"use client"
import { useState } from "react"
import { useRouter } from "next/navigation"
export default function T(){
const router=useRouter()
const [f,setF]=useState({name:"",email:"",phone:"",city:"",address:"",qualification:"",experience:""})
function go(){
 if(!f.name||!f.qualification){alert("Fill name and qualification"); return}
 localStorage.setItem("dts_teacher",JSON.stringify({form:f,verified:true,completed:true}))
 router.push("/teacher")
}
return(<div className="max-w-[720px] mx-auto px-6 py-12"><h1 className="text-[28px] font-bold">Share your teaching profile</h1><div className="mt-6 soft-card p-8 grid gap-4"><input value={f.name} onChange={e=>setF({...f,name:e.target.value})} placeholder="Full name *" className="border rounded-xl px-3 py-2.5"/><textarea value={f.qualification} onChange={e=>setF({...f,qualification:e.target.value})} placeholder="Qualification - B.Tech IIT Bombay 2012 etc *" className="border rounded-xl px-3 py-2.5 h-20"/><textarea value={f.experience} onChange={e=>setF({...f,experience:e.target.value})} placeholder="Experience - Allen Kota 6 yrs etc *" className="border rounded-xl px-3 py-2.5 h-20"/><button onClick={go} className="bg-black text-white py-3 rounded-full font-semibold">Continue - create profile</button></div></div>)
}
