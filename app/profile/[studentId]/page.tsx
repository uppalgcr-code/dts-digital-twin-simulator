"use client"
import { useState } from "react"
export default function StudentProfile(){
const [form,setForm]=useState({name:"Gaurav Uppal",insta:"uppal_gaurav",fb:"gaurav.uppal.16",city:"Faridabad",bio:"JEE 2026"})
const instaUrl="https://instagram.com/"+form.insta
const fbUrl="https://facebook.com/"+form.fb
return(<div className="max-w-4xl mx-auto p-6"><div className="bg-white border-2 border-black rounded-[2rem] p-6"><h1 className="font-black text-xl">Student Detailed Profile + SM Handles FIXED</h1><div className="mt-4"><label className="text-xs">Instagram Handle</label><input value={form.insta} onChange={e=>setForm({...form,insta:e.target.value})} className="w-full border p-3 rounded-xl"/></div><div className="mt-2"><label className="text-xs">Facebook Handle</label><input value={form.fb} onChange={e=>setForm({...form,fb:e.target.value})} className="w-full border p-3 rounded-xl"/></div><div className="mt-6 flex gap-2"><a href={instaUrl} target="_blank" className="px-4 py-2 bg-pink-500 text-white rounded-full text-xs font-bold">Instagram Working</a><a href={fbUrl} target="_blank" className="px-4 py-2 bg-blue-600 text-white rounded-full text-xs font-bold">Facebook Working</a><a href="/teacher" className="px-4 py-2 bg-black text-white rounded-full text-xs">DM Teacher</a></div></div></div>)
}
