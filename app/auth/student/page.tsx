"use client"
import { useState } from "react"
import { useRouter } from "next/navigation"
export default function StudentLogin(){
const router=useRouter()
const [f,setF]=useState({name:"",email:"",phone:"",city:"",address:"",school:"",className:"12th",rollNo:"",parentName:"",parentPhone:"",insta:"uppal_gaurav",fb:"gaurav.uppal.16",bio:""})
const [loading,setLoading]=useState(false)
function save(method:string, data:any){
 const all=JSON.parse(localStorage.getItem("dts_all_students")||"[]")
 const entry={...f,email:data.email||f.email,name:data.name||f.name,provider:method,createdAt:new Date().toISOString()}
 all.push(entry)
 localStorage.setItem("dts_all_students",JSON.stringify(all))
 localStorage.setItem("dts_student",JSON.stringify({form:entry,verified:true,completed:true}))
 router.push("/profile/me")
}
function google(){
 setLoading(true)
 // In production replace with real Google OAuth - for demo we simulate
 setTimeout(()=>{save("Google",{name:f.name||"Gaurav Uppal",email:f.email||"gaurav@example.com"}); setLoading(false)}, 600)
}
function facebook(){
 setLoading(true)
 setTimeout(()=>{save("Facebook",{name:f.name||"Gaurav Uppal",email:f.email||"gaurav@example.com"}); setLoading(false)}, 600)
}
function otp(){
 if(!f.name||!f.phone||!f.school||!f.address||!f.parentName||!f.parentPhone){alert("Please fill name, phone, school, address, parent name and parent phone"); return}
 const code=prompt("Enter OTP - Use 123456 for demo")
 if(code==="123456"){ save("OTP",{name:f.name,email:f.email}) } else alert("Use 123456")
}
return(
<div className="max-w-[720px] mx-auto px-6 py-10">
<h1 className="text-[28px] font-bold tracking-tight text-center">Create your student profile</h1>
<p className="text-[13px] text-[#6B6B6B] text-center mt-2">Login with Google or Facebook, complete your school details and start practicing full papers.</p>
<div className="mt-8 grid md:grid-cols-2 gap-3">
<button onClick={google} disabled={loading} className="bg-white border border-[#E8E6E1] py-3 rounded-full font-semibold text-[13px] flex items-center justify-center gap-2 hover:bg-[#F5F3EF]"><span className="w-5 h-5 bg-[#4285F4] text-white rounded-full flex items-center justify-center text-[10px] font-bold">G</span>Continue with Google</button>
<button onClick={facebook} disabled={loading} className="bg-[#1877F2] text-white py-3 rounded-full font-semibold text-[13px] hover:bg-[#166FE5]">Continue with Facebook</button>
</div>
<div className="mt-8 card p-6">
<div className="grid md:grid-cols-2 gap-4">
<div><label className="text-[11px] font-semibold text-[#6B6B6B]">Full name *</label><input value={f.name} onChange={e=>setF({...f,name:e.target.value})} placeholder="Gaurav Uppal" className="w-full mt-1.5 border border-[#E8E6E1] rounded-xl px-3 py-2.5 text-[13px]"/></div>
<div><label className="text-[11px] font-semibold text-[#6B6B6B]">Email *</label><input value={f.email} onChange={e=>setF({...f,email:e.target.value})} placeholder="you@example.com" className="w-full mt-1.5 border border-[#E8E6E1] rounded-xl px-3 py-2.5 text-[13px]"/></div>
<div><label className="text-[11px] font-semibold text-[#6B6B6B]">Phone *</label><input value={f.phone} onChange={e=>setF({...f,phone:e.target.value})} placeholder="98XXXXXX21" className="w-full mt-1.5 border border-[#E8E6E1] rounded-xl px-3 py-2.5 text-[13px]"/></div>
<div><label className="text-[11px] font-semibold text-[#6B6B6B]">City *</label><input value={f.city} onChange={e=>setF({...f,city:e.target.value})} placeholder="Faridabad" className="w-full mt-1.5 border border-[#E8E6E1] rounded-xl px-3 py-2.5 text-[13px]"/></div>
<div className="md:col-span-2"><label className="text-[11px] font-semibold text-[#6B6B6B]">Full address *</label><input value={f.address} onChange={e=>setF({...f,address:e.target.value})} placeholder="House no, street, sector, pin code" className="w-full mt-1.5 border border-[#E8E6E1] rounded-xl px-3 py-2.5 text-[13px]"/></div>
<div><label className="text-[11px] font-semibold text-[#6B6B6B]">School *</label><input value={f.school} onChange={e=>setF({...f,school:e.target.value})} placeholder="Delhi Public School" className="w-full mt-1.5 border border-[#E8E6E1] rounded-xl px-3 py-2.5 text-[13px]"/></div>
<div><label className="text-[11px] font-semibold text-[#6B6B6B]">Roll number *</label><input value={f.rollNo} onChange={e=>setF({...f,rollNo:e.target.value})} placeholder="12345" className="w-full mt-1.5 border border-[#E8E6E1] rounded-xl px-3 py-2.5 text-[13px]"/></div>
<div><label className="text-[11px] font-semibold text-[#6B6B6B]">Parent name *</label><input value={f.parentName} onChange={e=>setF({...f,parentName:e.target.value})} placeholder="Father name" className="w-full mt-1.5 border border-[#E8E6E1] rounded-xl px-3 py-2.5 text-[13px]"/></div>
<div><label className="text-[11px] font-semibold text-[#6B6B6B]">Parent phone *</label><input value={f.parentPhone} onChange={e=>setF({...f,parentPhone:e.target.value})} placeholder="Parent phone" className="w-full mt-1.5 border border-[#E8E6E1] rounded-xl px-3 py-2.5 text-[13px]"/></div>
<div><label className="text-[11px] font-semibold text-[#6B6B6B]">Instagram</label><input value={f.insta} onChange={e=>setF({...f,insta:e.target.value})} placeholder="uppal_gaurav" className="w-full mt-1.5 border border-[#E8E6E1] rounded-xl px-3 py-2.5 text-[13px]"/></div>
<div><label className="text-[11px] font-semibold text-[#6B6B6B]">Facebook</label><input value={f.fb} onChange={e=>setF({...f,fb:e.target.value})} placeholder="gaurav.uppal.16" className="w-full mt-1.5 border border-[#E8E6E1] rounded-xl px-3 py-2.5 text-[13px]"/></div>
</div>
<div className="mt-6"><button onClick={otp} className="w-full bg-black text-white py-3 rounded-full font-semibold text-[13px]">Continue with OTP - Use 123456 for demo</button><div className="text-[11px] text-[#9B9B9B] text-center mt-3">Your data is stored securely and can be downloaded as Excel/CSV from Data page.</div></div>
</div>
</div>
)
}
