"use client"
import { useState } from "react"
import { useRouter } from "next/navigation"
export default function StudentLogin(){
const router=useRouter()
const [f,setF]=useState({name:"",email:"",phone:"",city:"",address:"",school:"",className:"12th",rollNo:"",parentName:"",parentPhone:"",insta:"",fb:""})
const [showOTP,setShowOTP]=useState(false)
const [otp,setOtp]=useState("")
function save(method:string, data:any){
  try{
    const all=JSON.parse(localStorage.getItem("dts_all_students")||"[]")
    const entry={...f,email:data.email||f.email,name:data.name||f.name,provider:method,createdAt:new Date().toISOString()}
    all.push(entry); localStorage.setItem("dts_all_students",JSON.stringify(all)); localStorage.setItem("dts_student",JSON.stringify({form:entry,verified:true,completed:true})); router.push("/profile/me")
  }catch{ alert("Please enable storage and try again") }
}
function google(){ save("Google",{name:f.name||"Gaurav Uppal",email:f.email}) }
function facebook(){ save("Facebook",{name:f.name||"Gaurav Uppal",email:f.email}) }
function requestOTP(){
  if(!f.name||!f.phone||!f.school||!f.address||!f.parentName||!f.parentPhone){alert("Please fill name, phone, school, address, parent name, parent phone"); return}
  setShowOTP(true)
}
function verifyOTP(){ if(otp==="123456"){ save("OTP",{name:f.name,email:f.email}); setShowOTP(false) } else alert("Use 123456 for demo") }
return(
<div className="max-w-[720px] mx-auto px-6 py-10">
<div className="text-center"><h1 className="text-[28px] font-black">Create your student profile</h1><p className="text-[13px] text-[#6B6B6B] mt-2">Login with Google or Facebook, complete your school details and start practicing full papers.</p></div>
<div className="mt-8 grid md:grid-cols-2 gap-3">
<button onClick={google} className="bg-white border-2 border-black py-3 rounded-full font-black text-[13px] shadow-[4px_4px_0px_0px_black] flex items-center justify-center gap-2"><span className="w-5 h-5 bg-[#4285F4] text-white rounded-full flex items-center justify-center text-[10px] font-bold">G</span>Continue with Google</button>
<button onClick={facebook} className="bg-[#1877F2] text-white border-2 border-black py-3 rounded-full font-black text-[13px] shadow-[4px_4px_0px_0px_black]">Continue with Facebook</button>
</div>
<div className="mt-8 card p-6 bg-white">
<div className="grid md:grid-cols-2 gap-4">
<div><label className="text-[11px] font-black">Full name *</label><input value={f.name} onChange={e=>setF({...f,name:e.target.value})} placeholder="Gaurav Uppal" className="w-full mt-1 border-2 border-black rounded-xl px-3 py-2.5 text-[13px]"/></div>
<div><label className="text-[11px] font-black">Email *</label><input value={f.email} onChange={e=>setF({...f,email:e.target.value})} placeholder="you@example.com" className="w-full mt-1 border-2 border-black rounded-xl px-3 py-2.5 text-[13px]"/></div>
<div><label className="text-[11px] font-black">Phone *</label><input value={f.phone} onChange={e=>setF({...f,phone:e.target.value})} placeholder="98XXXXXX21" className="w-full mt-1 border-2 border-black rounded-xl px-3 py-2.5 text-[13px]"/></div>
<div><label className="text-[11px] font-black">City *</label><input value={f.city} onChange={e=>setF({...f,city:e.target.value})} placeholder="Faridabad" className="w-full mt-1 border-2 border-black rounded-xl px-3 py-2.5 text-[13px]"/></div>
<div className="md:col-span-2"><label className="text-[11px] font-black">Full address *</label><input value={f.address} onChange={e=>setF({...f,address:e.target.value})} placeholder="House no, street, sector, pin code" className="w-full mt-1 border-2 border-black rounded-xl px-3 py-2.5 text-[13px]"/></div>
<div><label className="text-[11px] font-black">School *</label><input value={f.school} onChange={e=>setF({...f,school:e.target.value})} placeholder="Delhi Public School" className="w-full mt-1 border-2 border-black rounded-xl px-3 py-2.5 text-[13px]"/></div>
<div><label className="text-[11px] font-black">Roll number *</label><input value={f.rollNo} onChange={e=>setF({...f,rollNo:e.target.value})} placeholder="12345" className="w-full mt-1 border-2 border-black rounded-xl px-3 py-2.5 text-[13px]"/></div>
<div><label className="text-[11px] font-black">Parent name *</label><input value={f.parentName} onChange={e=>setF({...f,parentName:e.target.value})} placeholder="Father name" className="w-full mt-1 border-2 border-black rounded-xl px-3 py-2.5 text-[13px]"/></div>
<div><label className="text-[11px] font-black">Parent phone *</label><input value={f.parentPhone} onChange={e=>setF({...f,parentPhone:e.target.value})} placeholder="Parent phone" className="w-full mt-1 border-2 border-black rounded-xl px-3 py-2.5 text-[13px]"/></div>
</div>
<div className="mt-6"><button onClick={requestOTP} className="w-full btn-primary">Continue with OTP</button><div className="text-[11px] text-[#9B9B9B] text-center mt-3">Use 123456 for demo. Your data can be downloaded as Excel or CSV.</div></div>
</div>
{showOTP && (
<div className=" inset-0 bg-black/50 backdrop-blur flex items-center justify-center z-50 p-6">
<div className="bg-white border-2 border-black rounded-[20px] shadow-[8px_8px_0px_0px_black] p-8 max-w-[400px] w-full">
<div className="text-center"><div className="w-12 h-12 bg-[#FFCC00] border-2 border-black rounded-full flex items-center justify-center mx-auto font-black">OTP</div><h3 className="mt-4 font-black text-[18px]">Enter OTP</h3><p className="text-[12px] text-[#6B6B6B] mt-1">Use 123456 for demo to verify your phone number</p></div>
<div className="mt-6"><input value={otp} onChange={e=>setOtp(e.target.value)} placeholder="123456" maxLength={6} className="w-full border-2 border-black rounded-xl px-4 py-3 text-center text-[20px] font-black tracking-widest"/></div>
<div className="mt-4 flex gap-3"><button onClick={()=>setShowOTP(false)} className="flex-1 border-2 border-black py-3 rounded-full font-black text-[13px]">Cancel</button><button onClick={verifyOTP} className="flex-1 bg-[#FFCC00] border-2 border-black py-3 rounded-full font-black text-[13px]">Verify</button></div>
</div>
</div>
)}
</div>
)
}
