import prisma from "@/lib/client";
import { NextResponse } from "next/server";

export async function GET() {
  const result = await prisma.post.findMany();
  return NextResponse.json(result);
}

// export async function POST(req: Request) {
//     const post = prisma.post.create({
//         data:{
//             personid:
//         }
//     })
//   //   const result = await pool.query(`Select * from "persons";`);
//   return NextResponse.json("Hello");
// }
