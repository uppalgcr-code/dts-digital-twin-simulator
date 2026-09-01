import "./globals.css";
export default function RootLayout({children}:{children:React.ReactNode}){
return(<html><body className="bg-[#FBF8F3]">
<nav className="sticky top-0 z-50 bg-black text-white px-4 py-3 flex items-center justify-between text-[11px] font-bold">
<div className="flex items-center gap-2"><div className="bg-[#22C0C7] text-black px-3 py-1 rounded-full">DTS™</div><span>V13 COMPLETE - Full Auth + Full 90Q</span></div>
<div className="flex gap-2 overflow-x-auto"><a href="/" className="px-3 py-1 rounded-full border border-white/20">Home</a><a href="/twin" className="px-3 py-1 rounded-full border border-white/20">Twin 14</a><a href="/papers" className="bg-white text-black px-3 py-1 rounded-full">Papers Full 90Q</a><a href="/teacher" className="px-3 py-1 rounded-full border border-white/20">Teacher</a><a href="/profile/demo-student" className="px-3 py-1 rounded-full bg-[#008E8D]">Student</a></div>
</nav>
{children}
</body></html>)
}
