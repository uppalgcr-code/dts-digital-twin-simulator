
import Link from "next/link";
const PAPERS = [
  {id:"jee-2024", title:"JEE 2024", year:2024, exam:"JEE", qs:90},
  {id:"jee-2023", title:"JEE 2023", year:2023, exam:"JEE", qs:90},
  {id:"jee-2022", title:"JEE 2022", year:2022, exam:"JEE", qs:90},
  {id:"jee-2021", title:"JEE 2021", year:2021, exam:"JEE", qs:90},
  {id:"jee-2020", title:"JEE 2020", year:2020, exam:"JEE", qs:90},
  {id:"jee-2019", title:"JEE 2019", year:2019, exam:"JEE", qs:90},
  {id:"neet-2024", title:"NEET 2024", year:2024, exam:"NEET", qs:180},
];
export default function Papers(){
  return <div className="max-w-6xl mx-auto p-6">
    <h1 className="text-3xl font-black">DTS™ Real Papers - 6 Years</h1>
    <p className="text-sm text-gray-500 mt-1">Each paper analyzed by Digital Twin Simulator with 15 metrics</p>
    <div className="mt-6 grid md:grid-cols-3 gap-4">
      {PAPERS.map(p=><Link key={p.id} href={`/papers/${p.id}`} className="bg-white border rounded-xl p-4 hover:shadow-sm"><div className="font-bold">{p.title}</div><div className="text-[12px] text-gray-500 mt-1">{p.exam} • {p.qs} Qs • DTS™ Twin Ready</div><div className="mt-2 text-[11px] bg-[#FBFCFA] border rounded-full px-2 py-1 inline-block">Analyze: True 184 vs Current 162</div></Link>)}
    </div>
  </div>
}
