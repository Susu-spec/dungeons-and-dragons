import { 
  useReactTable, 
  getCoreRowModel, 
  flexRender, 
  getPaginationRowModel } from "@tanstack/react-table";
import Sword from "../assets/sword-24.png";
  
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
    columns, 
    data, 
    getCoreRowModel: getCoreRowModel(),
    getPaginationRowModel: getPaginationRowModel(),
    initialState: {
      pagination: {
        pageIndex: 0,
        pageSize: 7
      }
    }
  });



  return (
    <div className="flex flex-col gap-4 mb-4">
      <div className="scroll-table bg-transparent border-stone-600 border-scroll border-2 rounded-lg p-4 shadow-2xl">
        <table className="table-auto w-full border-collapse overflow-scroll">
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
      <div className="flex gap-2 items-center justify-end">
        <button
          className="p-4"
          onClick={() => table.previousPage()}
          disabled={!table.getCanPreviousPage()}>
            <img className="transform scale-x-[-1]" src={Sword} alt="Sword"/>
        </button>
        <ul className="flex gap-1 items-center">
          {Array.from({ length: table.getPageCount() }, (_, index) => (
            <li key={index}>
              <button
                onClick={() => table.setPageIndex(index)}
                className={`px-2 py-1 rounded flex items-center text-sm ${
                  table.getState().pagination.pageIndex === index
                    ? "bg-yellow-950 text-white"
                    : "bg-transparent text-black"
                }`}
              >
                {index + 1}
              </button>
            </li>
          ))}
          </ul>
        <button
          onClick={() => table.nextPage()}
          disabled={!table.getCanNextPage}>
            <img src={Sword} alt="Sword"/>
          </button>
      </div>
    </div>
  );
};

export default Table;