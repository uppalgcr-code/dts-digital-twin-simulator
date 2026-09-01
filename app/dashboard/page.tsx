"use client";
import { useEffect, useState } from "react";
export default function DataPage(){
  const [students,setStudents]=useState<any[]>([]);
  const [teachers,setTeachers]=useState<any[]>([]);
  useEffect(()=>{try{setStudents(JSON.parse(localStorage.getItem("dts_all_students")||"[]")); setTeachers(JSON.parse(localStorage.getItem("dts_all_teachers")||"[]"));}catch{}},[]);
  function download(type:string){
    try{
      const data=type==="students"?students:teachers;
      let csv=type==="students"?"Name,Email,Phone,City\n":"Name,Email\n";
      data.forEach((d:any)=>{const esc=(v:string)=>`"${(v||"").replace(/"/g,'""')}"`; csv+=type==="students"?`${esc(d.name)},${esc(d.email)},${esc(d.phone)},${esc(d.city)}\n`:`${esc(d.name)},${esc(d.email)}\n`;});
      const blob=new Blob([csv],{type:"text/csv"}); const url=URL.createObjectURL(blob); const a=document.createElement("a"); a.href=url; a.download=`${type}.csv`; a.click();
    }catch{}
  }
  return(
    <div className="max-w-[1280px] mx-auto px-6 py-10">
      <h1 className="text-[28px] font-black">Your data</h1>
      <div className="mt-8 grid md:grid-cols-2 gap-6">
        <div className="card p-6"><div className="font-black">Students {students.length}</div><button onClick={()=>download("students")} className="mt-4 btn-primary">Download CSV</button></div>
        <div className="card p-6"><div className="font-black">Teachers {teachers.length}</div><button onClick={()=>download("teachers")} className="mt-4 btn-navy">Download CSV</button></div>
      </div>
    </div>
  )
}
