import Link from "next/link";
export default function Home(){
return(
<div className="max-w-[1280px] mx-auto px-6 py-12">
<div className="grid md:grid-cols-2 gap-12 items-center">
<div>
<div className="inline-flex items-center gap-2 bg-[#0A1931] text-white border-2 border-[#0A0A0A] px-4 py-1.5 rounded-full text-[11px] font-bold tracking-wide shadow-[3px_3px_0px_0px_#0A0A0A]"><span className="w-2 h-2 bg-[#FFCC00] rounded-full"></span>FIITJEE INSPIRED COLORS • NOT BLACK & WHITE</div>
<h1 className="mt-6 text-[44px] md:text-[60px] font-[900] leading-[0.85] tracking-tight">Understand your true potential, not just your <span className="bg-[#FFCC00] px-2 border-2 border-[#0A0A0A]">marks.</span></h1>
<p className="mt-5 text-[15px] text-[#4B4B4B] leading-relaxed max-w-[520px]">Full papers in one go, personal twin that tracks your mistakes, time, rank prediction and whether you need professional coaching like FIITJEE.</p>
<div className="mt-8 flex gap-3"><Link href="/auth/student" className="fiitjee-btn-primary">Start practicing - it's free</Link><Link href="/twin" className="fiitjee-btn-navy">See how it works</Link></div>
<div className="mt-8 flex gap-2 text-[11px]"><span className="bg-[#FFCC00] border-2 border-[#0A0A0A] px-3 py-1 rounded-full font-bold">Yellow #FFCC00</span><span className="bg-[#0A1931] text-white border-2 border-[#0A0A0A] px-3 py-1 rounded-full font-bold">Navy #0A1931</span><span className="bg-black text-white border-2 border-[#0A0A0A] px-3 py-1 rounded-full font-bold">Black + White</span></div>
</div>
<div className="space-y-4">
<div className="fiitjee-card p-6"><div className="flex justify-between"><span className="font-black">Complete your profile</span><span className="w-7 h-7 bg-[#FFCC00] border-2 border-black rounded-full flex items-center justify-center text-[12px]">🎓</span></div><div className="text-[13px] text-[#6B6B6B] mt-2">Your school, address, contact and parent details. Takes 2 minutes. Personalizes your practice.</div></div>
<div className="fiitjee-navy p-6 rounded-[20px]"><div className="flex justify-between"><span className="font-black text-[#FFCC00]">Practice full paper in one go</span><span className="bg-[#FFCC00] text-black text-[10px] font-black px-2 py-1 rounded-full border-2 border-black">90 QUESTIONS</span></div><div className="text-[13px] text-white/70 mt-2">90 questions, 360 marks, 180 minutes. Timer, question list 1-90. Like real FIITJEE test. NEET 180 too.</div></div>
<div className="fiitjee-card p-6 bg-[#FFCC00]"><div className="font-black">Your personal twin - 14 layers</div><div className="text-[13px] text-[#0A0A0A]/80 mt-2">True score vs your score, where time went, mistakes you repeat, rank prediction, coaching recommendation.</div></div>
</div>
</div>
<div className="mt-20">
<div className="flex items-center gap-3"><div className="w-1 h-8 bg-[#FFCC00] border-2 border-black"></div><h2 className="text-[24px] font-black">Your twin has 14 layers - FIITJEE colors premium</h2></div>
<div className="mt-6 grid md:grid-cols-3 gap-6">
<div className="fiitjee-card p-6"><div className="w-8 h-8 bg-[#0A1931] text-white rounded-full flex items-center justify-center text-[11px] font-black border-2 border-black">01</div><div className="font-black mt-3">How you take tests</div><div className="mt-2 grid grid-cols-2 gap-2 text-[11px]">{[["Knowledge","88"],["Speed","72"],["Accuracy","84"],["Consistency","91"]].map(([k,v])=><div key={k as string} className="bg-[#FFFBEB] border-2 border-black rounded-full px-3 py-1.5 flex justify-between"><span className="font-bold">{k}</span><b>{v}</b></div>)}</div></div>
<div className="fiitjee-navy p-6 rounded-[20px]"><div className="flex items-center gap-2"><div className="w-8 h-8 bg-[#FFCC00] text-black rounded-full flex items-center justify-center text-[11px] font-black border-2 border-black">02</div><span className="text-[11px] font-bold tracking-wide text-white/60">TRUE VS CURRENT</span></div><div className="mt-5 grid grid-cols-3 gap-2 text-center"><div className="border-2 border-white/20 rounded-2xl p-3"><div className="text-[10px] text-white/60">YOU SCORED</div><div className="text-[24px] font-black">162</div></div><div className="bg-[#FFCC00] text-black border-2 border-black rounded-2xl p-3"><div className="text-[10px] font-bold">YOU KNOW</div><div className="text-[24px] font-black">184</div></div><div className="bg-white text-black border-2 border-black rounded-2xl p-3"><div className="text-[10px]">CAN GAIN</div><div className="text-[20px] font-black">12-19</div></div></div></div>
<div className="fiitjee-card p-6 bg-[#FFCC00]"><div className="w-8 h-8 bg-black text-white rounded-full flex items-center justify-center text-[11px] font-black">09</div><div className="font-black mt-3">Where you lose marks</div><div className="mt-3 space-y-2">{[{l:"Calculation",v:24},{l:"Concept",v:19},{l:"Careless",v:17}].map((d:any)=><div key={d.l} className="flex items-center gap-2 text-[12px]"><span className="w-[70px] font-bold">{d.l}</span><div className="flex-1 bg-black/10 h-2 rounded-full border border-black"><div className="h-2 bg-black rounded-full" style={{width:d.v*3+"%"}}></div></div><span className="font-black">{d.v}%</span></div>)}</div></div>
</div>
</div>
</div>
)
}
