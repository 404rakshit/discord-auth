"use server";

import client from "@/lib/postgres";

async function getUsers(): Promise<Users[]> {
  await client.connect();

  const data = await client.query(`select * from "Guild";`);

  await client.end();

  return data.rows;
}

export default getUsers;
