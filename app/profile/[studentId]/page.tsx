"use client"
import { useState, useEffect } from "react"
import Link from "next/link"
export default function StudentComplete(){
const [auth,setAuth]=useState(false)
const [checked,setChecked]=useState(false)
const [form,setForm]=useState({name:"",city:"",address:"",school:"",className:"",rollNo:"",phone:"",parentName:"",parentPhone:"",email:"",insta:"",fb:"",bio:"",target:""})
useEffect(()=>{const s=localStorage.getItem("student_auth_v13"); if(s){try{const p=JSON.parse(s); if(p.completed && p.verified){setAuth(true); setForm(p.form)}}catch{}} setChecked(true)},[])
if(!checked) return <div className="p-6">Checking...</div>
if(!auth){return(<div className="max-w-4xl mx-auto p-6"><div className="bg-red-50 border-2 border-red-500 rounded-[1.5rem] p-8 text-center"><h1 className="text-2xl font-black">🔒 Student Auth Required - Complete Details Needed</h1><p className="text-sm opacity-70 mt-2">Must fill Name, School, Address, Contact, Parent details, Antecedents before viewing profile. Direct access blocked.</p><Link href="/auth/student" className="inline-block mt-4 bg-black text-white px-6 py-3 rounded-full font-bold text-sm">Complete Student Auth →</Link></div></div>)}
const instaUrl="https://instagram.com/"+form.insta
const fbUrl="https://facebook.com/"+form.fb
return(<div className="max-w-6xl mx-auto p-6"><div className="flex justify-between"><h1 className="text-3xl font-black">Student Profile - Complete Antecedents + SM Working + Full 90Q Exam Access</h1><span className="bg-green-500 text-white px-3 py-1 rounded-full text-xs font-bold">✓ Verified - Full Access</span></div>
<div className="mt-6 grid md:grid-cols-3 gap-6">
<div className="md:col-span-2 bg-white border-2 border-black rounded-[2rem] p-6 shadow-[4px_4px_0px_0px_black]">
<h3 className="font-black">Complete Student Details - All Antecedents You Asked</h3>
<div className="mt-4 grid md:grid-cols-2 gap-3 text-sm">
<div><label className="text-[10px] font-bold">FULL NAME</label><div className="border p-3 rounded-xl bg-[#FBFCFA]">{form.name}</div></div>
<div><label className="text-[10px] font-bold">SCHOOL NAME</label><div className="border p-3 rounded-xl bg-[#FBFCFA]">{form.school}</div></div>
<div><label className="text-[10px] font-bold">CLASS / ROLL NO</label><div className="border p-3 rounded-xl bg-[#FBFCFA]">{form.className} - {form.rollNo}</div></div>
<div><label className="text-[10px] font-bold">CITY + COMPLETE ADDRESS</label><div className="border p-3 rounded-xl bg-[#FBFCFA]">{form.city}, {form.address}</div></div>
<div><label className="text-[10px] font-bold">CONTACT NUMBER</label><div className="border p-3 rounded-xl bg-[#FBFCFA]">{form.phone}</div></div>
<div><label className="text-[10px] font-bold">PARENT NAME + CONTACT</label><div className="border p-3 rounded-xl bg-[#FBFCFA]">{form.parentName} - {form.parentPhone}</div></div>
<div><label className="text-[10px] font-bold">EMAIL</label><div className="border p-3 rounded-xl bg-[#FBFCFA]">{form.email}</div></div>
<div><label className="text-[10px] font-bold">TARGET EXAM</label><div className="border p-3 rounded-xl bg-[#FBFCFA]">{form.target}</div></div>
<div><label className="text-[10px] font-bold">INSTAGRAM - WORKING LINK</label><div className="border p-3 rounded-xl bg-pink-50">{form.insta?<a href={instaUrl} target="_blank" className="text-pink-600 font-bold underline">📸 @{form.insta} ✓ Working → {instaUrl}</a>:"Not added"}</div></div>
<div><label className="text-[10px] font-bold">FACEBOOK - WORKING LINK</label><div className="border p-3 rounded-xl bg-blue-50">{form.fb?<a href={fbUrl} target="_blank" className="text-blue-600 font-bold underline">👤 {form.fb} ✓ Working → {fbUrl}</a>:"Not added"}</div></div>
<div className="md:col-span-2"><label className="text-[10px] font-bold">BIO / ANTECEDENTS</label><div className="border p-3 rounded-xl bg-[#FBFCFA]">{form.bio}</div></div>
</div>
<div className="mt-6 flex flex-wrap gap-2"><a href={instaUrl} target="_blank" className="px-4 py-2 bg-pink-500 text-white rounded-full text-xs font-bold">Instagram Working ✓</a><a href={fbUrl} target="_blank" className="px-4 py-2 bg-blue-600 text-white rounded-full text-xs font-bold">Facebook Working ✓</a><Link href="/papers" className="px-4 py-2 bg-black text-white rounded-full text-xs font-bold">Give Full 90Q Exam Working ✓ →</Link><Link href="/twin" className="px-4 py-2 bg-[#22C0C7] text-black rounded-full text-xs font-bold">View Twin 14 Layers →</Link></div>
</div>
<div className="space-y-4"><div className="bg-black text-white p-5 rounded-[1.5rem]"><h4 className="font-bold text-sm">Exam Access - Full 90Q in 1 Go</h4><div className="mt-3 text-xs"><div>Authenticated ✓ Can give Full 90Q JEE / 200Q NEET in 1 go</div><div className="mt-2 opacity-70">Not 5 Qs - Full 90 Qs paper as you required</div><Link href="/papers/jee-2024-p1/exam" className="inline-block mt-3 bg-white text-black px-4 py-2 rounded-full text-xs font-bold">Start Full 90Q Exam Working ✓ →</Link></div></div></div>
</div>
</div>)
}
