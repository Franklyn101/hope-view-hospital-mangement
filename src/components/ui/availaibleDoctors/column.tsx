"use client"

import { ColumnDef } from "@tanstack/react-table"

// This type is used to define the shape of our data.
// You can use a Zod schema here if you want.
export type Payment = {
  id: string
  date: string
  under: string
  department: string
  patient: string
}

export const columns: ColumnDef<Payment>[] = [

   
  {
    accessorKey: "under",
    header: "under",
  },
  {
    accessorKey: "department",
    header: "Department",
  },
 
 
]
