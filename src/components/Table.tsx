import { useReactTable, getCoreRowModel, flexRender } from "@tanstack/react-table";
  
export const CustomCell = ({
  value,
  className,
}: {
  value: any;
  className: string;
}) => (
  <div title={value} className={className}>
    {value}
  </div>
);

const Table = ({ columns, data }: { columns: any, data: any}) => {
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
                <td key={cell.id} className="p-2 max-w-[15rem] text-black text-xl truncate text-ellipsis">
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