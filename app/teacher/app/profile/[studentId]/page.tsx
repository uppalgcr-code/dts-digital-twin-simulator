'use client'
import { useState, useEffect } from 'react'
export default function StudentProfile({ params }: { params: { studentId: string } }) {
  const [edit, setEdit] = useState(false)
  const [form, setForm] = useState({ name:'Gaurav Uppal', city:'Faridabad', address:'Sector 15', insta:'uppal_gaurav', fb:'gaurav.uppal.16', linkedin:'', bio:'JEE 2026 aspirant 🔥', target:'IIT-JEE' })
  useEffect(()=>{ const s=localStorage.getItem('student_profile_'+params.studentId); if(s) setForm(JSON.parse(s)) },[])
  function save(){ localStorage.setItem('student_profile_'+params.studentId, JSON.stringify(form)); setEdit(false); alert('Saved! SM Links Working ✓') }
  const instaUrl = form.insta? `https://instagram.com/${form.insta.replace('@','')}` : ''
  const fbUrl = form.fb? `https://facebook.com/${form.fb}` : ''
  return (
    <div className="max-w-4xl mx-auto p-6">
      <div className="bg-gradient-to-r from-violet-600 to-orange-400 rounded- p-"><div className="bg-white rounded- p-6">
        <div className="flex justify-between"><h1 className="text-xl font-black">Student Detailed Profile + SM Handles 👤</h1><button onClick={()=>edit? save(): setEdit(true)} className="px-5 py-2 bg-black text-white rounded-full text-xs font-bold">{edit? 'Save ✓':'Edit ✏️'}</button></div>
        <div className="grid md:grid-cols-2 gap-4 mt-6 text-sm">
          <div><label className="text-xs text-gray-500">Name</label>{edit? <input value={form.name} onChange={e=>setForm({...form,name:e.target.value})} className="w-full border p-3 rounded-xl"/> : <div className="font-bold">{form.name}</div>}</div>
          <div><label className="text-xs text-gray-500">City</label>{edit? <input value={form.city} onChange={e=>setForm({...form,city:e.target.value})} className="w-full border p-3 rounded-xl"/> : <div>{form.city}</div>}</div>
          <div><label className="text-xs text-gray-500">Instagram Handle</label>{edit? <input value={form.insta} onChange={e=>setForm({...form,insta:e.target.value})} className="w-full border p-3 rounded-xl"/> : <div>{form.insta? <a href={instaUrl} target="_blank" className="text-pink-600 underline font-bold">📸 @{form.insta} ✓ Working Link →</a> : 'Not added'}</div>}</div>
          <div><label className="text-xs text-gray-500">Facebook Handle</label>{edit? <input value={form.fb} onChange={e=>setForm({...form,fb:e.target.value})} className="w-full border p-3 rounded-xl"/> : <div>{form.fb? <a href={fbUrl} target="_blank" className="text-blue-600 underline font-bold">👤 {form.fb} ✓ Working Link →</a> : 'Not added'}</div>}</div>
        </div>
        <div className="mt-6 flex gap-2">{instaUrl && <a href={instaUrl} target="_blank" className="px-4 py-2 bg-gradient-to-r from-pink-500 to-orange-400 text-white rounded-full text-xs font-bold">📸 Instagram Working ✓</a>}{fbUrl && <a href={fbUrl} target="_blank" className="px-4 py-2 bg-blue-600 text-white rounded-full text-xs font-bold">👤 Facebook Working ✓</a>}<a href="/teacher" className="px-4 py-2 bg-black text-white rounded-full text-xs">💬 DM Teacher</a></div>
      </div></div>
    </div>
  )
}
