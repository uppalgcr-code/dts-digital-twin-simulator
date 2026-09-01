"use client";
import { useState } from "react";
import { useRouter } from "next/navigation";

export default function TeacherLogin(){
  const router=useRouter();
  const [form,setForm]=useState({name:"",email:"",qualification:"",experience:""});
  function save(){
    try{
      if(!form.name||!form.qualification||!form.experience){alert("Fill required");return;}
      const all=JSON.parse(localStorage.getItem("dts_all_teachers")||"[]");
      const entry={...form,createdAt:new Date().toISOString()};
      all.push(entry);
      localStorage.setItem("dts_all_teachers",JSON.stringify(all));
      localStorage.setItem("dts_teacher",JSON.stringify({form:entry,verified:true,completed:true}));
      router.push("/teacher");
    }catch{alert("Error");}
  }
  return(
    <div className="max-w-[720px] mx-auto px-6 py-10">
      <h1 className="text-[28px] font-black text-center">Create your teacher profile</h1>
      <div className="mt-8 card p-6">
        <div className="grid gap-4">
          <input value={form.name} onChange={e=>setForm({...form,name:e.target.value})} placeholder="Full name *" className="border-2 border-black rounded-xl px-3 py-2.5"/>
          <input value={form.email} onChange={e=>setForm({...form,email:e.target.value})} placeholder="Email *" className="border-2 border-black rounded-xl px-3 py-2.5"/>
          <textarea value={form.qualification} onChange={e=>setForm({...form,qualification:e.target.value})} placeholder="Qualification *" className="border-2 border-black rounded-xl px-3 py-2.5 h-20"/>
          <textarea value={form.experience} onChange={e=>setForm({...form,experience:e.target.value})} placeholder="Experience *" className="border-2 border-black rounded-xl px-3 py-2.5 h-20"/>
        </div>
        <button onClick={save} className="mt-6 w-full btn-navy">Create teacher profile</button>
      </div>
    </div>
  )
}
