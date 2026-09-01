import "./globals.css";
export const metadata={title:"Digital Twin Simulator - Understand your true potential"};
export default function RootLayout({children}:{children:React.ReactNode}){
return(
<html lang="en"><body className="bg-[#FCFCF9] text-[#111]">
<nav className="sticky top-0 z-50 bg-white/90 backdrop-blur-xl border-b border-[#E8E6E1]">
<div className="max-w-[1280px] mx-auto px-6 h-14 flex items-center justify-between">
<div className="flex items-center gap-8">
<div className="flex items-center gap-2"><div className="w-7 h-7 bg-black text-white rounded-full flex items-center justify-center font-bold text-[10px]">DTS</div><span className="font-bold">Digital Twin Simulator</span></div>
<div className="hidden md:flex gap-1 text-[13px] text-[#6B6B6B]"><a href="/" className="px-3 py-1.5 rounded-full hover:bg-[#F5F3EF] hover:text-black">Home</a><a href="/papers" className="px-3 py-1.5 rounded-full hover:bg-[#F5F3EF] hover:text-black">Practice Papers</a><a href="/twin" className="px-3 py-1.5 rounded-full hover:bg-[#F5F3EF] hover:text-black">Your Twin</a><a href="/teacher" className="px-3 py-1.5 rounded-full hover:bg-[#F5F3EF] hover:text-black">Teachers</a><a href="/dashboard" className="px-3 py-1.5 rounded-full hover:bg-[#F5F3EF] hover:text-black">Data</a></div>
</div>
<div className="flex items-center gap-2" id="nav-auth">
<a href="/auth/student" className="text-[13px] font-semibold px-4 py-2 rounded-full border border-[#E8E6E1] hover:bg-[#F5F3EF]">Student Login</a>
<a href="/auth/teacher" className="text-[13px] font-semibold px-4 py-2 rounded-full bg-black text-white">Teacher Login</a>
</div>
</div>
</nav>
<script dangerouslySetInnerHTML={{__html: `
  function updateNav(){
    const nav=document.getElementById('nav-auth');
    if(!nav) return;
    const s=localStorage.getItem('dts_student');
    const t=localStorage.getItem('dts_teacher');
    if(s){
      try{
        const p=JSON.parse(s);
        const name=p.form?.name||'Student';
        nav.innerHTML='<a href="/profile/me" class="flex items-center gap-2"><div class="w-7 h-7 bg-black text-white rounded-full flex items-center justify-center text-[11px] font-bold">'+name[0]+'</div><span class="text-[13px] font-semibold">'+name+'</span></a><button onclick="localStorage.clear();location.href=\'/\'" class="text-[11px] border px-3 py-1 rounded-full">Logout</button>';
        return;
      }catch{}
    }
    if(t){
      try{
        const p=JSON.parse(t);
        const name=p.form?.name||'Teacher';
        nav.innerHTML='<a href="/teacher" class="flex items-center gap-2"><div class="w-7 h-7 bg-[#0E4A3C] text-white rounded-full flex items-center justify-center text-[11px] font-bold">'+name[0]+'</div><span class="text-[13px] font-semibold">'+name+'</span></a><button onclick="localStorage.clear();location.href=\'/\'" class="text-[11px] border px-3 py-1 rounded-full">Logout</button>';
        return;
      }catch{}
    }
  }
  if(typeof window!=='undefined'){ updateNav(); setInterval(updateNav, 800); }
`}} />
{children}
<footer className="mt-24 border-t border-[#E8E6E1] bg-white"><div className="max-w-[1280px] mx-auto px-6 py-10 grid md:grid-cols-3 gap-8 text-[13px]"><div><div className="font-bold">Digital Twin Simulator</div><div className="text-[#6B6B6B] mt-2">We help you understand not just what you scored, but why. Your true potential, your patterns, your next step.</div></div><div><div className="font-semibold">For Students</div><div className="mt-2 text-[#6B6B6B] space-y-1"><div>Complete profile with school details</div><div>Full 90 questions practice in one go</div><div>Personal twin with 14 layers</div></div></div><div><div className="font-semibold">Practice</div><div className="mt-2 text-[#6B6B6B] space-y-1"><div>JEE 2019-2024 • 90 questions</div><div>NEET 2023-2024 • 180 questions</div><div>Real pattern, instant feedback</div></div></div></div></footer>
</body></html>
)
}
