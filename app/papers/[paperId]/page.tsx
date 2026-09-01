import Link from "next/link"
import { papers } from "@/lib/papers"
export default function PaperDetail({params}:{params:{paperId:string}}){
const paper=papers.find((p:any)=>p.id===params.paperId)||papers[0]
return(<div className="max-w-5xl mx-auto p-6"><Link href="/papers" className="text-sm">Back</Link><h1 className="text-3xl font-black mt-3">{paper.title}</h1><div className="mt-6 bg-white border rounded-2xl p-6"><div>Current 162 vs Knowledge 184 vs Gap 12-19</div><Link href="/twin" className="inline-block mt-4 bg-black text-white px-5 py-2 rounded-full text-sm">Open Twin</Link></div></div>)
}
