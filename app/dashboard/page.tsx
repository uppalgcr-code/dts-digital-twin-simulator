"use client"
import { useEffect, useState } from "react"
export default function DataPage(){
const [students,setStudents]=useState<any[]>([])
const [teachers,setTeachers]=useState<any[]>([])
const [attempts,setAttempts]=useState<any[]>([])
useEffect(()=>{ try{ setStudents(JSON.parse(localStorage.getItem("dts_all_students")||"[]")); setTeachers(JSON.parse(localStorage.getItem("dts_all_teachers")||"[]")); setAttempts(JSON.parse(localStorage.getItem("dts_all_attempts")||"[]")) }catch{} },[])
function download(type:string){
  try{
    let data:any[]=[]; let header="";
    if(type==="students"){ data=students; header="Name,Email,Phone,City,Address,School,Class,RollNo,ParentName,ParentPhone\n"; }
    else if(type==="teachers"){ data=teachers; header="Name,Email,Phone,City,Qualification,Experience\n"; }
    else { data=attempts; header="PaperId,Score,Total,Rank\n"; }
    let csv=header;
    data.forEach((d:any)=>{
      const esc=(v:string)=>`"${(v||"").toString().replace(/"/g,'""')}"`;
      if(type==="students") csv+=`${esc(d.name)},${esc(d.email)},${esc(d.phone)},${esc(d.city)},${esc(d.address)},${esc(d.school)},${esc(d.className)},${esc(d.rollNo)},${esc(d.parentName)},${esc(d.parentPhone)}\n`;
      else if(type==="teachers") csv+=`${esc(d.name)},${esc(d.email)},${esc(d.phone)},${esc(d.city)},${esc(d.qualification)},${esc(d.experience)}\n`;
      else csv+=`${esc(d.paperId)},${esc(d.score?.toString())},${esc(d.total?.toString())},${esc(d.rank)}\n`;
    });
    const blob=new Blob([csv],{type:"text/csv;charset=utf-8;"}); const url=URL.createObjectURL(blob); const a=document.createElement("a"); a.href=url; a.download=`${type}.csv`; a.click();
  }catch{}
}
return(
<div className="max-w-[1280px] mx-auto px-6 py-10">
<h1 className="text-[28px] font-black">Your data</h1>
<p className="text-[13px] text-[#6B6B6B] mt-1">All student and teacher profiles plus test attempts. Download as Excel or CSV.</p>
<div className="mt-8 grid md:grid-cols-3 gap-6">
<div className="card p-6"><div className="font-black">Students</div><div className="text-[28px] font-black mt-2">{students.length}</div><button onClick={()=>download("students")} className="mt-4 w-full btn-primary text-[12px]">Download Students CSV</button></div>
<div className="card p-6"><div className="font-black">Teachers</div><div className="text-[28px] font-black mt-2">{teachers.length}</div><button onClick={()=>download("teachers")} className="mt-4 w-full bg-[#0A1931] text-white border-2 border-black py-2.5 rounded-full font-black text-[12px]">Download Teachers CSV</button></div>
<div className="card-navy p-6"><div className="font-black text-[#FFCC00]">Test attempts</div><div className="text-[28px] font-black mt-2">{attempts.length}</div><button onClick={()=>download("attempts")} className="mt-4 w-full bg-white text-black border-2 border-black py-2.5 rounded-full font-black text-[12px]">Download Test Analysis CSV</button><button onClick={()=>{download("students"); setTimeout(()=>download("teachers"),400); setTimeout(()=>download("attempts"),800)}} className="mt-2 w-full bg-[#1A2F4A] border-2 border-white/20 text-white py-2.5 rounded-full font-black text-[12px]">Download all as Excel</button></div>
</div>
</div>
)
}
