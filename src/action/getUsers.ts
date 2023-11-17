"use server";

import pool from "@/lib/postgres";

async function getUsers(): Promise<Users[]> {
  await pool.connect();
  const data = await pool.query(`select * from "Guild";`);
  await pool.end();
  return data.rows;
}

export default getUsers;
