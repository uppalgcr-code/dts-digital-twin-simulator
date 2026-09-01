"use client"
import { useState } from "react"
import { useRouter } from "next/navigation"
export default function StudentLogin(){
const router=useRouter()
const [f,setF]=useState({name:"",email:"",phone:"",city:"",address:"",school:"",className:"12th",rollNo:"",parentName:"",parentPhone:"",insta:"uppal_gaurav",fb:"gaurav.uppal.16"})
const [loading,setLoading]=useState(false)
function save(method:string, data:any){
 const all=JSON.parse(localStorage.getItem("dts_all_students")||"[]")
 const entry={...f,email:data.email||f.email,name:data.name||f.name,provider:method,createdAt:new Date().toISOString()}
 all.push(entry); localStorage.setItem("dts_all_students",JSON.stringify(all)); localStorage.setItem("dts_student",JSON.stringify({form:entry,verified:true,completed:true})); router.push("/profile/me")
}
function google(){ setLoading(true); setTimeout(()=>{save("Google",{name:f.name||"Gaurav Uppal",email:f.email}); setLoading(false)},600) }
function fb(){ setLoading(true); setTimeout(()=>{save("Facebook",{name:f.name||"Gaurav Uppal",email:f.email}); setLoading(false)},600) }
function otp(){
 if(!f.name||!f.phone||!f.school||!f.address||!f.parentName||!f.parentPhone){alert("Please fill required fields"); return}
 const c=prompt("OTP - Use 123456"); if(c==="123456") save("OTP",{name:f.name,email:f.email}); else alert("Use 123456")
}
return(
<div className="max-w-[720px] mx-auto px-6 py-10">
<div className="text-center"><div className="inline-flex bg-[#FFCC00] border-2 border-black px-4 py-1 rounded-full text-[11px] font-black">FIITJEE COLORS • STUDENT LOGIN</div><h1 className="mt-4 text-[28px] font-black">Create your student profile</h1><p className="text-[13px] text-[#6B6B6B] mt-2">Login with Google or Facebook — FIITJEE Yellow + Navy design — Not black & white</p></div>
<div className="mt-8 grid md:grid-cols-2 gap-3">
<button onClick={google} disabled={loading} className="bg-white border-2 border-black py-3 rounded-full font-black text-[13px] shadow-[4px_4px_0px_0px_#0A0A0A] flex items-center justify-center gap-2"><span className="w-5 h-5 bg-[#4285F4] text-white rounded-full flex items-center justify-center text-[10px] font-bold">G</span>Continue with Google</button>
<button onClick={fb} disabled={loading} className="bg-[#1877F2] text-white border-2 border-black py-3 rounded-full font-black text-[13px] shadow-[4px_4px_0px_0px_#0A0A0A]">Continue with Facebook</button>
</div>
<div className="mt-8 fiitjee-card p-6 bg-white">
<div className="grid md:grid-cols-2 gap-4">
<div><label className="text-[11px] font-black">Full name *</label><input value={f.name} onChange={e=>setF({...f,name:e.target.value})} placeholder="Gaurav Uppal" className="w-full mt-1 border-2 border-black rounded-xl px-3 py-2.5 text-[13px]"/></div>
<div><label className="text-[11px] font-black">Email *</label><input value={f.email} onChange={e=>setF({...f,email:e.target.value})} placeholder="you@example.com" className="w-full mt-1 border-2 border-black rounded-xl px-3 py-2.5 text-[13px]"/></div>
<div><label className="text-[11px] font-black">Phone *</label><input value={f.phone} onChange={e=>setF({...f,phone:e.target.value})} className="w-full mt-1 border-2 border-black rounded-xl px-3 py-2.5 text-[13px]"/></div>
<div><label className="text-[11px] font-black">City *</label><input value={f.city} onChange={e=>setF({...f,city:e.target.value})} className="w-full mt-1 border-2 border-black rounded-xl px-3 py-2.5 text-[13px]"/></div>
<div className="md:col-span-2"><label className="text-[11px] font-black">Full address *</label><input value={f.address} onChange={e=>setF({...f,address:e.target.value})} className="w-full mt-1 border-2 border-black rounded-xl px-3 py-2.5 text-[13px]"/></div>
<div><label className="text-[11px] font-black">School *</label><input value={f.school} onChange={e=>setF({...f,school:e.target.value})} className="w-full mt-1 border-2 border-black rounded-xl px-3 py-2.5 text-[13px]"/></div>
<div><label className="text-[11px] font-black">Roll no *</label><input value={f.rollNo} onChange={e=>setF({...f,rollNo:e.target.value})} className="w-full mt-1 border-2 border-black rounded-xl px-3 py-2.5 text-[13px]"/></div>
<div><label className="text-[11px] font-black">Parent name *</label><input value={f.parentName} onChange={e=>setF({...f,parentName:e.target.value})} className="w-full mt-1 border-2 border-black rounded-xl px-3 py-2.5 text-[13px]"/></div>
<div><label className="text-[11px] font-black">Parent phone *</label><input value={f.parentPhone} onChange={e=>setF({...f,parentPhone:e.target.value})} className="w-full mt-1 border-2 border-black rounded-xl px-3 py-2.5 text-[13px]"/></div>
</div>
<div className="mt-6"><button onClick={otp} className="w-full fiitjee-btn-primary">Continue with OTP - 123456</button></div>
</div>
</div>
)
}
