"use client";
import { useState } from "react";
const mistakeDNA=[{label:"Calculation",value:24,color:"#008E8D"},{label:"Concept",value:19,color:"#13302B"},{label:"Careless",value:17,color:"#22C0C7"},{label:"Misreading",value:14,color:"#F59E0B"},{label:"Time Pressure",value:12,color:"#EF4444"},{label:"Guessing",value:9,color:"#8B5CF6"},{label:"Memory",value:5,color:"#9CA3AF"}];
export default function TwinPage(){
const [physicsAcc,setPhysicsAcc]=useState(8);
const projLow=Math.round(11000-physicsAcc*220);
const projHigh=Math.round(15200-physicsAcc*260);
return(<div className="max-w-7xl mx-auto p-4 md:p-6">
<div className="flex items-center gap-3 flex-wrap"><h1 className="text-3xl md:text-4xl font-black">DTS Twin Simulator</h1><span className="text-[10px] bg-[#22C0C7] text-black px-3 py-1 rounded-full font-black">LIVE V11 PREMIUM</span></div>
<p className="text-[13px] text-gray-500 mt-2">14 intelligence layers. True 184 ±8 vs Current 162. Gap 12-19 marks recoverable.</p>
<div className="mt-6 grid md:grid-cols-12 gap-4">
<div className="md:col-span-4 bg-white border-2 border-black rounded-[1.5rem] p-5 shadow-[4px_4px_0px_0px_black]">
<div className="text-[11px] font-black opacity-60">01 DIGITAL TWIN PROFILE</div>
<div className="mt-4 grid grid-cols-2 gap-2">{[["Knowledge",88],["Mastery",84],["Speed",72],["Accuracy",84],["Memory",78],["Selection",68],["Guessing %",9],["Stress",62],["Time Mgmt",71],["Consistency",91],["Improvement",8],["Temperament",74]].map(([k,v])=><div key={k} className="flex justify-between border rounded-full px-3 py-2 bg-[#FBFCFA] text-[11px]"><span>{k}</span><span className="font-black">{v}</span></div>)}</div>
</div>
<div className="md:col-span-4 bg-white border-2 border-black rounded-[1.5rem] p-5 shadow-[4px_4px_0px_0px_black]">
<div className="text-[11px] font-black opacity-60">02+03 TRUE vs RANK</div>
<div className="mt-4 grid grid-cols-3 gap-2 text-center"><div className="border-2 border-black rounded-2xl p-3"><div className="text-[9px]">CURRENT</div><div className="text-3xl font-black">162</div></div><div className="bg-[#22C0C7]/20 border-2 border-[#22C0C7] rounded-2xl p-3"><div className="text-[9px]">KNOWLEDGE</div><div className="text-3xl font-black">184</div><div className="text-[9px]">±8</div></div><div className="bg-black text-white rounded-2xl p-3"><div className="text-[9px]">GAP</div><div className="text-2xl font-black">12-19</div></div></div>
<div className="mt-3 bg-black text-white rounded-2xl p-4"><div className="text-[10px] opacity-60">PREDICTED RANK</div><div className="font-black">11,800 - 16,400 • 78%</div></div>
</div>
<div className="md:col-span-4 bg-white border-2 border-black rounded-[1.5rem] p-5 shadow-[4px_4px_0px_0px_black]">
<div className="text-[11px] font-black opacity-60">04-06 WHAT IF • FAILURE • TIME</div>
<div className="mt-4"><div className="text-[12px] font-bold">What if Physics +{physicsAcc}%?</div><input type="range" min={0} max={20} value={physicsAcc} onChange={e=>setPhysicsAcc(parseInt(e.target.value))} className="w-full mt-3"/><div className="mt-3 grid grid-cols-2 gap-2"><div className="border rounded-xl p-2 text-[11px]">Current: 18K-24K</div><div className="bg-[#008E8D] text-white rounded-xl p-2 text-[11px]">Projected: {projLow}-{projHigh}</div></div></div>
<div className="mt-4 text-[11px]"><div className="font-black">Time Went: Phy 42m, Chem 38m, Maths 91m (+24m over), Rev 9m</div></div>
</div>
</div>
<div className="mt-4 grid md:grid-cols-3 gap-4">
<div className="bg-white border-2 border-black rounded-[1.5rem] p-5"><div className="text-[11px] font-black">07-08 SELECTION + RE-RUN</div><div className="mt-3 text-[12px]">Actual 168 → Optimal 181 = +13 marks left due to strategy</div></div>
<div className="bg-white border-2 border-black rounded-[1.5rem] p-5"><div className="text-[11px] font-black">09-11 MISTAKE DNA</div><div className="mt-3 space-y-1">{mistakeDNA.map((m)=><div key={m.label} className="flex items-center gap-2 text-[11px]"><span className="w-[80px]">{m.label}</span><div className="flex-1 bg-gray-100 h-2 rounded-full"><div className="h-2 rounded-full" style={{width: m.value*4+"%", background:m.color}}></div></div><span>{m.value}%</span></div>)}</div></div>
<div className="bg-white border-2 border-black rounded-[1.5rem] p-5"><div className="text-[11px] font-black">12-14 X-RAY • TRAJECTORY • READY</div><div className="mt-2 text-[11px]">Health 76/100 • Score 120→162 • Ability 140→173 • Ready 82/100 - Strategy 74%</div></div>
</div>
</div>);
}
