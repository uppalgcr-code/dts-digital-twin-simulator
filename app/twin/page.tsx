
"use client";
import { useState } from "react";
import { mistakeDNA, timeAllocation } from "@/lib/dtsEngine";

export default function TwinPage(){
  const [physicsAcc, setPhysicsAcc] = useState(8);
  const current=162;
  const rankLow = 11800, rankHigh=16400;

  return (
    <div className="max-w-6xl mx-auto p-6">
      <div className="flex items-center gap-3">
        <h1 className="text-3xl font-black">DTS™ Digital Twin Simulator</h1>
        <span className="text-[11px] bg-[#22C0C7] text-black px-2 py-1 rounded-full font-bold">LIVE</span>
      </div>
      <p className="text-gray-500 text-sm mt-1">Continuously evolving digital profile of student - 14 intelligence layers</p>

      {/* 1+2+3 - Top Row */}
      <div className="mt-6 grid md:grid-cols-3 gap-4">
        <div className="bg-white border rounded-2xl p-5">
          <div className="text-[11px] font-bold opacity-60">1. DIGITAL TWIN PROFILE</div>
          <div className="mt-3 grid grid-cols-2 gap-2 text-[12px]">
            {[
              ["Current Knowledge",88],["Concept Mastery",84],["Speed",72],["Accuracy",84],["Memory",78],["Question Selection",68],["Guessing Behaviour",9],["Stress Behaviour",62],["Time Management",71],["Consistency",91],["Improvement Rate",8],["Exam Temperament",74]
            ].map(([k,v])=>(
              <div key={k as string} className="flex justify-between border rounded-full px-3 py-1.5 bg-[#FBFCFA]"><span>{k}</span><span className="font-bold">{v}{typeof v==='number' && v<=100 ? (k==='Guessing Behaviour'?'%':'') : ''}</span></div>
            ))}
          </div>
          <div className="mt-3 text-[11px] text-gray-500">Weaknesses: Maths time mgmt, Calculation, Last 45 min | Strengths: Chemistry accuracy, Easy Physics</div>
        </div>

        <div className="bg-white border rounded-2xl p-5">
          <div className="text-[11px] font-bold opacity-60">2. TRUE POTENTIAL vs CURRENT + 3. RANK WITH CONFIDENCE BAND</div>
          <div className="mt-3 grid grid-cols-3 gap-2 text-center">
            <div className="border rounded-xl p-3"><div className="text-[10px] opacity-60">Current Performance</div><div className="text-2xl font-black">{current}</div></div>
            <div className="bg-[#22C0C7]/20 border border-[#22C0C7] rounded-xl p-3"><div className="text-[10px] opacity-60">Knowledge Potential</div><div className="text-2xl font-black">184</div><div className="text-[10px]">±8 marks</div></div>
            <div className="bg-black text-white rounded-xl p-3"><div className="text-[10px] opacity-60">Exam Potential</div><div className="text-2xl font-black">177</div></div>
          </div>
          <div className="mt-3 bg-black text-white rounded-xl p-3">
            <div className="text-[11px] opacity-60">Predicted Rank</div>
            <div className="font-black">{rankLow.toLocaleString()}–{rankHigh.toLocaleString()} <span className="text-[11px] font-normal opacity-70">Confidence 78%</span></div>
            <div className="text-[10px] opacity-60 mt-1">Based on: 11 full tests • 23 chapter tests • 1842 Qs • 87% avg accuracy • difficulty-adjusted • speed • trend • negative marking</div>
          </div>
          <div className="mt-3 text-[12px] bg-[#FBFCFA] border rounded-xl p-3"><span className="font-bold">Insight:</span> You don't need to learn 20 new chapters. You need to recover 12-19 marks you're losing.</div>
          <div className="mt-2 text-[11px]">Current Predicted Score: 165-172 • Gap: 12-19 marks</div>
        </div>

        <div className="bg-white border rounded-2xl p-5">
          <div className="text-[11px] font-bold opacity-60">4. WHAT IF? SIMULATOR • 5. EXAM FAILURE PREDICTION • 6. WHERE TIME WENT</div>
          <div className="mt-3">
            <div className="text-[12px] font-bold">What if I increase Physics accuracy by {physicsAcc}%?</div>
            <input type="range" min={0} max={20} value={physicsAcc} onChange={e=>setPhysicsAcc(parseInt(e.target.value))} className="w-full mt-2"/>
            <div className="grid grid-cols-2 gap-2 mt-2 text-[12px]">
              <div className="border rounded p-2">Current: Rank 18K-24K</div>
              <div className="bg-[#008E8D] text-white rounded p-2">Projected: Rank {Math.round(11000-physicsAcc*200)}–{Math.round(15000-physicsAcc*250)} • +{physicsAcc+2}-{physicsAcc+6} marks</div>
            </div>
          </div>
          <div className="mt-4 text-[12px] border-t pt-3">
            <div className="font-bold">Your current exam risks</div>
            <div className="mt-1 space-y-1">
              <div>🔴 High Risk: Mathematics time management, Negative marking, Last 45-min performance</div>
              <div>🟠 Medium Risk: Organic Chemistry, Difficult Physics numericals</div>
              <div>🟢 Low Risk: Chemistry accuracy, Easy/medium Physics</div>
            </div>
            <div className="mt-2 text-[11px] text-gray-500">If current behaviour continues, these 3 areas most likely to prevent target rank.</div>
          </div>
          <div className="mt-4 text-[12px] border-t pt-3">
            <div className="font-bold">Where Did Your Time Go? (3h exam)</div>
            <div className="mt-2 grid grid-cols-4 gap-2 text-center text-[11px]">
              <div className="bg-[#FBFCFA] border rounded p-2">Physics<br/><b>{timeAllocation.physics} min</b></div>
              <div className="bg-[#FBFCFA] border rounded p-2">Chemistry<br/><b>{timeAllocation.chemistry} min</b></div>
              <div className="bg-red-50 border border-red-200 rounded p-2">Maths<br/><b>{timeAllocation.maths} min</b></div>
              <div className="bg-[#FBFCFA] border rounded p-2">Review<br/><b>{timeAllocation.review} min</b></div>
            </div>
            <div className="mt-2 text-[11px]">You spent <b>{timeAllocation.maths-timeAllocation.optimalMaths} min</b> more than optimal on Mathematics and lost approx <b>9-14 marks</b> as a result.</div>
          </div>
        </div>
      </div>

      {/* 7+8+9 */}
      <div className="mt-4 grid md:grid-cols-3 gap-4">
        <div className="bg-white border rounded-2xl p-5">
          <div className="text-[11px] font-bold opacity-60">7. QUESTION SELECTION INTELLIGENCE • 8. RE-RUN EXAM WITH BETTER DECISIONS</div>
          <div className="mt-3 text-[12px]">
            <div>Student repeatedly: skips easy questions, attacks difficult first, spends too long on one, returns unnecessarily.</div>
            <div className="mt-2 p-2 bg-amber-50 border border-amber-200 rounded"><b>Your problem isn't only solving. Your question-selection strategy is costing you marks.</b></div>
          </div>
          <div className="mt-4 border-t pt-3">
            <div className="text-[12px] font-bold">Re-run My Exam With Better Decisions</div>
            <div className="mt-2 text-[12px]">You scored <b>168</b>.</div>
            <div className="mt-1 text-[11px] text-gray-600">If you had: skipped Q18 earlier, attempted Q31 first, avoided Q46 guess, reduced Q72 time by 90s</div>
            <div className="mt-2 grid grid-cols-2 gap-2">
              <div className="border rounded p-2 text-center">Actual<br/><b>168</b></div>
              <div className="bg-black text-white rounded p-2 text-center">Optimal simulation<br/><b>181</b></div>
            </div>
            <div className="mt-2 text-[11px]">You left <b>13 marks</b> on the table because of exam strategy, not knowledge.</div>
          </div>
        </div>

        <div className="bg-white border rounded-2xl p-5">
          <div className="text-[11px] font-bold opacity-60">9. MISTAKE DNA • 10. SAME MISTAKE DETECTOR • 11. CONCEPT DEPENDENCY MAP</div>
          <div className="mt-3">
            <div className="text-[12px] font-bold">Your mistakes over last 2,000 Qs</div>
            <div className="mt-2 space-y-1">
              {mistakeDNA.map(m=>(
                <div key={m.label} className="flex items-center gap-2 text-[11px]"><span className="w-24">{m.label}</span><div className="flex-1 bg-gray-100 rounded-full h-2"><div className="h-2 rounded-full" style={{width:`${m.value*3}%`, background:m.color}}></div></div><span className="w-8 font-bold">{m.value}%</span></div>
              ))}
            </div>
            <div className="mt-2 text-[11px] p-2 bg-red-50 border border-red-200 rounded">Your #1 enemy is <b>calculation error (24%)</b>.</div>
          </div>
          <div className="mt-4 border-t pt-3 text-[12px]">
            <div className="font-bold">Same Mistake Detector</div>
            <div className="mt-1 p-2 bg-amber-50 border rounded text-[11px]">⚠️ Recurring mistake detected. You've made this type of mistake <b>4 times</b> in last <b>17 days</b>.</div>
          </div>
          <div className="mt-4 border-t pt-3 text-[11px]">
            <div className="font-bold text-[12px]">Concept Dependency Map</div>
            <div className="mt-2 font-mono">Algebra → Functions → Limits → Differentiation → Integration → Differential Eq</div>
            <div className="mt-1">If weak in Differentiation, Integration will suffer. Fix prerequisite first.</div>
          </div>
        </div>

        <div className="bg-white border rounded-2xl p-5">
          <div className="text-[11px] font-bold opacity-60">12. DIAGNOSTIC X-RAY • 13. PERFORMANCE TRAJECTORY • 14. ARE YOU READY?</div>
          <div className="mt-3">
            <div className="font-bold text-[12px]">Academic X-Ray - Overall health: 76/100</div>
            <div className="mt-2 grid grid-cols-2 gap-2 text-[11px]">
              <div className="flex justify-between border rounded-full px-3 py-1"><span>Concepts</span><span>🟢</span></div>
              <div className="flex justify-between border rounded-full px-3 py-1"><span>Accuracy</span><span>🟢</span></div>
              <div className="flex justify-between border rounded-full px-3 py-1"><span>Speed</span><span>🟠</span></div>
              <div className="flex justify-between border rounded-full px-3 py-1"><span>Consistency</span><span>🟢</span></div>
              <div className="flex justify-between border rounded-full px-3 py-1"><span>Memory</span><span>🟠</span></div>
              <div className="flex justify-between border rounded-full px-3 py-1"><span>Exam strategy</span><span>🔴</span></div>
              <div className="flex justify-between border rounded-full px-3 py-1"><span>Pressure handling</span><span>🔴</span></div>
            </div>
          </div>
          <div className="mt-4 border-t pt-3 text-[12px]">
            <div className="font-bold">Performance Trajectory</div>
            <div className="mt-1 text-[11px]">Score: 120 → 134 → 141 → 149 → 157 → 162</div>
            <div className="text-[11px]">Underlying ability: 140 → 145 → 151 → 157 → 168 → 173</div>
            <div className="mt-1 text-[10px] text-gray-500">Shows genuine progress even when test scores fluctuate.</div>
          </div>
          <div className="mt-4 border-t pt-3">
            <div className="font-bold text-[12px]">Are You Ready for Real Exam? - JEE Readiness 82/100</div>
            <div className="mt-2 grid grid-cols-2 gap-2 text-[11px]">
              {[
                ["Knowledge",88],["Accuracy",84],["Speed",72],["Stamina",79],["Strategy",74],["Pressure",68],["Consistency",91]
              ].map(([k,v])=>(
                <div key={k as string} className="flex justify-between bg-[#FBFCFA] border rounded-full px-3 py-1"><span>{k}</span><span className="font-bold">{v}</span></div>
              ))}
            </div>
            <div className="mt-2 p-2 bg-black text-white rounded text-[11px]"><b>Recommendation:</b> You are academically ready, but exam-strategy ready only at 74%.</div>
          </div>
        </div>
      </div>

      <div className="mt-6 p-4 bg-[#008E8D] text-white rounded-2xl text-[12px]">
        <div className="font-black">DTS™ Signature Insight</div>
        <div className="mt-1">We estimate your true JEE capability at 184 ± 8 marks, but your actual performance is only 162 because of time management and calculation errors. You don't need 20 new chapters. You need to recover 12-19 marks.</div>
      </div>
    </div>
  );
}
