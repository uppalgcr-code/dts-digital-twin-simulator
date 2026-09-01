"use client";
import { useState } from "react";
import { useRouter } from "next/navigation";

export default function StudentLogin(){
  const router=useRouter();
  const [form,setForm]=useState({name:"",email:"",phone:"",city:"",address:"",school:"",rollNo:"",parentName:"",parentPhone:""});
  const [showOTP,setShowOTP]=useState(false);
  const [otp,setOtp]=useState("");

  function save(method:string){
    try{
      const all=JSON.parse(localStorage.getItem("dts_all_students")||"[]");
      const entry={...form,provider:method,createdAt:new Date().toISOString()};
      all.push(entry);
      localStorage.setItem("dts_all_students",JSON.stringify(all));
      localStorage.setItem("dts_student",JSON.stringify({form:entry,verified:true,completed:true}));
      router.push("/profile/me");
    }catch(e){
      alert("Please enable storage");
    }
  }

  function handleOTP(){
    if(!form.name||!form.phone||!form.school||!form.address||!form.parentName||!form.parentPhone){
      alert("Please fill required fields");
      return;
    }
    setShowOTP(true);
  }

  return(
    <div className="max-w-[720px] mx-auto px-6 py-10">
      <h1 className="text-[28px] font-black text-center">Create your student profile</h1>
      <p className="text-[13px] text-[#6B6B6B] text-center mt-2">Login with Google or Facebook and start practicing.</p>
      <div className="mt-8 grid md:grid-cols-2 gap-3">
        <button onClick={()=>save("Google")} className="bg-white border-2 border-black py-3 rounded-full font-black text-[13px]">Continue with Google</button>
        <button onClick={()=>save("Facebook")} className="bg-[#1877F2] text-white border-2 border-black py-3 rounded-full font-black text-[13px]">Continue with Facebook</button>
      </div>
      <div className="mt-8 card p-6">
        <div className="grid md:grid-cols-2 gap-4">
          <div><label className="text-[11px] font-black">Full name *</label><input value={form.name} onChange={e=>setForm({...form,name:e.target.value})} className="w-full mt-1 border-2 border-black rounded-xl px-3 py-2.5 text-[13px]"/></div>
          <div><label className="text-[11px] font-black">Email *</label><input value={form.email} onChange={e=>setForm({...form,email:e.target.value})} className="w-full mt-1 border-2 border-black rounded-xl px-3 py-2.5 text-[13px]"/></div>
          <div><label className="text-[11px] font-black">Phone *</label><input value={form.phone} onChange={e=>setForm({...form,phone:e.target.value})} className="w-full mt-1 border-2 border-black rounded-xl px-3 py-2.5 text-[13px]"/></div>
          <div><label className="text-[11px] font-black">City *</label><input value={form.city} onChange={e=>setForm({...form,city:e.target.value})} className="w-full mt-1 border-2 border-black rounded-xl px-3 py-2.5 text-[13px]"/></div>
          <div className="md:col-span-2"><label className="text-[11px] font-black">Full address *</label><input value={form.address} onChange={e=>setForm({...form,address:e.target.value})} className="w-full mt-1 border-2 border-black rounded-xl px-3 py-2.5 text-[13px]"/></div>
          <div><label className="text-[11px] font-black">School *</label><input value={form.school} onChange={e=>setForm({...form,school:e.target.value})} className="w-full mt-1 border-2 border-black rounded-xl px-3 py-2.5 text-[13px]"/></div>
          <div><label className="text-[11px] font-black">Roll no *</label><input value={form.rollNo} onChange={e=>setForm({...form,rollNo:e.target.value})} className="w-full mt-1 border-2 border-black rounded-xl px-3 py-2.5 text-[13px]"/></div>
          <div><label className="text-[11px] font-black">Parent name *</label><input value={form.parentName} onChange={e=>setForm({...form,parentName:e.target.value})} className="w-full mt-1 border-2 border-black rounded-xl px-3 py-2.5 text-[13px]"/></div>
          <div><label className="text-[11px] font-black">Parent phone *</label><input value={form.parentPhone} onChange={e=>setForm({...form,parentPhone:e.target.value})} className="w-full mt-1 border-2 border-black rounded-xl px-3 py-2.5 text-[13px]"/></div>
        </div>
        <button onClick={handleOTP} className="mt-6 w-full btn-primary">Continue with OTP</button>
      </div>
      {showOTP && (
        <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 p-6">
          <div className="bg-white border-2 border-black rounded-[20px] p-8 max-w-[400px] w-full">
            <h3 className="font-black text-center">Enter OTP - Use 123456</h3>
            <input value={otp} onChange={e=>setOtp(e.target.value)} placeholder="123456" className="w-full mt-4 border-2 border-black rounded-xl px-4 py-3 text-center font-black"/>
            <div className="mt-4 flex gap-3">
              <button onClick={()=>setShowOTP(false)} className="flex-1 border-2 border-black py-3 rounded-full font-black">Cancel</button>
              <button onClick={()=>{if(otp==="123456"){save("OTP");}else{alert("Use 123456");}}} className="flex-1 bg-[#FFCC00] border-2 border-black py-3 rounded-full font-black">Verify</button>
            </div>
          </div>
        </div>
      )}
    </div>
  )
}
