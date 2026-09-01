"use client"
import { useEffect, useState } from "react"
export default function DataPage(){
const [students,setStudents]=useState<any[]>([])
const [teachers,setTeachers]=useState<any[]>([])
useEffect(()=>{ setStudents(JSON.parse(localStorage.getItem("dts_all_students")||"[]")); setTeachers(JSON.parse(localStorage.getItem("dts_all_teachers")||"[]")) },[])
function download(type:string){ const data=type==="students"?students:teachers; let csv=type==="students"?"Name,Email,Phone,City\n":"Name,Email,Qualification\n"; data.forEach((d:any)=>{csv+=`"${d.name}","${d.email}","${d.phone||d.qualification}"\n`}); const blob=new Blob([csv],{type:"text/csv"}); const url=URL.createObjectURL(blob); const a=document.createElement("a"); a.href=url; a.download=`${type}.csv`; a.click() }
return(<div className="max-w-[1280px] mx-auto px-6 py-10"><h1 className="text-[28px] font-black">Your data - FIITJEE colors - Excel/CSV download</h1><div className="mt-8 grid md:grid-cols-2 gap-6"><div className="fiitjee-card p-6"><div className="font-black">Students {students.length}</div><button onClick={()=>download("students")} className="mt-4 fiitjee-btn-primary">Download Students CSV</button></div><div className="fiitjee-card p-6 bg-[#0A1931] text-white border-black"><div className="font-black text-[#FFCC00]">Teachers {teachers.length}</div><button onClick={()=>download("teachers")} className="mt-4 bg-white text-black border-2 border-black px-4 py-2 rounded-full font-black">Download Teachers CSV</button></div></div></div>)
}
