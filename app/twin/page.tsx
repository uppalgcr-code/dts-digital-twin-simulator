import Link from "next/link";
export default function Twin(){
return(
<div className="max-w-[1280px] mx-auto px-6 py-10">
<div className="card p-10 bg-black text-white border-black"><h1 className="text-[32px] font-bold leading-[0.95]">Your personal twin - 14 layers that explain you.</h1><p className="text-[13px] text-white/70 mt-3 max-w-[600px]">How you take tests, true score vs your score, where time went, mistakes you repeat, rank prediction and whether you need coaching.</p><Link href="/papers" className="inline-block mt-6 bg-white text-black px-5 py-2.5 rounded-full text-[13px] font-semibold">Practice full paper</Link></div>
<div className="mt-8 grid md:grid-cols-3 gap-5">
<div className="card p-6"><div className="font-semibold">How you take tests</div><div className="mt-3 text-[12px] text-[#6B6B6B]">Knowledge 88, Speed 72, Accuracy 84, Consistency 91 — 12 metrics tracked</div></div>
<div className="card p-6 bg-black text-white border-black"><div className="font-semibold">True score vs your score</div><div className="mt-3 text-[24px] font-bold">162 vs 184 ±8</div><div className="text-[11px] text-white/60">Gap 12-19 marks recoverable</div><div className="mt-3 text-[12px] bg-white/10 rounded-xl p-3"><div className="text-[11px] text-white/60">Expected rank</div><div className="font-bold">11,800 - 16,400 • 78% confidence</div></div></div>
<div className="card p-6"><div className="font-semibold">Where you lose marks</div><div className="mt-3 space-y-2 text-[12px]">{[{l:"Calculation",v:24},{l:"Concept",v:19},{l:"Careless",v:17}].map((d:any)=><div key={d.l} className="flex items-center gap-2"><span className="w-[80px]">{d.l}</span><div className="flex-1 bg-black/10 h-1.5 rounded-full"><div className="h-1.5 bg-black rounded-full" style={{width:d.v*3+"%"}}></div></div><span className="font-bold">{d.v}%</span></div>)}</div></div>
</div>
</div>
)
}
