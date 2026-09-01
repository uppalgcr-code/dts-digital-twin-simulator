
import Link from "next/link";
export default function Home(){
return(<div className="max-w-6xl mx-auto p-6"><h1 className="text-5xl font-black">DTS V11 FINAL FIX</h1><p className="mt-3 text-sm text-gray-600">All 35 functions restored + Premium visuals. Fix: Teacher 42-line bug + Student nesting 404 + Twin text-only to cards.</p><div className="mt-6 grid md:grid-cols-4 gap-4"><Link href="/twin" className="bg-black text-white p-5 rounded-[1.5rem]">DTS Twin - Premium</Link><Link href="/teacher" className="bg-white border-2 border-black p-5 rounded-[1.5rem]">Teacher Portal</Link><Link href="/profile/demo-student" className="bg-[#008E8D] text-white p-5 rounded-[1.5rem]">Student Profile</Link><Link href="/papers" className="bg-[#22C0C7]/20 border p-5 rounded-[1.5rem]">6Y Papers</Link></div></div>);
}
