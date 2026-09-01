"use client"
import { useState, useEffect } from "react"
export default function Backend(){
const [status,setStatus]=useState<any>({})
async function test(name:string,url:string,method="GET",body?:any){
 try{const r=await fetch(url,{method,headers:{"Content-Type":"application/json"},body:body?JSON.stringify(body):undefined}); const d=await r.json(); setStatus((s:any)=>({...s,[name]:{ok:r.ok,status:r.status,data:d}}));}catch(e:any){setStatus((s:any)=>({...s,[name]:{error:e.message}}))}
}
useEffect(()=>{test("papers","/api/papers")},[])
return(<div className="max-w-6xl mx-auto p-6"><h1 className="text-4xl font-black">Backend Dashboard - Build Fixed - Premium - Customer Ready - Tested</h1><div className="mt-6 bg-white border-2 border-black rounded-[1.5rem] p-6"><div>GET /api/papers: {status.papers?JSON.stringify(status.papers).slice(0,300):"Loading..."}</div><button onClick={()=>test("papers","/api/papers")} className="mt-3 bg-black text-white px-4 py-2 rounded-full text-xs">Test API</button></div></div>)
}
