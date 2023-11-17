import React from "react";
import { columns } from "./columns";
import { DataTable } from "@/components/data-table";

async function getUser(): Promise<Users[]> {
  const res = await fetch("http://localhost:3000/api/getUser", {
    cache: "no-cache",
  });
  const response = await res.json();
  return response;
}

const TableData = async () => {
  const data = await getUser();
  return <DataTable columns={columns} data={data} />;
};

export default TableData;
