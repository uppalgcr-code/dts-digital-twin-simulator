"use client"
import { useState } from "react"
import { useRouter } from "next/navigation"
export default function TeacherAuth(){
const router=useRouter()
const [form,setForm]=useState({name:"",email:"",phone:"",city:"",address:"",qualification:"",experience:""})
async function submit(m:string){
 if(!form.name||!form.qualification){alert("Fill Name & Qualification"); return;}
 const r=await fetch("/api/auth/teacher",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({...form,loginMethod:m})});
 localStorage.setItem("teacher_auth_v13",JSON.stringify({form,verified:true,completed:true,loginMethod:m}));
 alert("Teacher Auth Complete Premium - Accurate Profile");
 router.push("/teacher");
}
return(<div className="max-w-4xl mx-auto p-6"><h1 className="text-3xl font-black">Teacher Auth - Premium - Build Fixed - Accurate Profile</h1><div className="mt-6 bg-white border-2 border-black rounded-[1.5rem] p-6"><div className="grid md:grid-cols-2 gap-3 text-sm"><div><label className="text-[10px] font-bold">FULL NAME *</label><input value={form.name} onChange={e=>setForm({...form,name:e.target.value})} className="w-full border-2 border-black p-3 rounded-xl"/></div><div><label className="text-[10px] font-bold">QUALIFICATION *</label><input value={form.qualification} onChange={e=>setForm({...form,qualification:e.target.value})} className="w-full border-2 border-black p-3 rounded-xl"/></div><div className="md:col-span-2"><label className="text-[10px] font-bold">EXPERIENCE *</label><input value={form.experience} onChange={e=>setForm({...form,experience:e.target.value})} className="w-full border-2 border-black p-3 rounded-xl"/></div></div><div className="mt-6 flex gap-3"><button onClick={()=>submit("OTP")} className="bg-black text-white px-6 py-3 rounded-full text-xs font-bold">OTP 123456 Premium</button><button onClick={()=>submit("Google")} className="bg-blue-600 text-white px-6 py-3 rounded-full text-xs font-bold">Google SM Login Premium</button></div></div></div>)
}
