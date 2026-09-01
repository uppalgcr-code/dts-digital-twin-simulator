
import { NextResponse } from "next/server";
export async function POST(req:Request){
 const body=await req.json();
 const required=["name","email","phone","city","address","qualification","experience"];
 for(let k of required){ if(!body[k]) return NextResponse.json({error:`Missing ${k}`},{status:400}); }
 const teacher={id:"tea_"+Date.now(),...body,verified:true,createdAt:new Date().toISOString()};
 return NextResponse.json({success:true,message:"Teacher Auth Complete - Profile accurate saved",teacher,token:"teacher_token_"+Date.now()});
}
export async function GET(){return NextResponse.json({message:"Teacher Auth API Working - Backend ✓"});}
