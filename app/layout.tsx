import "./globals.css";
export const metadata={title:"DTS V15 Customer Ready Premium"};
export default function RootLayout({children}:{children:React.ReactNode}){
return(<html><body className="bg-[#FBF8F3]"><nav className="sticky top-0 z-50 bg-white border-b-2 border-black px-6 py-3 flex justify-between text-[11px] font-bold"><div className="flex items-center gap-2"><div className="w-8 h-8 bg-black text-white rounded-full flex items-center justify-center font-black text-[10px]">DTS</div><span>V15 Customer Ready Premium</span></div><div className="flex gap-2"><a href="/" className="px-3 py-1 rounded-full border">Home</a><a href="/papers" className="bg-black text-white px-4 py-1 rounded-full">Full 90Q Exam</a><a href="/backend" className="border-2 border-black px-3 py-1 rounded-full">Backend</a></div></nav>{children}</body></html>)
}
