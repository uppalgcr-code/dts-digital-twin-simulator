import Link from "next/link";
export default function Twin(){
return(
<div className="max-w-[1280px] mx-auto px-6 py-10">
<div className="card-navy p-10"><h1 className="text-[32px] font-black leading-[0.95]">Your personal twin that explains you.</h1><p className="text-[13px] text-white/70 mt-3 max-w-[600px]">How you take tests, true score vs your score, where time went, mistakes you repeat, rank prediction and whether you need coaching.</p><Link href="/papers" className="inline-block mt-6 bg-[#FFCC00] text-black border-2 border-black px-5 py-2.5 rounded-full font-black text-[13px]">Practice full paper</Link></div>
<div className="mt-8 grid md:grid-cols-3 gap-6">
<div className="card p-6"><div className="font-black">How you take tests</div><div className="mt-3 text-[12px] text-[#6B6B6B]">Knowledge 88, Speed 72, Accuracy 84, Consistency 91 — 12 metrics tracked</div></div>
<div className="card-navy p-6"><div className="font-black text-[#FFCC00]">True score vs your score</div><div className="mt-3 text-[24px] font-black">162 vs 184 ±8</div><div className="text-[11px] text-white/60">Gap 12-19 marks recoverable</div><div className="mt-3 text-[12px] bg-white/10 rounded-xl p-3 border border-white/10"><div className="text-[11px] text-white/60">Expected rank</div><div className="font-black">11,800 - 16,400 • 78% confidence</div></div></div>
<div className="card-yellow p-6"><div className="font-black">Where you lose marks</div><div className="mt-3 space-y-2 text-[12px]"><div className="flex justify-between"><span>Calculation</span><span className="font-black">24%</span></div><div className="flex justify-between"><span>Concept</span><span className="font-black">19%</span></div><div className="flex justify-between"><span>Careless</span><span className="font-black">17%</span></div></div></div>
</div>
</div>
)
}
