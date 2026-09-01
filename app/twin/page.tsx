import Link from "next/link";
export default function Twin(){
  return(
    <div className="max-w-[1280px] mx-auto px-6 py-10">
      <div className="card-navy p-10"><h1 className="text-[32px] font-black">Your personal twin</h1><p className="text-[13px] text-white/70 mt-2">True potential, time spent, mistakes, rank, coaching recommendation.</p><Link href="/papers" className="inline-block mt-6 bg-[#FFCC00] text-black border-2 border-black px-5 py-2.5 rounded-full font-black text-[13px]">Practice full paper</Link></div>
    </div>
  )
}
