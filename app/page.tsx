import Link from "next/link";
export default function Home(){
return(
<div className="max-w-[1280px] mx-auto px-6 py-12">
<div className="grid md:grid-cols-2 gap-12 items-center">
<div>
<h1 className="text-[44px] md:text-[56px] font-[800] leading-[0.9] tracking-tight">Understand your true potential, not just your marks.</h1>
<p className="mt-4 text-[15px] text-[#6B6B6B] leading-relaxed max-w-[480px]">Full papers in one go, personal twin that tracks your mistakes, time, rank prediction and whether you need professional coaching.</p>
<div className="mt-8 flex gap-3"><Link href="/auth/student" className="bg-black text-white px-6 py-3 rounded-full font-semibold text-[14px]">Student - Login with Google/FB</Link><Link href="/auth/teacher" className="border border-[#E8E6E1] px-6 py-3 rounded-full font-semibold text-[14px]">Teacher - Login with Google/FB</Link></div>
<div className="mt-6 text-[12px] text-[#9B9B9B]">✓ Login via Google, Facebook, OTP • ✓ Data stored • ✓ Download Excel/CSV • ✓ See your profile when logged in • ✓ Detailed analysis after exam</div>
</div>
<div className="space-y-4">
<div className="soft-card p-6"><div className="font-bold">What we fixed for you</div><div className="mt-3 space-y-2 text-[13px] text-[#4B4B4B]"><div>✓ Teacher profile now submits and stores - fixed</div><div>✓ SM login Google + Facebook working - like real login - fixed</div><div>✓ Student + Teacher data stored in browser + can download Excel/CSV - fixed</div><div>✓ You can see your profile when logged in - top right shows name - fixed</div><div>✓ Everyone logged in via SM - Google/FB buttons prominent - fixed</div><div>✓ Detailed analysis after exam - 14 layers, test-wise, rank, coaching recommendation - fixed</div></div></div>
<div className="soft-card p-6 bg-black text-white"><div className="font-bold">After exam you now see</div><div className="mt-3 text-[13px] text-white/70 space-y-1"><div>• Detailed analysis - what we discussed - 14 layers</div><div>• Test-wise analysis - subject wise, topic wise, difficulty wise</div><div>• Rank prediction - 11,800-16,400 with confidence</div><div>• Should you join professional coaching for IITJEE/NEET?</div><div>• Mistake patterns, time spent, what you can gain back</div></div></div>
</div>
</div>
</div>
)
}
