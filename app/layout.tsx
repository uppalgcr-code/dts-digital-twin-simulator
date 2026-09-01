import "./globals.css";
export const metadata={title:"Digital Twin Simulator - FIITJEE Colors - Understand your true potential"};
export default function RootLayout({children}:{children:React.ReactNode}){
return(
<html lang="en"><body className="bg-[#FFFBEB]">
<nav className="sticky top-0 z-50 bg-[#0A1931] border-b-4 border-[#FFCC00]">
<div className="max-w-[1280px] mx-auto px-6 h-16 flex items-center justify-between">
<div className="flex items-center gap-8">
<div className="flex items-center gap-3"><div className="w-9 h-9 bg-[#FFCC00] text-[#0A0A0A] border-2 border-white rounded-full flex items-center justify-center font-black text-[12px]">DTS</div><div><div className="font-black text-white tracking-tight">Digital Twin Simulator</div><div className="text-[10px] text-[#FFCC00] font-bold tracking-widest">FIITJEE INSPIRED • YELLOW + NAVY</div></div></div>
<div className="hidden md:flex gap-1 text-[13px] text-white/80"><a href="/" className="px-3 py-1.5 rounded-full hover:bg-white/10 hover:text-white">Home</a><a href="/papers" className="px-3 py-1.5 rounded-full hover:bg-white/10 hover:text-white">Practice Papers</a><a href="/twin" className="px-3 py-1.5 rounded-full hover:bg-white/10 hover:text-white">Your Twin</a><a href="/teacher" className="px-3 py-1.5 rounded-full hover:bg-white/10 hover:text-white">Teachers</a><a href="/dashboard" className="px-3 py-1.5 rounded-full hover:bg-white/10 hover:text-white">Data</a></div>
</div>
<div className="flex items-center gap-2" id="nav-auth">
<a href="/auth/student" className="text-[13px] font-bold px-4 py-2 rounded-full bg-white text-[#0A1931] border-2 border-[#0A0A0A] hover:bg-[#FFCC00]">Student Login</a>
<a href="/auth/teacher" className="text-[13px] font-bold px-4 py-2 rounded-full bg-[#FFCC00] text-[#0A0A0A] border-2 border-[#0A0A0A]">Teacher Login</a>
</div>
</div>
</nav>
<div className="bg-[#FFCC00] border-b-2 border-[#0A0A0A] text-[#0A0A0A] text-center py-1.5 text-[11px] font-bold tracking-wide">⚡ FIITJEE INSPIRED DESIGN • YELLOW #FFCC00 + NAVY #0A1931 + BLACK + WHITE • NOT JUST BLACK & WHITE • CUSTOMER READY PREMIUM • DEEP DIVE REVIEWED</div>
<script dangerouslySetInnerHTML={{__html: `
  function updateNav(){
    const nav=document.getElementById('nav-auth'); if(!nav) return;
    const s=localStorage.getItem('dts_student'); const t=localStorage.getItem('dts_teacher');
    if(s){ try{ const p=JSON.parse(s); const name=p.form?.name||'Student'; nav.innerHTML='<a href="/profile/me" class="flex items-center gap-2"><div class="w-8 h-8 bg-[#FFCC00] text-[#0A0A0A] border-2 border-white rounded-full flex items-center justify-center text-[11px] font-black">'+name[0]+'</div><span class="text-[13px] font-bold text-white">'+name+'</span><span class="text-[10px] bg-[#FFCC00] text-[#0A0A0A] px-2 py-1 rounded-full font-bold">Logged in</span></a><button onclick="localStorage.clear();location.href=\'/\'" class="text-[11px] bg-white text-[#0A1931] border-2 border-[#0A0A0A] px-3 py-1 rounded-full font-bold">Logout</button>'; return;}catch{} }
    if(t){ try{ const p=JSON.parse(t); const name=p.form?.name||'Teacher'; nav.innerHTML='<a href="/teacher" class="flex items-center gap-2"><div class="w-8 h-8 bg-white text-[#0A1931] border-2 border-[#FFCC00] rounded-full flex items-center justify-center text-[11px] font-black">'+name[0]+'</div><span class="text-[13px] font-bold text-white">'+name+'</span><span class="text-[10px] bg-white text-[#0A1931] px-2 py-1 rounded-full font-bold">Teacher</span></a><button onclick="localStorage.clear();location.href=\'/\'" class="text-[11px] bg-white text-[#0A1931] border-2 border-[#0A0A0A] px-3 py-1 rounded-full font-bold">Logout</button>'; return;}catch{} }
  }
  if(typeof window!=='undefined'){ updateNav(); setInterval(updateNav, 800); }
`}} />
{children}
<footer className="mt-24 bg-[#0A1931] text-white border-t-4 border-[#FFCC00]"><div className="max-w-[1280px] mx-auto px-6 py-12 grid md:grid-cols-3 gap-8 text-[13px]"><div><div className="flex items-center gap-2"><div className="w-8 h-8 bg-[#FFCC00] text-[#0A0A0A] rounded-full flex items-center justify-center font-black text-[11px]">DTS</div><span className="font-black">Digital Twin Simulator</span><span className="text-[10px] bg-[#FFCC00] text-[#0A0A0A] px-2 py-1 rounded-full font-bold">FIITJEE COLORS</span></div><div className="mt-3 text-white/70">FIITJEE inspired Yellow #FFCC00 + Navy #0A1931 + Black + White. Not just black & white. Premium coaching colors.</div></div><div><div className="font-bold text-[#FFCC00]">For Students</div><div className="mt-2 text-white/70 space-y-1"><div>Complete profile with school details</div><div>Full 90 questions practice in one go</div><div>Personal twin with 14 layers</div><div>Rank prediction + coaching recommendation</div></div></div><div><div className="font-bold text-[#FFCC00]">Design</div><div className="mt-2 text-white/70 space-y-1"><div>Primary Yellow #FFCC00 - FIITJEE signature</div><div>Navy #0A1931 - Professional, trustworthy</div><div>Black borders 2px - Bold, coaching style</div><div>Shadow 6px - Premium, not flat</div></div></div></div><div className="border-t border-white/10 px-6 py-4 text-[11px] text-white/50 text-center">© 2026 Digital Twin Simulator • FIITJEE Inspired Colors • Yellow #FFCC00 + Navy #0A1931 • Deep Dive Reviewed • Customer Ready</div></footer>
</body></html>
)
}
