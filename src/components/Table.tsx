import { useReactTable, ColumnDef, getCoreRowModel, flexRender } from "@tanstack/react-table";

interface Data {
  id: number;
  name: string;
  type: string;
}

const data: Data[] = [
  { id: 1, name: "Fireball", type: "Spell" },
  { id: 2, name: "Dragon", type: "Monster" },
  { id: 3, name: "Healing Potion", type: "Item" },
  { id: 4, name: "Dragon", type: "Monster"  },
  { id: 5, name: "Fireball", type: "Spell" },
  { id: 6, name: "Healing Potion", type: "Item" },
  { id: 7, name: "Fireball", type: "Spell" },
  { id: 8, name: "Healing Potion", type: "Item" },
  { id: 9, name: "Fireball", type: "Spell" },
  { id: 10, name: "Dragon", type: "Monster"  },
];

const columns: ColumnDef<Data>[] = [
    {
      accessorKey: "id",
      header: "ID",
    },
    {
      accessorKey: "name",
      header: "Name",
    },
    {
      accessorKey: "name",
      header: "Name",
    },
    {
      accessorKey: "name",
      header: "Name",
    },
    {
      accessorKey: "type",
      header: "Type",
    },
    {
      accessorKey: "type",
      header: "Type",
    },
  ];
  
const Table = () => {
  const table = useReactTable({
    columns, data, getCoreRowModel: getCoreRowModel()
  });

  return (
    <div className="scroll-table bg-transparent border-stone-600 border-scroll border-2 rounded-lg p-4 shadow-2xl">
      <table className="table-auto w-full border-collapse">
        <thead className="bg-scroll text-black text-2xl font-unifraktur">
          {table.getHeaderGroups().map((headerGroup) => (
            <tr key={headerGroup.id}>
              {headerGroup.headers.map((header) => (
                <th key={header.id} className="p-2 text-left">
                   {header.isPlaceholder
                      ? null
                      : flexRender(
                          header.column.columnDef.header,
                          header.getContext()
                        )}{" "}
                </th>
              ))}
            </tr>
          ))}
        </thead>
        <tbody>
          {table.getRowModel().rows.map((row) => (
            <tr key={row.id} className="odd:bg-scroll/10 even:bg-scroll/5 font-unifraktur border-none border-b-black">
              {row.getVisibleCells().map((cell) => (
                <td key={cell.id} className="p-2 text-black text-xl">
                  {flexRender(cell.column.columnDef.cell, cell.getContext())}
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Table;