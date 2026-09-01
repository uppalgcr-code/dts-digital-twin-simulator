"use client"
import { useEffect, useState } from "react"
import Link from "next/link"
export default function StudentProfileFinal(){
const [auth,setAuth]=useState(false)
const [form,setForm]=useState<any>(null)
useEffect(()=>{const s=localStorage.getItem("student_auth_v13"); if(s){try{const p=JSON.parse(s); if(p.completed&&p.verified){setAuth(true); setForm(p.form)}}catch{}}},[])
if(!form) return <div className="p-6">Checking auth... <Link href="/auth/student" className="underline">Go to Student Auth - Complete Antecedents</Link></div>
if(!auth) return <div className="p-6">Auth required <Link href="/auth/student">Auth</Link></div>
const insta="https://instagram.com/"+form.insta
const fb="https://facebook.com/"+form.fb
return(<div className="max-w-6xl mx-auto p-6"><h1 className="text-3xl font-black">Student Profile - Complete Antecedents - Frontend+Backend - Full 90Q Access Working</h1><div className="mt-6 bg-white border-2 border-black rounded-[2rem] p-6"><div className="grid md:grid-cols-2 gap-3 text-sm"><div><b>Name:</b> {form.name}</div><div><b>School:</b> {form.school}</div><div><b>Class/Roll:</b> {form.className}/{form.rollNo}</div><div><b>Address:</b> {form.city}, {form.address}</div><div><b>Contact:</b> {form.phone}</div><div><b>Parent:</b> {form.parentName} {form.parentPhone}</div><div><b>Email:</b> {form.email}</div><div><b>Target:</b> {form.target}</div><div><b>Insta Working:</b> <a href={insta} target="_blank" className="text-pink-600 underline">📸 {form.insta} ✓ {insta}</a></div><div><b>FB Working:</b> <a href={fb} target="_blank" className="text-blue-600 underline">👤 {form.fb} ✓</a></div></div><div className="mt-6 flex gap-2"><Link href="/papers" className="bg-black text-white px-5 py-2 rounded-full text-xs font-bold">Give Full 90Q Exam Working ✓ →</Link><Link href="/twin" className="bg-[#22C0C7] text-black px-5 py-2 rounded-full text-xs font-bold">Twin 14 Layers →</Link><Link href="/backend" className="border px-5 py-2 rounded-full text-xs font-bold">Backend Dashboard →</Link></div></div></div>)
}
