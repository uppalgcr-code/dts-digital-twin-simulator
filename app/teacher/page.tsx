'use client'
import { useState, useEffect } from 'react'
export default function TeacherPortal() {
  const [verified, setVerified] = useState(false)
  const [profile, setProfile] = useState({ name:'Rahul Sharma', title:'IIT JEE Physics Expert | 10 Yrs | Allen Kota', about:'Ex-IIT Bombay. Helped 2000+ students crack JEE. Specialized in Mechanics.', experience:'Senior Faculty Allen Kota (2018-Present) - JEE Advanced Physics | Resonance (2014-2018)', education:'B.Tech IIT Bombay 2012 | M.Sc Physics 2014 | GATE AIR 45', achievements:'Best Teacher Award 2023 | 2000+ Selections', email:'', phone:'', insta:'', linkedin:'', youtube:'', resumeUrl:'' })
  const [problem, setProblem] = useState({ title:'', desc:'', ans:'', exam:'IIT-JEE' })
  const [doubts, setDoubts] = useState([{id:1, student:'Aarav Sharma', q:'Sir integration doubt Q5 from JEE 2024?', exam:'JEE'}, {id:2, student:'Priya', q:'NEET Bio DNA replication?', exam:'NEET'}])
  useEffect(()=>{ const p=localStorage.getItem('teacher_linkedin_full'); if(p) setProfile(JSON.parse(p)); setVerified(localStorage.getItem('teacher_verified')==='true') },[])
  function saveResume(){ localStorage.setItem('teacher_linkedin_full', JSON.stringify(profile)); alert('LinkedIn Resume Saved! ✓') }
  function verifyOTP(){ const code=prompt('Enter OTP (use 123456)'); if(code==='123456'){ localStorage.setItem('teacher_verified','true'); setVerified(true); alert('Verified via OTP ✓') } else alert('Use 123456') }
  function verifySM(){ localStorage.setItem('teacher_verified','true'); setVerified(true); alert('Verified via Google ✓') }
  function postProblem(){ if(!verified) return alert('Verify via OTP or Google first!'); alert('Problem Posted! Students can Rate ⭐ & Comment 💬'); }
  return (
    <div className="max-w-7xl mx-auto p-6">
      <div className="flex justify-between items-center"><h1 className="text-3xl font-black">Teacher Portal - LinkedIn Resume</h1><div className="flex gap-2">{verified? <span className="px-4 py-2 bg-green-500 text-white rounded-full text-xs font-bold">✓ Verified Teacher</span> : <><button onClick={verifyOTP} className="px-3 py-2 bg-black text-white rounded-full text-xs">Verify OTP</button><button onClick={verifySM} className="px-3 py-2 bg-blue-600 text-white rounded-full text-xs">Google Login</button></>}</div></div>
      <div className="grid md:grid-cols-3 gap-6 mt-6">
        <div className="md:col-span-2 space-y-4">
          <div className="bg-white border-2 border-black rounded-[1.5rem] p-6 shadow-[4px_4px_0px_0px_black]">
            <h3 className="font-black text-lg">LinkedIn Digital Resume 💼 (Like LinkedIn)</h3>
            <input value={profile.name} onChange={e=>setProfile({...profile,name:e.target.value})} placeholder="Full Name" className="w-full border p-3 rounded-xl text-sm mt-3"/>
            <input value={profile.title} onChange={e=>setProfile({...profile,title:e.target.value})} placeholder="Title e.g., IIT JEE Physics Expert | 10 Yrs" className="w-full border p-3 rounded-xl text-sm mt-2"/>
            <textarea value={profile.about} onChange={e=>setProfile({...profile,about:e.target.value})} placeholder="About - Detailed experience" className="w-full border p-3 rounded-xl text-sm mt-2 h-20"/>
            <textarea value={profile.experience} onChange={e=>setProfile({...profile,experience:e.target.value})} placeholder="Detailed Experience - Like LinkedIn work history" className="w-full border p-3 rounded-xl text-sm mt-2 h-20"/>
            <textarea value={profile.education} onChange={e=>setProfile({...profile,education:e.target.value})} placeholder="Complete Qualification - Degree, Year, Field" className="w-full border p-3 rounded-xl text-sm mt-2 h-16"/>
            <input value={profile.achievements} onChange={e=>setProfile({...profile,achievements:e.target.value})} placeholder="Achievements" className="w-full border p-3 rounded-xl text-sm mt-2"/>
            <button onClick={saveResume} className="w-full bg-black text-white py-3 rounded-full text-sm font-bold mt-3">Save LinkedIn Resume → Publish</button>
          </div>
          <div className="bg-white border-2 border-black rounded-[1.5rem] p-5 shadow-[4px_4px_0px_0px_black]">
            <h3 className="font-black">Create Problem + Answer ✍️ (Students Rate ⭐ & Comment 💬)</h3>
            <input value={problem.title} onChange={e=>setProblem({...problem,title:e.target.value})} placeholder="Problem Title" className="w-full border p-3 rounded-xl text-sm mt-2"/>
            <textarea value={problem.desc} onChange={e=>setProblem({...problem,desc:e.target.value})} placeholder="Full Question, Options" className="w-full border p-3 rounded-xl text-sm mt-2 h-24"/>
            <button onClick={postProblem} className="w-full bg-violet-600 text-white py-3 rounded-full text-sm font-bold mt-3">Post Problem →</button>
          </div>
        </div>
        <div className="space-y-4">
          <div className="bg-black text-white p-5 rounded-[1.5rem]"><h4 className="font-bold text-sm">Verification Required 🔒</h4><p className="text-xs opacity-70 mt-2">Teacher must verify via OTP or SM Login to prevent fake teachers.</p><div className="mt-3 text-xs font-bold">Status: {verified? '✓ Verified Teacher':'❌ Not Verified'}</div></div>
          <div className="bg-yellow-50 border-2 border-black rounded-[1.5rem] p-5"><h4 className="font-black text-sm">Doubts + DMs 💬</h4><div className="mt-3 space-y-2">{doubts.map(d=><div key={d.id} className="bg-white p-3 rounded-xl text-xs"><b>{d.student}:</b> {d.q} <button onClick={()=>alert('Reply sent via DM!')} className="block mt-2 bg-black text-white px-3 py-1 rounded-full">Reply & Clear Doubt</button></div>)}</div></div>
        </div>
      </div>
    </div>
  )
}
