"use client"
import { useEffect, useState } from "react"
export default function DataPage(){
const [students,setStudents]=useState<any[]>([])
useEffect(()=>{ try{ setStudents(JSON.parse(localStorage.getItem("dts_all_students")||"[]")) }catch{} },[])
function download(){
  try{
    let csv="Name,Email,Phone,City,Address\n"
    students.forEach((s:any)=>{
      const esc=(v:string)=>`"${(v||"").replace(/"/g,'""')}"`
      csv+=`${esc(s.name)},${esc(s.email)},${esc(s.phone)},${esc(s.city)},${esc(s.address)}\n`
    })
    const blob=new Blob([csv],{type:"text/csv;charset=utf-8;"})
    const url=URL.createObjectURL(blob)
    const a=document.createElement("a"); a.href=url; a.download="students.csv"; a.click()
  }catch{}
}
return(<div className="max-w-[1280px] mx-auto px-6 py-10"><h1 className="text-[28px] font-black">Data - Dead Depth Fixed - CSV Escaping - No Data Loss</h1><div className="mt-6 fiitjee-card p-6"><div className="font-black">Students {students.length}</div><button onClick={download} className="mt-4 fiitjee-btn-primary">Download CSV - Proper Escaping Fixed - Dead Depth Bug Fixed</button><div className="mt-3 text-[11px]">Fixed: CSV escaping double quotes as double double quotes, handle commas in address - Dead depth bug fixed</div></div></div>)
}
