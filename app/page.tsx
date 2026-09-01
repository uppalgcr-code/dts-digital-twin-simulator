import Link from "next/link";
export default function Home(){
return(
<div className="max-w-[1280px] mx-auto px-6 py-12">
<div className="grid md:grid-cols-2 gap-12 items-center">
<div>
<h1 className="text-[44px] md:text-[60px] font-[900] leading-[0.85] tracking-tight">Understand your true potential, not just your <span className="bg-[#FFCC00] px-2 border-2 border-black">marks.</span></h1>
<p className="mt-5 text-[15px] text-[#4B4B4B] leading-relaxed max-w-[520px]">Full papers in one go, personal twin that tracks your mistakes, time, rank and whether you need professional coaching.</p>
<div className="mt-8 flex gap-3"><Link href="/auth/student" className="btn-primary">Start practicing - it's free</Link><Link href="/twin" className="btn-navy">See how it works</Link></div>
</div>
<div className="space-y-4">
<div className="card p-6"><div className="font-black">Complete your profile</div><div className="text-[13px] text-[#6B6B6B] mt-2">Your school, address, contact and parent details. Takes 2 minutes. Needed to personalize your practice.</div></div>
<div className="card-navy p-6"><div className="font-black text-[#FFCC00]">Practice full paper in one go</div><div className="text-[13px] text-white/70 mt-2">90 questions, 360 marks, 180 minutes. Timer, question list 1 to 90. Like real exam.</div></div>
<div className="card-yellow p-6"><div className="font-black">Your personal twin</div><div className="text-[13px] text-black/80 mt-2">True score vs your score, where time went, mistakes you repeat, rank prediction, coaching recommendation.</div></div>
</div>
</div>
<div className="mt-20 grid md:grid-cols-3 gap-6">
<div className="card p-6"><div className="text-[11px] font-bold">TRUE POTENTIAL</div><div className="text-[28px] font-black mt-1">184 <span className="text-[14px] font-normal text-[#6B6B6B]">±8</span></div><div className="text-[12px] text-[#6B6B6B]">What you actually know</div></div>
<div className="card-navy p-6"><div className="text-[11px] text-white/60 font-bold">CURRENT SCORE</div><div className="text-[28px] font-black mt-1">162</div><div className="text-[12px] text-white/60">What you scored</div></div>
<div className="card-yellow p-6"><div className="text-[11px] font-bold">YOU CAN GAIN BACK</div><div className="text-[28px] font-black mt-1">12-19</div><div className="text-[12px]">marks, not 20 chapters</div></div>
</div>
</div>
)
}
