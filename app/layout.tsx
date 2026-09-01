import "./globals.css";
export const metadata={title:"DTS V12 ULTRA - Fully Working"};
export default function RootLayout({children}:{children:React.ReactNode}){
return(<html><body>
<nav className="sticky top-0 z-50 bg-black text-white px-4 py-3 flex items-center justify-between">
<div className="flex items-center gap-2"><div className="bg-[#22C0C7] text-black px-3 py-1 rounded-full font-black text-xs">DTS™</div><span className="font-black tracking-tight">Digital Twin</span><span className="ml-2 hidden md:inline text-[10px] opacity-60 tracking-widest">V12 ULTRA • FULLY WORKING</span></div>
<div className="flex items-center gap-2 text-[11px] font-bold overflow-x-auto"><a href="/" className="px-3 py-1.5 rounded-full border border-white/20">Home</a><a href="/twin" className="bg-white text-black px-3.5 py-1.5 rounded-full">Twin 14 Layers</a><a href="/papers" className="px-3 py-1.5 rounded-full border border-white/20">Exam</a><a href="/teacher" className="px-3 py-1.5 rounded-full border border-white/20">Teacher</a><a href="/profile/demo-student" className="px-3 py-1.5 rounded-full bg-[#008E8D]">Student</a></div>
</nav>
{children}
<div className="mt-10 border-t bg-white p-6 text-[11px] opacity-60 text-center">DTS™ V12 ULTRA — SM Login Working • Exam Engine Working • Resume Accurate • No Gaps</div>
</body></html>)
}
