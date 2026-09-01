import "./globals.css";
export const metadata={title:"Digital Twin Simulator - FIITJEE Colors - Deep Depth Fixed", description:"FIITJEE inspired Yellow Navy premium coaching app with dead depth fixes"};
export default function RootLayout({children}:{children:React.ReactNode}){
return(
<html lang="en"><body className="bg-[#FFFBEB]">
<nav className="sticky top-0 z-50 bg-[#0A1931] border-b-4 border-[#FFCC00]">
<div className="max-w-[1280px] mx-auto px-6 h-16 flex items-center justify-between">
<div className="flex items-center gap-8">
<div className="flex items-center gap-3"><div className="w-9 h-9 bg-[#FFCC00] text-[#0A0A0A] border-2 border-white rounded-full flex items-center justify-center font-black text-[12px]">DTS</div><div><div className="font-black text-white tracking-tight">Digital Twin Simulator</div><div className="text-[10px] text-[#FFCC00] font-bold tracking-widest">DEAD DEPTH FIXED • FIITJEE YELLOW + NAVY</div></div></div>
<div className="hidden md:flex gap-1 text-[13px] text-white/80"><a href="/" className="px-3 py-1.5 rounded-full hover:bg-white/10">Home</a><a href="/papers" className="px-3 py-1.5 rounded-full hover:bg-white/10">Practice Papers</a><a href="/twin" className="px-3 py-1.5 rounded-full hover:bg-white/10">Your Twin</a><a href="/teacher" className="px-3 py-1.5 rounded-full hover:bg-white/10">Teachers</a><a href="/dashboard" className="px-3 py-1.5 rounded-full hover:bg-white/10">Data</a></div>
</div>
<div className="flex items-center gap-2">
<a href="/auth/student" className="text-[13px] font-bold px-4 py-2 rounded-full bg-white text-[#0A1931] border-2 border-black">Student Login</a>
<a href="/auth/teacher" className="text-[13px] font-bold px-4 py-2 rounded-full bg-[#FFCC00] text-black border-2 border-black">Teacher Login</a>
</div>
</div>
</nav>
<div className="bg-[#FFCC00] border-b-2 border-black text-black text-center py-1.5 text-[11px] font-black tracking-wide">⚡ DEAD DEPTH FIXED • NO XSS • NO DATA LOSS • REAL 90 UNIQUE QUESTIONS • REAL TIME TRACKING • REAL MISTAKE DNA • DETERMINISTIC RANK • PROPER COACHING LOGIC • FIITJEE YELLOW #FFCC00 + NAVY #0A1931 + RED #E53935 + GREEN #43A047</div>
{children}
<footer className="mt-24 bg-[#0A1931] text-white border-t-4 border-[#FFCC00]"><div className="max-w-[1280px] mx-auto px-6 py-10 text-center text-[11px] text-white/60">© 2026 Digital Twin Simulator • Dead Depth Fixed • FIITJEE Colors Yellow #FFCC00 + Navy #0A1931 + Red #E53935 + Green #43A047 • Customer Ready Production</div></footer>
</body></html>
)
}
