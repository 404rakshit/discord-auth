"use client";

import { ModeToggle } from "@/components/mode-toogle";
import { Suspense } from "react";
import TableData from "./TableData";
import { DataTable } from "@/components/data-table";
import { columnSkeleton } from "./columns";

const AcquiredData = () => {
  return (
    <div>
      <section className="flex justify-between">
        <h1>Acquired Data</h1>
        <ModeToggle />
      </section>
      <Suspense
        fallback={
          <DataTable
            columns={columnSkeleton}
            data={Array(10).fill({
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
      </Suspense>
    </div>
  );
};

export default AcquiredData;
