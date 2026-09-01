import Link from "next/link";
export default function Home(){
return(
<div className="max-w-[1280px] mx-auto px-6 py-12">
<div className="grid md:grid-cols-2 gap-12 items-center">
<div>
<h1 className="text-[44px] md:text-[56px] font-[800] leading-[0.9] tracking-tight">Understand your true potential, not just your marks.</h1>
<p className="mt-4 text-[15px] text-[#6B6B6B] leading-relaxed max-w-[480px]">Full papers in one go, personal twin that tracks your mistakes, time, rank prediction and whether you need professional coaching.</p>
<div className="mt-8 flex gap-3"><Link href="/auth/student" className="bg-black text-white px-6 py-3 rounded-full font-semibold text-[14px]">Start practicing - it's free</Link><Link href="/twin" className="border border-[#E8E6E1] px-6 py-3 rounded-full font-semibold text-[14px]">See how it works</Link></div>
</div>
<div className="space-y-4">
<div className="card p-6"><div className="font-semibold">Complete your profile</div><div className="text-[13px] text-[#6B6B6B] mt-2">Your school, address, contact and parent details. Takes 2 minutes. Needed to personalize your practice and share progress.</div></div>
<div className="card p-6 bg-black text-white border-black"><div className="font-semibold">Practice full paper in one go</div><div className="text-[13px] text-white/70 mt-2">90 questions, 360 marks, 180 minutes. Timer, question list 1-90, previous/next. Like real exam. NEET 180 questions too.</div></div>
<div className="card p-6"><div className="font-semibold">Your personal twin - 14 layers</div><div className="text-[13px] text-[#6B6B6B] mt-2">True score vs your score, where time went, mistakes you repeat, rank prediction, coaching recommendation.</div></div>
</div>
</div>
<div className="mt-20 grid md:grid-cols-3 gap-5">
<div className="card p-6"><div className="text-[11px] text-[#9B9B9B] font-semibold tracking-wide">TRUE POTENTIAL</div><div className="text-[28px] font-bold mt-1">184 <span className="text-[14px] font-normal text-[#9B9B9B]">±8</span></div><div className="text-[12px] text-[#6B6B6B]">What you actually know</div></div>
<div className="card p-6 bg-black text-white border-black"><div className="text-[11px] text-white/60 font-semibold tracking-wide">CURRENT SCORE</div><div className="text-[28px] font-bold mt-1">162</div><div className="text-[12px] text-white/60">What you scored</div></div>
<div className="card p-6 bg-[#FEF3C7] border-[#FDE68A]"><div className="text-[11px] text-[#92400E] font-semibold tracking-wide">YOU CAN GAIN BACK</div><div className="text-[28px] font-bold mt-1">12-19</div><div className="text-[12px] text-[#92400E]/80">marks, not 20 chapters</div></div>
</div>
</div>
)
}
