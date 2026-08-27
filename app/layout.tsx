
import "./globals.css";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "DTS™ - Digital Twin Simulator",
  description: "India's First Digital Twin of Student - True Potential vs Current Performance",
};

export default function RootLayout({children}:{children: React.ReactNode}){
  return (
    <html lang="en">
      <body>
        <nav className="sticky top-0 z-50 bg-black text-white px-4 py-3 flex items-center gap-3 text-[13px] font-bold">
          <a href="/" className="flex items-center gap-2"><span className="bg-[#22C0C7] text-black px-2 py-1 rounded text-[11px]">DTS™</span><span className="text-[10px] opacity-60 hidden md:inline">DIGITAL TWIN SIMULATOR</span></a>
          <a href="/twin" className="ml-auto bg-[#008E8D] px-4 py-1.5 rounded-full text-white">Digital Twin Live</a>
          <a href="/papers" className="opacity-70 hover:opacity-100">6Y Papers</a>
        </nav>
        {children}
      </body>
    </html>
  );
}
