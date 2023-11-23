import prisma from "@/lib/client";
import { NextResponse } from "next/server";

export async function GET() {
  const result = await prisma.post.findMany();
  return NextResponse.json(result);
}

export async function POST(req: Request) {
  try {
    const { lastname, firstname, address, city } = await req.json();
    const post = await prisma.post.create({
      data: {
        lastname,
        firstname,
        address,
        city,
        // personid: 1,
      },
    });
    return NextResponse.json(post, { status: 201 });
  } catch (err) {
    return NextResponse.json("Database Error", { status: 500 });
  }
  //   const result = await pool.query(`Select * from "persons";`);
}
