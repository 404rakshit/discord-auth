// import { cache, use } from "react";
import React from "react";
import { columns } from "./columns";
import { DataTable } from "@/components/data-table";

async function getUser(): Promise<Person[]> {
  const res = await fetch("/api/addNew", {
    cache: "no-cache",
    next: {
      tags: ["user"],
    },
  });
  const data = await res.json();
  return data;
}

const TableData = async () => {
  const data = await getUser();
  return <DataTable columns={columns} data={data} />;
};

export default TableData;
