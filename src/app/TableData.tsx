"use client";

import { cache, use } from "react";
import React from "react";
import { columns } from "./columns";
import { DataTable } from "@/components/data-table";

// async function getUser(): Promise<Person[]> {
//   const res = await fetch("http://localhost:3000/api/getUser", {
//     cache: "no-cache",
//     next: {
//       tags: ["users"],
//     },
//   });
//   const response = await res.json();
//   return response;
// }

const getData = cache(async () => {
  console.log("fetch");
  const res = await fetch("http://localhost:3000/api/getUser", {
    cache: "no-cache",
    next: { tags: ["users"], revalidate: 10 },
  });
  return res.json();
});

const TableData = () => {
  const data = use(getData());
  return <DataTable columns={columns} data={data} />;
};

export default TableData;
