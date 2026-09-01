"use client"
import { useState } from "react"
import { useRouter } from "next/navigation"
export default function TeacherLogin(){
const router=useRouter()
const [f,setF]=useState({name:"",email:"",phone:"",city:"",address:"",qualification:"",experience:"",specialization:"Physics",skills:"",achievements:""})
const [loading,setLoading]=useState(false)
function save(method:string, data:any){
 const all=JSON.parse(localStorage.getItem("dts_all_teachers")||"[]")
 const entry={...f,email:data.email||f.email,name:data.name||f.name,provider:method,createdAt:new Date().toISOString()}
 all.push(entry)
 localStorage.setItem("dts_all_teachers",JSON.stringify(all))
 localStorage.setItem("dts_teacher",JSON.stringify({form:entry,verified:true,completed:true}))
 router.push("/teacher")
}
function google(){ setLoading(true); setTimeout(()=>{save("Google",{name:f.name||"Rahul Sharma",email:f.email||"rahul@example.com"}); setLoading(false)},600) }
function facebook(){ setLoading(true); setTimeout(()=>{save("Facebook",{name:f.name||"Rahul Sharma",email:f.email||"rahul@example.com"}); setLoading(false)},600) }
function submit(){
 if(!f.name||!f.qualification||!f.experience){alert("Please fill name, qualification and experience"); return}
 save("Form",{name:f.name,email:f.email})
}
return(
<div className="max-w-[720px] mx-auto px-6 py-10">
<h1 className="text-[28px] font-bold tracking-tight text-center">Create your teacher profile</h1>
<p className="text-[13px] text-[#6B6B6B] text-center mt-2">Share your experience, qualification and how students can reach you.</p>
<div className="mt-8 grid md:grid-cols-2 gap-3">
<button onClick={google} className="bg-white border border-[#E8E6E1] py-3 rounded-full font-semibold text-[13px] flex items-center justify-center gap-2"><span className="w-5 h-5 bg-[#4285F4] text-white rounded-full flex items-center justify-center text-[10px] font-bold">G</span>Continue with Google</button>
<button onClick={facebook} className="bg-[#1877F2] text-white py-3 rounded-full font-semibold text-[13px]">Continue with Facebook</button>
</div>
<div className="mt-8 card p-6">
<div className="grid md:grid-cols-2 gap-4">
<div><label className="text-[11px] font-semibold text-[#6B6B6B]">Full name *</label><input value={f.name} onChange={e=>setF({...f,name:e.target.value})} placeholder="Rahul Sharma" className="w-full mt-1.5 border rounded-xl px-3 py-2.5 text-[13px]"/></div>
<div><label className="text-[11px] font-semibold text-[#6B6B6B]">Email *</label><input value={f.email} onChange={e=>setF({...f,email:e.target.value})} placeholder="you@example.com" className="w-full mt-1.5 border rounded-xl px-3 py-2.5 text-[13px]"/></div>
<div><label className="text-[11px] font-semibold text-[#6B6B6B]">Phone *</label><input value={f.phone} onChange={e=>setF({...f,phone:e.target.value})} placeholder="98XXXXXX21" className="w-full mt-1.5 border rounded-xl px-3 py-2.5 text-[13px]"/></div>
<div><label className="text-[11px] font-semibold text-[#6B6B6B]">City *</label><input value={f.city} onChange={e=>setF({...f,city:e.target.value})} placeholder="Kota" className="w-full mt-1.5 border rounded-xl px-3 py-2.5 text-[13px]"/></div>
<div className="md:col-span-2"><label className="text-[11px] font-semibold text-[#6B6B6B]">Full address *</label><input value={f.address} onChange={e=>setF({...f,address:e.target.value})} placeholder="Allen Career Institute, Kota" className="w-full mt-1.5 border rounded-xl px-3 py-2.5 text-[13px]"/></div>
<div className="md:col-span-2"><label className="text-[11px] font-semibold text-[#6B6B6B]">Qualification *</label><textarea value={f.qualification} onChange={e=>setF({...f,qualification:e.target.value})} placeholder="B.Tech IIT Bombay 2012, M.Sc Gold Medal, GATE AIR 45" className="w-full mt-1.5 border rounded-xl px-3 py-2.5 text-[13px] h-20"/></div>
<div className="md:col-span-2"><label className="text-[11px] font-semibold text-[#6B6B6B]">Experience *</label><textarea value={f.experience} onChange={e=>setF({...f,experience:e.target.value})} placeholder="Senior Faculty Allen Kota 6 years, 200+ IIT selections" className="w-full mt-1.5 border rounded-xl px-3 py-2.5 text-[13px] h-20"/></div>
<div><label className="text-[11px] font-semibold text-[#6B6B6B]">Specialization</label><input value={f.specialization} onChange={e=>setF({...f,specialization:e.target.value})} placeholder="IIT JEE Physics" className="w-full mt-1.5 border rounded-xl px-3 py-2.5 text-[13px]"/></div>
<div><label className="text-[11px] font-semibold text-[#6B6B6B]">Skills</label><input value={f.skills} onChange={e=>setF({...f,skills:e.target.value})} placeholder="Mechanics, Electrostatics" className="w-full mt-1.5 border rounded-xl px-3 py-2.5 text-[13px]"/></div>
</div>
<div className="mt-6"><button onClick={submit} className="w-full bg-black text-white py-3 rounded-full font-semibold text-[13px]">Create teacher profile</button></div>
</div>
</div>
)
}
