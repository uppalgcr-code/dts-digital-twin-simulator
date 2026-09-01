import "./globals.css";
export const metadata={title:"DTS - Digital Twin Simulator"};
export default function RootLayout({children}:{children:React.ReactNode}){
return(<html><body className="bg-[#FCFCF9]"><nav className="sticky top-0 z-50 bg-white/80 backdrop-blur border-b border-[#E8E6E1]"><div className="max-w-[1280px] mx-auto px-6 h-14 flex items-center justify-between"><div className="flex items-center gap-2"><div className="w-7 h-7 bg-black text-white rounded-full flex items-center justify-center font-black text-[10px]">DTS</div><span className="font-bold">Digital Twin Simulator</span></div><div className="flex gap-2"><a href="/papers" className="bg-black text-white px-4 py-2 rounded-full text-[12px] font-semibold">Practice full papers</a></div></div></nav>{children}</body></html>)
}
