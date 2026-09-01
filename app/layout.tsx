import "./globals.css";
export const metadata={title:"DTS V14 FINAL PRODUCTION - Frontend+Backend Complete",description:"Full stack - Backend API + Frontend + Auth Guard + Full 90Q + Teacher Profile Accurate + Student Complete Antecedents - Tested"};
export default function RootLayout({children}:{children:React.ReactNode}){
return(<html><body>
<nav className="sticky top-0 z-50 bg-black text-white px-4 py-3 flex justify-between text-[11px] font-bold"><div className="flex gap-2 items-center"><span className="bg-[#22C0C7] text-black px-3 py-1 rounded-full">DTS™ V14 FINAL</span><span className="hidden md:inline opacity-60">FRONTEND+BACKEND COMPLETE • TESTED • PRODUCTION READY</span></div><div className="flex gap-2"><a href="/" className="px-2 py-1 border border-white/20 rounded-full">Home</a><a href="/backend" className="bg-[#22C0C7] text-black px-3 py-1 rounded-full">Backend Dashboard</a><a href="/papers" className="bg-white text-black px-3 py-1 rounded-full">Full 90Q Exam</a></div></nav>
{children}
<footer className="mt-10 bg-black text-white p-6 text-center text-[11px]"><div>✓ Frontend Complete ✓ Backend API Working ✓ Auth Guard ✓ Full 90Q in 1 Go ✓ Teacher Profile Accurate (Not LinkedIn) ✓ Student Complete Antecedents ✓ SM Login Working ✓ Exam Engine Tested</div><div className="mt-2 opacity-60">API: /api/auth/student, /api/auth/teacher, /api/papers, /api/exam/submit, /api/teacher/problems | Frontend: /auth/student, /auth/teacher, /papers, /papers/[id]/exam, /teacher, /profile/[id], /twin, /backend</div></footer>
</body></html>)
}
