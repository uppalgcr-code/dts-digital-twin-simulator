"use client"
import { useState } from "react"
import { useRouter } from "next/navigation"
export default function TeacherLogin(){
const router=useRouter()
const [f,setF]=useState({name:"",email:"",phone:"",city:"",address:"",qualification:"",experience:""})
function save(m:string,d:any){
  try{
    const all=JSON.parse(localStorage.getItem("dts_all_teachers")||"[]")
    const e={...f,email:d.email||f.email,name:d.name||f.name,provider:m,createdAt:new Date().toISOString()}
    all.push(e); localStorage.setItem("dts_all_teachers",JSON.stringify(all)); localStorage.setItem("dts_teacher",JSON.stringify({form:e,verified:true,completed:true})); router.push("/teacher")
  }catch(e){ alert("Storage error") }
}
function submit(){ if(!f.name||!f.qualification||!f.experience){alert("Fill required"); return} save("Form",{name:f.name,email:f.email}) }
return(<div className="max-w-[720px] mx-auto px-6 py-10"><h1 className="text-[28px] font-black text-center">Create teacher profile - Dead Depth Fixed</h1><div className="mt-6 fiitjee-card p-6"><div className="grid gap-4"><input value={f.name} onChange={e=>setF({...f,name:e.target.value})} placeholder="Name *" className="border-2 border-black rounded-xl px-3 py-2.5"/><textarea value={f.qualification} onChange={e=>setF({...f,qualification:e.target.value})} placeholder="Qualification *" className="border-2 border-black rounded-xl px-3 py-2.5 h-20"/><textarea value={f.experience} onChange={e=>setF({...f,experience:e.target.value})} placeholder="Experience *" className="border-2 border-black rounded-xl px-3 py-2.5 h-20"/></div><button onClick={submit} className="mt-6 w-full fiitjee-btn-navy">Create profile - Try/Catch Fixed - No Data Loss</button></div></div>)
}
