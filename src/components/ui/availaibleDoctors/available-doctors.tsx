import { Payment, columns } from "./column"
import { DataTable } from "./data-table"

async function getData(): Promise<Payment[]> {
  // Fetch data from your API here.
  return [
    {
      id: "1",
      date: "20/9/2024",
      under: "Dr samuel",
      department: "m@example.com",
      patient: "ann joe",
    },
    {
        id: "1",
        date: "20/9/2024",
        under: "Dr samuel",
        department: "m@example.com",
        patient: "ann joe"
      },
      {
        id: "3",
        date: "20/9/2024",
        under: "Dr samuel",
        department: "m@example.com",
        patient: "ann joe",
      },
      {
        id: "4",
        date: "20/9/2024",
        under: "Dr samuel",
        department: "m@example.com",
        patient: "ann joe",
      },
      {
        id: "5",
        date: "20/9/2024",
        under: "Dr samuel",
        department: "m@example.com",
        patient: "ann joe",
      },
      {
        id: "6",
        date: "20/9/2024",
        under: "Dr samuel",
        department: "m@example.com",
        patient: "ann joe",
      },
      {
        id: "3",
        date: "20/9/2024",
        under: "Dr samuel",
        department: "m@example.com",
        patient: "ann joe",
      },
    // ...
  ]
}

export default async function DemoPage() {
  const data = await getData()

  return (
    <div className="container mx-auto py-10">
      <DataTable columns={columns} data={data} />
    </div>
  )
}
