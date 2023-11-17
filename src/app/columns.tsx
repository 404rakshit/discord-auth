"use client";

import { Skeleton } from "@/components/ui/skeleton";
import { ColumnDef } from "@tanstack/react-table";

export const columns: ColumnDef<Users>[] = [
  {
    accessorKey: "id",
    header: "ID",
  },
  {
    accessorKey: "customerId",
    header: "Customer ID",
  },
  {
    accessorKey: "generationLimit",
    header: "Generation Lim",
  },
  {
    accessorKey: "submissionLimit",
    header: "Submittion Lim",
  },
  {
    accessorKey: "createdAt",
    header: "Created",
    cell: ({ row }) => {
      const date = new Date(row.getValue("createdAt"));
      const formatted = date.toLocaleDateString();
      return <div className="font-medium">{formatted}</div>;
    },
  },
  {
    accessorKey: "updatedAt",
    header: "Updated",
    cell: ({ row }) => {
      const date = new Date(row.getValue("updatedAt"));
      const formatted = date.toLocaleDateString();
      return <div className="font-medium">{formatted}</div>;
    },
  },
  {
    accessorKey: "generationCredits",
    header: "Generation Credit",
  },
  {
    accessorKey: "adminChannelId",
    header: "Admin Channel ID",
  },
  {
    accessorKey: "limitByRole",
    header: "Role",
    cell: ({ row }) => {
      const value = row.getValue("limitByRole");
      if (!value) return "NULL";
      return value;
    },
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

export const columnSkeleton: ColumnDef<Users>[] = [
  {
    accessorKey: "id",
    header: "ID",
    cell: ({ row }) => {
      return <Skeleton className="h-4 w-full rounded-md" />;
    },
  },
  {
    accessorKey: "customerId",
    header: "Customer ID",
    cell: ({ row }) => {
      return <Skeleton className="h-4 w-full rounded-md" />;
    },
  },
  {
    accessorKey: "generationLimit",
    header: "Generation Lim",
    cell: ({ row }) => {
      return <Skeleton className="h-4 w-full rounded-md" />;
    },
  },
  {
    accessorKey: "submissionLimit",
    header: "Submittion Lim",
    cell: ({ row }) => {
      return <Skeleton className="h-4 w-full rounded-md" />;
    },
  },
  {
    accessorKey: "createdAt",
    header: "Created",
    cell: ({ row }) => {
      return <Skeleton className="h-4 w-full rounded-md" />;
    },
  },
  {
    accessorKey: "updatedAt",
    header: "Updated",
    cell: ({ row }) => {
      return <Skeleton className="h-4 w-full rounded-md" />;
    },
  },
  {
    accessorKey: "generationCredits",
    header: "Generation Credit",
    cell: ({ row }) => {
      return <Skeleton className="h-4 w-full rounded-md" />;
    },
  },
  {
    accessorKey: "adminChannelId",
    header: "Admin Channel ID",
    cell: ({ row }) => {
      return <Skeleton className="h-4 w-full rounded-md" />;
    },
  },
  {
    accessorKey: "limitByRole",
    header: "Role",
    cell: ({ row }) => {
      return <Skeleton className="h-4 w-full rounded-md" />;
    },
  },
];
