import { DataTable } from "@/components/data-table";
import { columns } from "./columns";
import getUsers from "@/action/getUsers";
import { ModeToggle } from "@/components/mode-toogle";

// async function getUser(): Promise<Users[]> {
//   const res = await fetch("http://localhost:3001/api/getUser", {
//     cache: "no-cache",
//   });
//   return res.json();
// }

const AcquiredData = async () => {
  const data = await getUsers();
  return (
    <div>
      <section className="flex justify-between">
        <h1>Acquired Data</h1>
        <ModeToggle />
      </section>
      <DataTable columns={columns} data={data} />
    </div>
  );
};

export default AcquiredData;
