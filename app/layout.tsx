import "./globals.css";
export const metadata={title:"DTS V11 FINAL"};
export default function RootLayout({children}:{children:React.ReactNode}){
return(<html><body className="bg-[#FBFCFA]"><nav className="bg-black text-white p-3 flex gap-3 text-[11px] font-bold"><a href="/">DTS</a><a href="/twin" className="bg-[#008E8D] px-3 py-1 rounded-full">Twin</a><a href="/papers">6Y Papers</a><a href="/teacher">Teacher</a><a href="/profile/demo-student">Student</a></nav>{children}</body></html>);
}
