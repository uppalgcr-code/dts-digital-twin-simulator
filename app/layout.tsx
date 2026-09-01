import "./globals.css";
export const metadata={title:"Digital Twin Simulator - Understand your true potential"};
export default function RootLayout({children}:{children:React.ReactNode}){
return(
<html lang="en"><body className="bg-[#FFFBEB]">
<nav className="sticky top-0 z-50 bg-[#0A1931] border-b-4 border-[#FFCC00]">
<div className="max-w-[1280px] mx-auto px-6 h-16 flex items-center justify-between">
<div className="flex items-center gap-3"><div className="w-9 h-9 bg-[#FFCC00] text-[#0A0A0A] border-2 border-white rounded-full flex items-center justify-center font-black text-[12px]">DTS</div><span className="font-black text-white">Digital Twin Simulator</span></div>
<div className="hidden md:flex gap-1 text-[13px] text-white/80"><a href="/" className="px-3 py-1.5 rounded-full hover:bg-white/10">Home</a><a href="/papers" className="px-3 py-1.5 rounded-full hover:bg-white/10">Practice Papers</a><a href="/twin" className="px-3 py-1.5 rounded-full hover:bg-white/10">Your Twin</a><a href="/teacher" className="px-3 py-1.5 rounded-full hover:bg-white/10">Teachers</a><a href="/dashboard" className="px-3 py-1.5 rounded-full hover:bg-white/10">Data</a></div>
</div>
<div className="flex items-center gap-2"><a href="/auth/student" className="text-[13px] font-bold px-4 py-2 rounded-full bg-white text-[#0A1931] border-2 border-black">Student Login</a><a href="/auth/teacher" className="text-[13px] font-bold px-4 py-2 rounded-full bg-[#FFCC00] text-black border-2 border-black">Teacher Login</a></div>
</div>
</nav>
{children}
<footer className="mt-24 bg-[#0A1931] text-white border-t-4 border-[#FFCC00]"><div className="max-w-[1280px] mx-auto px-6 py-12 grid md:grid-cols-3 gap-8 text-[13px]"><div><div className="flex items-center gap-2"><div className="w-8 h-8 bg-[#FFCC00] text-black rounded-full flex items-center justify-center font-black text-[11px]">DTS</div><span className="font-black">Digital Twin Simulator</span></div><div className="mt-3 text-white/70">We help you understand not just what you scored, but why. Your true potential, your patterns, your next step.</div></div><div><div className="font-bold">For Students</div><div className="mt-2 text-white/70 space-y-1"><div>Complete profile with school details</div><div>Full papers in one go</div><div>Personal twin with detailed analysis</div></div></div><div><div className="font-bold">Practice</div><div className="mt-2 text-white/70 space-y-1"><div>JEE 2019 to 2024 • 90 questions</div><div>NEET 2023 to 2024 • 180 questions</div><div>Real pattern, instant feedback</div></div></div></div><div className="border-t border-white/10 px-6 py-4 text-[11px] text-white/50 text-center">© 2026 Digital Twin Simulator • Understand your true potential</div></footer>
</body></html>
)
}
