"use client"
import { useEffect, useState } from "react"
import Link from "next/link"
export default function StudentProfile(){
const [form,setForm]=useState<any>(null)
useEffect(()=>{const s=localStorage.getItem("student_auth_v13"); if(s){try{setForm(JSON.parse(s).form)}catch{}}},[])
if(!form) return <div className="p-6"><Link href="/auth/student" className="bg-black text-white px-6 py-3 rounded-full font-black">Complete Student Auth Premium</Link></div>
return(<div className="max-w-6xl mx-auto p-6"><h1 className="text-3xl font-black">Student Profile Premium - Customer Ready - Complete Antecedents - Build Fixed</h1><div className="mt-6 bg-white border-2 border-black rounded-[2rem] p-6"><div className="grid md:grid-cols-2 gap-3 text-sm"><div><b>Name:</b> {form.name}</div><div><b>School:</b> {form.school}</div><div><b>Address:</b> {form.city}, {form.address}</div><div><b>Contact:</b> {form.phone} - Parent {form.parentName} {form.parentPhone}</div><div><b>Insta Working:</b> <a href={`https://instagram.com/${form.insta}`} target="_blank" className="text-pink-600 underline">@{form.insta} Working Premium</a></div></div><div className="mt-6 flex gap-2"><Link href="/papers" className="bg-black text-white px-6 py-3 rounded-full font-bold text-sm">Give Full 90Q Exam Premium Working</Link><Link href="/twin" className="bg-[#008E8D] text-white px-6 py-3 rounded-full font-bold text-sm">Twin Premium</Link></div></div></div>)
}
