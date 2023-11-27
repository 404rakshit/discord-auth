"use client";

import { ModeToggle } from "@/components/mode-toogle";
// import { Suspense } from "react";
// import TableData from "./TableData";
import { DataTable } from "@/components/data-table";
import { columnSkeleton, columns } from "./columns";
import { useQuery } from "@tanstack/react-query";
import { UserButton } from "@clerk/nextjs";
const AcquiredData = () => {
  const { data: personData, isLoading: fetchingData } = useQuery({
    queryKey: ["person"],
    queryFn: async () => {
      const res = await fetch("/api/addNew");
      return res.json();
    },
  });
  return (
    <div>
      <section className="flex justify-between">
        <h1>Acquired Data</h1>
        <span className="flex gap-2">
          <ModeToggle />
          <UserButton afterSignOutUrl="/" />
        </span>
      </section>
      {fetchingData ? (
        <DataTable columns={columnSkeleton} data={Array(5).fill("1")} />
      ) : (
        <DataTable columns={columns} data={personData} />
      )}
      {/* <Suspense
        fallback={
          <DataTable
            columns={columnSkeleton}
            data={Array(5).fill({
              id: "",
              customerId: "",
              generationLimit: 0,
              submissionLimit: 0,
              createdAt: "",
              updatedAt: "",
              generationCredits: 0,
              adminChannelId: "",
              limitByRole: "",
            })}
          />
        }
      >
        <TableData />
      </Suspense> */}
    </div>
  );
};

export default AcquiredData;
