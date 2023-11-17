"use client";

import { Skeleton } from "@/components/ui/skeleton";
import { ColumnDef } from "@tanstack/react-table";

export const columns: ColumnDef<Person>[] = [
  {
    accessorKey: "personid",
    header: "ID",
  },
  {
    accessorKey: "lastname",
    header: "Last Name",
  },
  {
    accessorKey: "firstname",
    header: "First Name",
  },
  {
    accessorKey: "address",
    header: "Address",
  },
  {
    accessorKey: "city",
    header: "City",
  },

  //   {
  //     accessorKey: "email",
  //     header: ({ column }) => {
  //       return (
  //         <Button
  //           variant="ghost"
  //           onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
  //         >
  //           Email
  //           <ArrowUpDown className="ml-2 h-4 w-4" />
  //         </Button>
  //       );
  //     },
  //   },
  //   {
  //     accessorKey: "lastSeen",
  //     header: "Last Seen",
  //     cell: ({ row }) => {
  //       const date = new Date(row.getValue("lastSeen"));
  //       const formatted = date.toLocaleDateString();
  //       return <div className="font-medium">{formatted}</div>;
  //     },
  //   },
  //   {
  //     id: "actions",
  //     cell: ({ row }) => {
  //       const user = row.original;

  //       return (
  //         <DropdownMenu>
  //           <DropdownMenuTrigger asChild>
  //             <Button variant="ghost" className="h-8 w-8 p-0">
  //               <span className="sr-only">Open menu</span>
  //               <MoreHorizontal className="h-4 w-4" />
  //             </Button>
  //           </DropdownMenuTrigger>
  //           <DropdownMenuContent align="end">
  //             <DropdownMenuLabel>Actions</DropdownMenuLabel>
  //             <DropdownMenuItem
  //               onClick={() => navigator.clipboard.writeText(user.id)}
  //             >
  //               Copy User ID
  //             </DropdownMenuItem>
  //             <DropdownMenuSeparator />
  //             <DropdownMenuItem>View customer</DropdownMenuItem>
  //             <DropdownMenuItem>View payment details</DropdownMenuItem>
  //           </DropdownMenuContent>
  //         </DropdownMenu>
  //       );
  //     },
  //   },
];

export const columnSkeleton: ColumnDef<Person>[] = [
  {
    accessorKey: "personid",
    header: "ID",
    cell: ({ row }) => {
      return <Skeleton className="h-4 w-full rounded-md" />;
    },
  },
  {
    accessorKey: "lastname",
    header: "Last Name",
    cell: ({ row }) => {
      return <Skeleton className="h-4 w-full rounded-md" />;
    },
  },
  {
    accessorKey: "firstname",
    header: "First Name",
    cell: ({ row }) => {
      return <Skeleton className="h-4 w-full rounded-md" />;
    },
  },
  {
    accessorKey: "address",
    header: "Address",
    cell: ({ row }) => {
      return <Skeleton className="h-4 w-full rounded-md" />;
    },
  },
  {
    accessorKey: "city",
    header: "City",
    cell: ({ row }) => {
      return <Skeleton className="h-4 w-full rounded-md" />;
    },
  },
];
