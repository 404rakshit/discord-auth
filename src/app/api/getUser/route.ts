import client from "@/lib/postgres";
import { NextResponse } from "next/server";

export async function GET(req: Request) {
  await client.connect();
  const res = await client.query(`select * from "Guild"`);
  await client.end();
  return NextResponse.json(res.rows);
}
