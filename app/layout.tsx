import "./globals.css";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Digital Twin Simulator",
  description: "Understand your true potential, not just your marks",
};

export default function RootLayout({children}:{children:React.ReactNode}){
  return(
    <html lang="en">
      <body className="bg-[#FFFBEB]">
        <nav className="sticky top-0 z-50 bg-[#0A1931] border-b-4 border-[#FFCC00]">
          <div className="max-w-[1280px] mx-auto px-6 h-16 flex items-center justify-between">
            <div className="flex items-center gap-3">
              <div className="w-9 h-9 bg-[#FFCC00] text-black border-2 border-white rounded-full flex items-center justify-center font-black text-[12px]">DTS</div>
              <span className="font-black text-white">Digital Twin Simulator</span>
            </div>
            <div className="flex items-center gap-2">
              <a href="/auth/student" className="text-[13px] font-bold px-4 py-2 rounded-full bg-white text-[#0A1931] border-2 border-black">Student Login</a>
              <a href="/auth/teacher" className="text-[13px] font-bold px-4 py-2 rounded-full bg-[#FFCC00] text-black border-2 border-black">Teacher Login</a>
            </div>
          </div>
        </nav>
        <main>{children}</main>
        <footer className="mt-24 bg-[#0A1931] text-white border-t-4 border-[#FFCC00]">
          <div className="max-w-[1280px] mx-auto px-6 py-10 text-center text-[11px] text-white/60">© 2026 Digital Twin Simulator</div>
        </footer>
      </body>
    </html>
  )
}
