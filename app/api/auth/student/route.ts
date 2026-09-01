
import { NextResponse } from "next/server";
export async function POST(req:Request){
 const body=await req.json();
 // Backend validation - all antecedents required
 const required=["name","email","phone","city","address","school","className","rollNo","parentName","parentPhone"];
 for(let k of required){ if(!body[k]) return NextResponse.json({error:`Missing ${k} - Complete antecedents required`},{status:400}); }
 // Simulate DB save
 const student={id:"stu_"+Date.now(),...body,verified:true,createdAt:new Date().toISOString()};
 return NextResponse.json({success:true,message:"Student Auth Complete - Full antecedents saved - Can give Full 90Q exam",student,token:"student_token_"+Date.now()});
}
export async function GET(){return NextResponse.json({message:"Student Auth API Working - Backend ✓",required:["name","email","phone","city","address","school","className","rollNo","parentName","parentPhone","target","bio"]});}
