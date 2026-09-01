import Link from "next/link"
export default function Detail({params}:{params:{paperId:string}}){
return(<div className="max-w-5xl mx-auto p-6"><Link href="/papers" className="text-xs border-2 border-black px-4 py-2 rounded-full font-bold">Back</Link><h1 className="text-4xl font-black mt-6">Paper {params.paperId} - Full 90Q in 1 Go - Premium - Build Fixed</h1><div className="mt-6 bg-white border-2 border-black rounded-[1.5rem] p-6"><div>Full 90Q, 360 marks, 180 min, +4/-1 - Premium UI - Customer Ready</div><Link href={`/papers/${params.paperId}/exam`} className="inline-block mt-6 bg-black text-white px-6 py-3 rounded-full font-bold text-sm">Start Full 90Q Exam Premium Working</Link></div></div>)
}
