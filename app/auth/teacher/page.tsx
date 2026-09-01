"use client"
import { useState } from "react"
import { useRouter } from "next/navigation"
export default function TeacherLogin(){
const router=useRouter()
const [f,setF]=useState({name:"",email:"",phone:"",city:"",address:"",qualification:"",experience:"",specialization:"Physics"})
function save(m:string,d:any){ const all=JSON.parse(localStorage.getItem("dts_all_teachers")||"[]"); const e={...f,email:d.email||f.email,name:d.name||f.name,provider:m,createdAt:new Date().toISOString()}; all.push(e); localStorage.setItem("dts_all_teachers",JSON.stringify(all)); localStorage.setItem("dts_teacher",JSON.stringify({form:e,verified:true,completed:true})); router.push("/teacher") }
function google(){ save("Google",{name:f.name||"Rahul Sharma",email:f.email}) }
function fb(){ save("Facebook",{name:f.name||"Rahul Sharma",email:f.email}) }
function submit(){ if(!f.name||!f.qualification||!f.experience){alert("Fill required"); return} save("Form",{name:f.name,email:f.email}) }
return(
<div className="max-w-[720px] mx-auto px-6 py-10">
<div className="text-center"><div className="inline-flex bg-[#0A1931] text-white border-2 border-black px-4 py-1 rounded-full text-[11px] font-black">FIITJEE COLORS • TEACHER LOGIN</div><h1 className="mt-4 text-[28px] font-black">Create your teacher profile</h1></div>
<div className="mt-6 grid md:grid-cols-2 gap-3"><button onClick={google} className="bg-white border-2 border-black py-3 rounded-full font-black text-[13px] shadow-[4px_4px_0px_0px_black]">Continue with Google</button><button onClick={fb} className="bg-[#1877F2] text-white border-2 border-black py-3 rounded-full font-black text-[13px] shadow-[4px_4px_0px_0px_black]">Continue with Facebook</button></div>
<div className="mt-6 fiitjee-card p-6"><div className="grid md:grid-cols-2 gap-4"><div><label className="text-[11px] font-black">Name *</label><input value={f.name} onChange={e=>setF({...f,name:e.target.value})} className="w-full mt-1 border-2 border-black rounded-xl px-3 py-2.5 text-[13px]"/></div><div><label className="text-[11px] font-black">Email *</label><input value={f.email} onChange={e=>setF({...f,email:e.target.value})} className="w-full mt-1 border-2 border-black rounded-xl px-3 py-2.5 text-[13px]"/></div><div className="md:col-span-2"><label className="text-[11px] font-black">Qualification *</label><textarea value={f.qualification} onChange={e=>setF({...f,qualification:e.target.value})} className="w-full mt-1 border-2 border-black rounded-xl px-3 py-2.5 text-[13px] h-20"/></div><div className="md:col-span-2"><label className="text-[11px] font-black">Experience *</label><textarea value={f.experience} onChange={e=>setF({...f,experience:e.target.value})} className="w-full mt-1 border-2 border-black rounded-xl px-3 py-2.5 text-[13px] h-20"/></div></div><button onClick={submit} className="mt-6 w-full fiitjee-btn-navy">Create teacher profile</button></div>
</div>
)
}
