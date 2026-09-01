"use client"
import { useEffect, useState } from "react"
export default function DataPage(){
const [students,setStudents]=useState<any[]>([])
const [teachers,setTeachers]=useState<any[]>([])
const [attempts,setAttempts]=useState<any[]>([])
useEffect(()=>{
 setStudents(JSON.parse(localStorage.getItem("dts_all_students")||"[]"))
 setTeachers(JSON.parse(localStorage.getItem("dts_all_teachers")||"[]"))
 setAttempts(JSON.parse(localStorage.getItem("dts_all_attempts")||"[]"))
},[])
function download(type:string){
 const data=type==="students"?students:type==="teachers"?teachers:attempts
 let csv=""
 if(type==="students"){ csv="Name,Email,Phone,City,Address,School,Class,RollNo,ParentName,ParentPhone,Instagram,Facebook\n"; data.forEach((s:any)=>{csv+=`"${s.name}","${s.email}","${s.phone}","${s.city}","${s.address}","${s.school}","${s.className}","${s.rollNo}","${s.parentName}","${s.parentPhone}","${s.insta}","${s.fb}"\n`})}
 else if(type==="teachers"){ csv="Name,Email,Phone,City,Qualification,Experience\n"; data.forEach((t:any)=>{csv+=`"${t.name}","${t.email}","${t.phone}","${t.city}","${(t.qualification||"").replace(/"/g,"'")}","${(t.experience||"").replace(/"/g,"'")}"\n`})}
 else { csv="PaperId,Score,Total,Rank\n"; data.forEach((a:any)=>{csv+=`"${a.paperId}","${a.score}","${a.total}","${a.rank}"\n`})}
 const blob=new Blob([csv],{type:"text/csv"}); const url=URL.createObjectURL(blob); const a=document.createElement("a"); a.href=url; a.download=`${type}_${new Date().toISOString().slice(0,10)}.csv`; a.click()
}
return(
<div className="max-w-[1280px] mx-auto px-6 py-10">
<h1 className="text-[28px] font-bold">Your data</h1>
<p className="text-[13px] text-[#6B6B6B] mt-1">All student and teacher profiles plus test attempts. Download as Excel/CSV.</p>
<div className="mt-8 grid md:grid-cols-3 gap-6">
<div className="card p-6"><div className="font-semibold">Students</div><div className="text-[28px] font-bold mt-2">{students.length}</div><button onClick={()=>download("students")} className="mt-4 w-full bg-black text-white py-2.5 rounded-full text-[12px] font-semibold">Download Students CSV</button><div className="mt-3 text-[11px] text-[#6B6B6B] max-h-[120px] overflow-y-auto">{students.slice(0,3).map((s:any,i:number)=><div key={i} className="border-b py-1">{s.name} - {s.email}</div>)}</div></div>
<div className="card p-6"><div className="font-semibold">Teachers</div><div className="text-[28px] font-bold mt-2">{teachers.length}</div><button onClick={()=>download("teachers")} className="mt-4 w-full bg-black text-white py-2.5 rounded-full text-[12px] font-semibold">Download Teachers CSV</button><div className="mt-3 text-[11px] text-[#6B6B6B] max-h-[120px] overflow-y-auto">{teachers.slice(0,3).map((t:any,i:number)=><div key={i} className="border-b py-1">{t.name}</div>)}</div></div>
<div className="card p-6 bg-black text-white border-black"><div className="font-semibold">Test attempts</div><div className="text-[28px] font-bold mt-2">{attempts.length}</div><button onClick={()=>download("attempts")} className="mt-4 w-full bg-white text-black py-2.5 rounded-full text-[12px] font-semibold">Download Test Analysis CSV</button><button onClick={()=>{download("students"); setTimeout(()=>download("teachers"),400); setTimeout(()=>download("attempts"),800)}} className="mt-2 w-full bg-[#222] border border-white/20 text-white py-2.5 rounded-full text-[12px] font-semibold">Download all as Excel</button></div>
</div>
</div>
)
}
