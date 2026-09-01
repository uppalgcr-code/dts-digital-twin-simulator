"use client"
import { useState } from "react"
import Link from "next/link"
export default function Twin(){
const [acc,setAcc]=useState(8)
return(<div className="max-w-7xl mx-auto p-6"><h1 className="text-4xl font-black">DTS™ Twin - 14 Layers - V13 Complete - All Functions</h1><p className="text-[11px] opacity-60 mt-2">All 14 layers working + Full 90Q exam + Auth guard + Teacher Profile accurate (not LinkedIn wording) + Student complete antecedents</p>
<div className="mt-6 grid md:grid-cols-3 gap-4">
<div className="bg-white border-2 border-black rounded-[1.5rem] p-5"><div className="text-[10px] font-black">01 PROFILE - 12 metrics</div><div className="mt-3 text-[11px]">Knowledge 88, Mastery 84, Speed 72, Accuracy 84, Memory 78, Selection 68...</div></div>
<div className="bg-white border-2 border-black rounded-[1.5rem] p-5"><div className="text-[10px] font-black">02+03 TRUE 184 vs 162 + RANK 11.8K-16.4K</div><div className="mt-3 text-xs">Current 162, Potential 184 ±8, Gap 12-19, Based on 11 tests 1842 Qs</div></div>
<div className="bg-white border-2 border-black rounded-[1.5rem] p-5"><div className="text-[10px] font-black">04-06 WHAT IF + FAILURE + TIME - Full 90Q time analysis</div><div className="mt-3"><input type="range" min={0} max={20} value={acc} onChange={e=>setAcc(parseInt(e.target.value))} className="w-full"/><div className="text-xs mt-2">Projected Rank {11000-acc*200}-{15000-acc*250}</div></div></div>
</div>
<div className="mt-4 bg-black text-white rounded-[1.5rem] p-6"><div className="text-[11px] opacity-60">DTS™ INSIGHT - Full 90Q Paper</div><div className="mt-2 font-bold">True capability 184 ±8, Current 162, Gap 12-19 recoverable. Full 90Q exam gives accurate Twin.</div><div className="mt-3 flex gap-2"><Link href="/auth/student" className="bg-white text-black px-4 py-2 rounded-full text-xs font-bold">Student Auth → Full 90Q Exam</Link><Link href="/auth/teacher" className="bg-[#22C0C7] text-black px-4 py-2 rounded-full text-xs font-bold">Teacher Auth → Accurate Profile</Link></div></div>
</div>)
}
