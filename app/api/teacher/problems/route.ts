
import { NextResponse } from "next/server";
let problems:any[]=[{id:1,title:"Integration doubt Q5 JEE 2024",student:"Aarav Sharma",q:"Sir integration doubt",exam:"JEE"}];
export async function GET(){return NextResponse.json({success:true,problems,message:"Backend Teacher Problems API Working"});}
export async function POST(req:Request){const b=await req.json(); const p={id:Date.now(),...b,createdAt:new Date().toISOString(),ratings:[],comments:[]}; problems.push(p); return NextResponse.json({success:true,problem:p,message:"Problem Posted - Backend Working - Students can rate ⭐ & comment"});}
