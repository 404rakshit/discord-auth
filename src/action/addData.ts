"use server";

import pool from "@/lib/postgres";
import { revalidateTag } from "next/cache";

async function addData(e: FormData) {
  const client = await pool.connect();
  try {
    const personid = e.get("personid");
    const lastname = e.get("lastname");
    const firstname = e.get("firstname");
    const address = e.get("address");
    const city = e.get("city");

    // console.log("Hello");
    const res = await client.query(
      `INSERT INTO Persons (PersonID, LastName, FirstName, Address, City) VALUES (${personid}, '${lastname}', '${firstname}', '${address}', '${city}');`
    );
    return res.rows;
    // await pool.connect();
    // const response =
    //   await pool.query(`INSERT INTO Persons (PersonID, LastName, FirstName, Address, City)
    // VALUES (131, 'Galahall', 'Jake', 'Barqul', 'New York');select * from "Guild";`);
    // console.log(response.command);
  } catch (err: any) {
    console.log(err);
    return { error: err.detail };
  } finally {
    client.release();
    revalidateTag("users");
  }
}

export default addData;
