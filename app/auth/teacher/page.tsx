"use client"
import { useState } from "react"
import { useRouter } from "next/navigation"
export default function TeacherLogin(){
const router=useRouter()
const [f,setF]=useState({name:"",email:"",phone:"",city:"",address:"",qualification:"",experience:""})
function save(m:string,d:any){ try{ const all=JSON.parse(localStorage.getItem("dts_all_teachers")||"[]"); const e={...f,email:d.email||f.email,name:d.name||f.name,provider:m,createdAt:new Date().toISOString()}; all.push(e); localStorage.setItem("dts_all_teachers",JSON.stringify(all)); localStorage.setItem("dts_teacher",JSON.stringify({form:e,verified:true,completed:true})); router.push("/teacher") }catch{ alert("Storage error") } }
function submit(){ if(!f.name||!f.qualification||!f.experience){alert("Please fill name, qualification and experience"); return} save("Form",{name:f.name,email:f.email}) }
return(
<div className="max-w-[720px] mx-auto px-6 py-10">
<div className="text-center"><h1 className="text-[28px] font-black">Create your teacher profile</h1><p className="text-[13px] text-[#6B6B6B] mt-2">Share your experience, qualification and how students can reach you.</p></div>
<div className="mt-8 grid md:grid-cols-2 gap-3"><button onClick={()=>save("Google",{name:f.name,email:f.email})} className="bg-white border-2 border-black py-3 rounded-full font-black text-[13px] shadow-[4px_4px_0px_0px_black] flex items-center justify-center gap-2"><span className="w-5 h-5 bg-[#4285F4] text-white rounded-full flex items-center justify-center text-[10px] font-bold">G</span>Continue with Google</button><button onClick={()=>save("Facebook",{name:f.name,email:f.email})} className="bg-[#1877F2] text-white border-2 border-black py-3 rounded-full font-black text-[13px] shadow-[4px_4px_0px_0px_black]">Continue with Facebook</button></div>
<div className="mt-8 card p-6"><div className="grid md:grid-cols-2 gap-4"><div><label className="text-[11px] font-black">Full name *</label><input value={f.name} onChange={e=>setF({...f,name:e.target.value})} placeholder="Rahul Sharma" className="w-full mt-1 border-2 border-black rounded-xl px-3 py-2.5 text-[13px]"/></div><div><label className="text-[11px] font-black">Email *</label><input value={f.email} onChange={e=>setF({...f,email:e.target.value})} placeholder="you@example.com" className="w-full mt-1 border-2 border-black rounded-xl px-3 py-2.5 text-[13px]"/></div><div className="md:col-span-2"><label className="text-[11px] font-black">Qualification *</label><textarea value={f.qualification} onChange={e=>setF({...f,qualification:e.target.value})} placeholder="B.Tech IIT Bombay, M.Sc Gold Medal" className="w-full mt-1 border-2 border-black rounded-xl px-3 py-2.5 text-[13px] h-20"/></div><div className="md:col-span-2"><label className="text-[11px] font-black">Experience *</label><textarea value={f.experience} onChange={e=>setF({...f,experience:e.target.value})} placeholder="Senior Faculty with 6 years experience" className="w-full mt-1 border-2 border-black rounded-xl px-3 py-2.5 text-[13px] h-20"/></div></div><button onClick={submit} className="mt-6 w-full btn-navy">Create teacher profile</button></div>
</div>
)
}
