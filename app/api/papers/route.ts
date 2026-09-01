
import { NextResponse } from "next/server";
const papers=[
{id:"jee-2024-p1",title:"JEE Main 2024 Jan - Full 90 Qs Real",year:2024,exam:"JEE",qs:90,duration:180,marks:360,subject:"PCM"},
{id:"jee-2023-p1",title:"JEE Main 2023 Apr - Full 90 Qs",year:2023,exam:"JEE",qs:90,duration:180,marks:360,subject:"PCM"},
{id:"jee-2022-p1",title:"JEE Main 2022 Full 90 Qs",year:2022,exam:"JEE",qs:90,duration:180,marks:360,subject:"PCM"},
{id:"jee-2019-p1",title:"JEE Main 2019 Full 90 Qs",year:2019,exam:"JEE",qs:90,duration:180,marks:360,subject:"PCM"},
{id:"neet-2024",title:"NEET 2024 Full 180 Qs",year:2024,exam:"NEET",qs:180,duration:200,marks:720,subject:"PCB"},
];
export async function GET(){return NextResponse.json({success:true,count:papers.length,papers,message:"Backend Papers API Working - Full 90Q in 1 go"});}
