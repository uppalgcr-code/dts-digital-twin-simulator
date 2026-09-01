import Link from "next/link"
import { papers } from "@/lib/papers"
export default function Papers(){
return(<div className="max-w-6xl mx-auto p-6"><h1 className="text-3xl font-black">6 Years Real Papers - FIXED</h1><div className="mt-6 grid md:grid-cols-3 gap-4">{papers.map((p:any)=><Link key={p.id} href={"/papers/"+p.id} className="bg-white border rounded-xl p-4"><div className="font-bold">{p.title}</div><div className="text-xs opacity-60">{p.exam} {p.qs} Qs</div></Link>)}</div></div>)
}
