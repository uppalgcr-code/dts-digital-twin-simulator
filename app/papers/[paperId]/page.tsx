
import Link from "next/link";
const PAPERS = [
  {id:"jee-2024", title:"JEE 2024 Real Paper", exam:"JEE", qs:90},
  {id:"jee-2023", title:"JEE 2023 Real Paper", exam:"JEE", qs:90},
  {id:"jee-2022", title:"JEE 2022 Real Paper", exam:"JEE", qs:90},
  {id:"jee-2021", title:"JEE 2021 Real Paper", exam:"JEE", qs:90},
  {id:"jee-2020", title:"JEE 2020 Real Paper", exam:"JEE", qs:90},
  {id:"jee-2019", title:"JEE 2019 Real Paper", exam:"JEE", qs:90},
];
export default function PaperDetail({params}:{params:{paperId:string}}){
  const paper = PAPERS.find(p=>p.id===params.paperId) || PAPERS[0];
  return <div className="max-w-5xl mx-auto p-6">
    <Link href="/papers" className="text-sm text-gray-500">← Back</Link>
    <h1 className="text-3xl font-black mt-3">{paper.title}</h1>
    <p className="text-sm text-gray-500 mt-1">{paper.exam} • {paper.qs} Qs • DTS™ Digital Twin Simulator</p>
    <div className="mt-6 bg-white border rounded-2xl p-6">
      <h3 className="font-bold">DTS™ Digital Twin Analysis</h3>
      <div className="mt-4 grid grid-cols-3 gap-3 text-center">
        <div className="border rounded-xl p-3"><div className="text-[10px] opacity-60">Current</div><div className="text-xl font-black">162</div></div>
        <div className="bg-[#22C0C7]/20 rounded-xl p-3 border"><div className="text-[10px] opacity-60">Knowledge</div><div className="text-xl font-black">184</div></div>
        <div className="bg-black text-white rounded-xl p-3"><div className="text-[10px] opacity-60">Gap</div><div className="text-xl font-black">12-19</div></div>
      </div>
      <Link href="/twin" className="inline-block mt-4 bg-black text-white px-5 py-2 rounded-full text-sm font-bold">Open DTS™ Twin →</Link>
    </div>
  </div>
}
