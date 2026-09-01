import "./globals.css";
export const metadata={title:"DTS - Digital Twin Simulator"};
export default function RootLayout({children}:{children:React.ReactNode}){
return(
<html><body className="bg-[#FCFCF9]">
<nav className="sticky top-0 z-50 bg-white/90 backdrop-blur-xl border-b border-[#E8E6E1]">
<div className="max-w-[1280px] mx-auto px-6 h-14 flex items-center justify-between">
<div className="flex items-center gap-8">
<div className="flex items-center gap-2"><div className="w-7 h-7 bg-black text-white rounded-full flex items-center justify-center font-black text-[10px]">DTS</div><span className="font-bold text-[15px]">Digital Twin Simulator</span></div>
<div className="hidden md:flex gap-1 text-[13px]"><a href="/" className="px-3 py-1.5 rounded-full hover:bg-[#F5F3EF]">Home</a><a href="/papers" className="px-3 py-1.5 rounded-full hover:bg-[#F5F3EF]">Practice Papers</a><a href="/twin" className="px-3 py-1.5 rounded-full hover:bg-[#F5F3EF]">Your Twin</a><a href="/teacher" className="px-3 py-1.5 rounded-full hover:bg-[#F5F3EF]">Teachers</a><a href="/dashboard" className="px-3 py-1.5 rounded-full hover:bg-[#F5F3EF]">Data Export</a></div>
</div>
<div className="flex items-center gap-2" id="nav-auth">
<a href="/auth/student" className="text-[13px] font-semibold px-4 py-2 rounded-full border border-[#E8E6E1] hover:bg-[#F5F3EF]">Student Login</a>
<a href="/auth/teacher" className="text-[13px] font-semibold px-4 py-2 rounded-full bg-black text-white hover:bg-[#222]">Teacher Login</a>
</div>
</div>
</nav>
<script dangerouslySetInnerHTML={{__html: `
  function updateNav(){
    const s = localStorage.getItem('dts_student');
    const t = localStorage.getItem('dts_teacher');
    const nav = document.getElementById('nav-auth');
    if(!nav) return;
    if(s){
      try{
        const p=JSON.parse(s);
        const name=p.form?.name||'Student';
        nav.innerHTML = '<a href="/profile/me" class="flex items-center gap-2"><div class="w-7 h-7 bg-black text-white rounded-full flex items-center justify-center text-[11px] font-bold">'+name[0]+'</div><span class="text-[13px] font-semibold">'+name+'</span><span class="text-[11px] bg-green-100 text-green-700 px-2 py-1 rounded-full">Logged in</span></a><button onclick="localStorage.removeItem(\'dts_student\');location.reload()" class="text-[11px] border px-3 py-1.5 rounded-full ml-2">Logout</button>';
        return;
      }catch{}
    }
    if(t){
      try{
        const p=JSON.parse(t);
        const name=p.form?.name||'Teacher';
        nav.innerHTML = '<a href="/teacher" class="flex items-center gap-2"><div class="w-7 h-7 bg-[#0E4A3C] text-white rounded-full flex items-center justify-center text-[11px] font-bold">'+name[0]+'</div><span class="text-[13px] font-semibold">'+name+'</span><span class="text-[11px] bg-green-100 text-green-700 px-2 py-1 rounded-full">Teacher logged in</span></a><button onclick="localStorage.removeItem(\'dts_teacher\');location.reload()" class="text-[11px] border px-3 py-1.5 rounded-full ml-2">Logout</button>';
        return;
      }catch{}
    }
  }
  if(typeof window!=='undefined'){ updateNav(); setInterval(updateNav, 1000); }
`}} />
{children}
</body></html>
)
}
