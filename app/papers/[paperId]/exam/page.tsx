"use client";
import { useState, useEffect } from "react";
import Link from "next/link";
import { makeQuestions, calcAnalysis } from "@/lib/data";

export default function Exam({params}:{params:{paperId:string}}){
  const count=params.paperId.includes("neet")?180:90;
  const [qs,setQs]=useState<any[]>([]);
  const [ok,setOk]=useState(false);
  const [checked,setChecked]=useState(false);
  const [idx,setIdx]=useState(0);
  const [ans,setAns]=useState<number[]>([]);
  const [time,setTime]=useState(180*60);
  const [done,setDone]=useState(false);
  const [analysis,setAnalysis]=useState<any>(null);

  useEffect(()=>{
    try{
      setQs(makeQuestions(count));
      setAns(Array(count).fill(-1));
      const s=localStorage.getItem("dts_student");
      if(s){const p=JSON.parse(s); if(p.completed&&p.verified) setOk(true);}
    }catch{}
    setChecked(true);
  },[count]);

  useEffect(()=>{
    if(!ok||done) return;
    const t=setInterval(()=>setTime(v=>{if(v<=1){clearInterval(t); handleSubmit(); return 0;} return v-1;}),1000);
    return()=>clearInterval(t);
  },[ok,done]);

  function handleSubmit(){
    try{
      const result=calcAnalysis(ans,qs,{qs:count});
      setAnalysis(result);
      const all=JSON.parse(localStorage.getItem("dts_all_attempts")||"[]");
      all.push({...result,paperId:params.paperId,createdAt:new Date().toISOString()});
      localStorage.setItem("dts_all_attempts",JSON.stringify(all));
      setDone(true);
    }catch{alert("Error");}
  }

  if(!checked) return <div className="p-6">Loading exam...</div>;
  if(!ok) return <div className="max-w-[720px] mx-auto px-6 py-16 text-center"><h1 className="text-[24px] font-black">Please login to start</h1><Link href="/auth/student" className="inline-block mt-4 btn-primary">Login</Link></div>;
  if(done && analysis){
    return(
      <div className="max-w-[1280px] mx-auto px-6 py-10">
        <h1 className="text-[32px] font-black">Your detailed analysis</h1>
        <div className="mt-8 grid md:grid-cols-4 gap-5">
          <div className="card-navy p-6"><div className="text-[11px] text-white/60 font-bold">YOUR SCORE</div><div className="text-[28px] font-black mt-1">{analysis.score} / {analysis.total}</div></div>
          <div className="card-yellow p-6"><div className="text-[11px] font-black">TRUE POTENTIAL</div><div className="text-[28px] font-black">{analysis.potential}</div></div>
          <div className="card p-6"><div className="text-[11px] font-black">EXPECTED RANK</div><div className="text-[18px] font-black">{analysis.rank}</div></div>
          <div className="card p-6"><div className="text-[11px] font-black">RECOMMENDATION</div><div className="text-[13px] font-black mt-2">{analysis.shouldCoaching.type}</div></div>
        </div>
        <div className="mt-8 flex gap-3"><Link href="/twin" className="btn-navy">See your twin</Link><Link href="/papers" className="btn-primary">Another paper</Link></div>
      </div>
    )
  }
  const m=Math.floor(time/60); const s=time%60; const answered=ans.filter((a:number)=>a!==-1).length;
  return(
    <div className="max-w-[1440px] mx-auto px-4 py-4">
      <div className="sticky top-16 bg-[#0A1931] text-white border-2 border-black rounded-full px-5 py-2.5 flex justify-between items-center">
        <div className="font-bold text-[13px]">Q {idx+1}/{count} • {answered}/{count}</div>
        <div className="flex gap-2"><span className="bg-[#FFCC00] text-black border-2 border-black px-3 py-1 rounded-full text-[12px] font-black">{m}:{s.toString().padStart(2,"0")}</span><button onClick={handleSubmit} className="bg-white text-black border-2 border-black px-4 py-1 rounded-full text-[12px] font-black">Submit</button></div>
      </div>
      <div className="mt-6 grid md:grid-cols-12 gap-5">
        <div className="md:col-span-3 card p-4 h-fit max-h-[80vh] overflow-y-auto"><div className="font-black text-[12px]">Questions</div><div className="mt-3 grid grid-cols-6 gap-1.5">{qs.map((_:any,i:number)=><button key={i} onClick={()=>setIdx(i)} className={`h-8 rounded-full text-[11px] font-black border-2 border-black ${ans[i]!==-1?"bg-[#FFCC00]":"bg-white"} ${idx===i?"ring-2 ring-black":""}`}>{i+1}</button>)}</div></div>
        <div className="md:col-span-9 card p-7"><h2 className="font-bold">{qs[idx]?.q}</h2><div className="mt-5 space-y-2">{qs[idx]?.options.map((o:string,oi:number)=><button key={oi} onClick={()=>{const na=[...ans]; na[idx]=oi; setAns(na);}} className={`w-full text-left border-2 border-black rounded-xl px-4 py-3 font-bold ${ans[idx]===oi?"bg-[#FFCC00]":"bg-white"}`}>{String.fromCharCode(65+oi)}. {o}</button>)}</div><div className="mt-6 flex justify-between"><button onClick={()=>setIdx(Math.max(0,idx-1))} className="border-2 border-black px-4 py-2 rounded-full font-black text-[12px]">Prev</button><button onClick={()=>setIdx(Math.min(count-1,idx+1))} className="bg-[#0A1931] text-white border-2 border-black px-4 py-2 rounded-full font-black text-[12px]">Next</button></div></div>
      </div>
    </div>
  )
}
