"use server";
import prisma from "@/lib/client";
import { revalidateTag } from "next/cache";

async function addNewData(e: FormData) {
  const personid = e.get("personid");
  const lastname = e.get("lastname");
  const firstname = e.get("firstname");
  const address = e.get("address");
  const city = e.get("city");

  const post = await prisma.post.create({
    data: {
      personid: Number(personid),
      lastname: String(lastname),
      firstname: String(firstname),
      address: String(address),
      city: String(city),
    },
  });

  revalidateTag("user");
}

export default addNewData;
