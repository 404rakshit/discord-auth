import pool from "@/lib/postgres";
import { NextResponse } from "next/server";

export async function GET(req: Request) {
  const result = await pool.query(`Select * from "Guild";`);
  return NextResponse.json(result.rows);
}
