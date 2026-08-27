
import Link from "next/link";

export default function Home(){
  return (
    <div className="max-w-6xl mx-auto p-6">
      <div className="mt-8 grid md:grid-cols-2 gap-8 items-center">
        <div>
          <div className="inline-flex items-center gap-2 bg-black text-white px-3 py-1 rounded-full text-[11px] font-bold">🚀 INDIA'S FIRST DIGITAL TWIN FOR JEE/NEET</div>
          <h1 className="mt-4 text-5xl font-black leading-[0.9] tracking-tight">We don't give you<br/><span className="text-[#008E8D]">marks.</span><br/>We give you your<br/>True Potential.</h1>
          <p className="mt-4 text-gray-600">DTS™ creates a continuously evolving digital profile of you - knowledge, mastery, speed, accuracy, memory, guessing, stress, time-mgmt, temperament & more.</p>
          <div className="mt-6 grid grid-cols-3 gap-3">
            <div className="bg-white border rounded-xl p-4 text-center"><div className="text-[11px] opacity-60">Current</div><div className="text-2xl font-black">162</div></div>
            <div className="bg-[#22C0C7]/20 border border-[#22C0C7] rounded-xl p-4 text-center"><div className="text-[11px] opacity-60">Knowledge Potential</div><div className="text-2xl font-black">184</div></div>
            <div className="bg-black text-white rounded-xl p-4 text-center"><div className="text-[11px] opacity-60">Gap</div><div className="text-xl font-black">12-19 marks</div></div>
          </div>
          <div className="mt-6 flex gap-3">
            <Link href="/twin" className="bg-black text-white px-6 py-3 rounded-full font-bold">Open DTS™ Simulator →</Link>
            <Link href="/papers" className="border px-6 py-3 rounded-full font-bold">Real Papers</Link>
          </div>
          <p className="mt-3 text-[12px] text-gray-500">"You don't need to learn 20 new chapters. You need to recover the marks you're losing."</p>
        </div>
        <div className="bg-white border rounded-[24px] p-5 shadow-sm">
          <div className="text-[12px] font-bold opacity-60">LIVE DIGITAL TWIN PREVIEW</div>
          <div className="mt-4 grid grid-cols-2 gap-3 text-[12px]">
            {[
              ["Knowledge","88"],["Accuracy","84"],["Speed","72"],["Stamina","79"],["Strategy","74"],["Pressure","68"],["Consistency","91"],["Memory","78"]
            ].map(([k,v])=>(
              <div key={k} className="flex justify-between bg-[#FBFCFA] border rounded-full px-3 py-2"><span>{k}</span><span className="font-bold">{v}</span></div>
            ))}
          </div>
          <div className="mt-4 p-3 bg-black text-white rounded-xl text-[12px]">
            <div className="opacity-60">Predicted Rank</div>
            <div className="text-lg font-black">11,800–16,400 <span className="text-[11px] font-normal opacity-70">Confidence 78%</span></div>
            <div className="mt-1 opacity-60 text-[11px]">Based on 11 full tests • 23 chapter tests • 1842 questions • difficulty-adjusted</div>
          </div>
          <div className="mt-3 p-3 border rounded-xl text-[12px]">
            <div className="font-bold">Exam Failure Prediction</div>
            <div className="mt-2 space-y-1">
              <div>🔴 High Risk: Maths time mgmt, Negative marking, Last 45 min</div>
              <div>🟠 Medium: Organic Chemistry, Difficult Physics</div>
              <div>🟢 Low: Chemistry accuracy, Easy Physics</div>
            </div>
          </div>
        </div>
      </div>

      <div className="mt-12 grid md:grid-cols-4 gap-4 text-[13px]">
        {[
          ["🧬 Digital Twin","15 metrics continuously evolving"],
          ["🎯 True vs Current","162 vs 184 vs 177 - Gap analysis"],
          ["🔮 What If Simulator","What if Physics +8%? Rank preview"],
          ["⏱️ Where Time Went","Physics 42m, Chem 38m, Maths 91m - Lost 9-14 marks"]
        ].map(([t,d])=>(
          <div key={t} className="bg-white border rounded-xl p-4"><div className="font-bold">{t}</div><div className="text-gray-500 mt-1 text-[12px]">{d}</div></div>
        ))}
      </div>
      <div className="mt-4 grid md:grid-cols-4 gap-4 text-[13px]">
        {[
          ["🧩 Selection IQ","Skips easy, attacks difficult first"],
          ["🧪 Re-run Exam","Scored 168 → Optimal 181 - Left 13 marks"],
          ["🧠 Mistake DNA","Calculation 24% - Your #1 enemy"],
          ["🩺 Diagnostic X-Ray","Health 76/100 - 7 params 🟢🟠🔴"]
        ].map(([t,d])=>(
          <div key={t} className="bg-white border rounded-xl p-4"><div className="font-bold">{t}</div><div className="text-gray-500 mt-1 text-[12px]">{d}</div></div>
        ))}
      </div>
    </div>
  );
}
