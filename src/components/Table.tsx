import {
  useReactTable,
  getCoreRowModel,
  flexRender,
  getPaginationRowModel,
  getFilteredRowModel,
} from "@tanstack/react-table";
import Sword from "../assets/sword.png";
import Dragon from "../assets/danger.png";
import { TableProps } from "../types";

export const CustomCell = ({
  value,
  className,
}: {
  value?: any;
  className: string;
}) => (
  <div title={value} className={className}>
    {value}
  </div>
);

const EmptyState = () => {
  return (
    <div className="relative flex flex-col gap-3 h-full w-full md:min-h-[30rem] items-center justify-center p-4 text-black font-semibold text-xl">
      <img src={Dragon} alt="Dragon from Flaticon" width={128} height={128} />
      <a
        hidden={true}
        className="absolute bottom-2 right-2 text-xs"
        href="https://www.flaticon.com/free-icons/dinosaur"
        title="dinosaur icons"
      >
        Dinosaur icons created by egorpolyakov - Flaticon
      </a>
      No data available.
    </div>
  );
};

export default function Table({
  columns,
  data,
  localSearch,
  setLocalSearch,
}: TableProps) {
  const table = useReactTable({
    columns,
    data,
    state: {
      globalFilter: localSearch,
    },
    getCoreRowModel: getCoreRowModel(),
    getFilteredRowModel: getFilteredRowModel(),
    onGlobalFilterChange: setLocalSearch,
    getPaginationRowModel: getPaginationRowModel(),
    initialState: {
      pagination: {
        pageIndex: 0,
        pageSize: 7,
      },
    },
  });

  return (
    <div className="flex flex-col gap-4">
      <div className="scroll-table bg-transparent border-stone-600 border-scroll border-2 rounded-lg shadow-2xl">
        <div className="overflow-y-auto p-4">
          <table className="table-auto w-full border-collapse">
            <thead className="bg-scroll text-black text-xl md:text-2xl font-unifraktur border-b border-b-stone-600 rounded-full">
              {table.getHeaderGroups().map((headerGroup) => (
                <tr key={headerGroup.id}>
                  {headerGroup.headers.map((header) => (
                    <th key={header.id} className="p-2 text-left">
                      {header.isPlaceholder
                        ? null
                        : flexRender(
                            header.column.columnDef.header,
                            header.getContext(),
                          )}
                    </th>
                  ))}
                </tr>
              ))}
            </thead>
            <tbody>
              {table.getRowModel().rows.length === 0 ? (
                <tr>
                  <td colSpan={columns.length}>
                    <EmptyState />
                  </td>
                </tr>
              ) : (
                table.getRowModel().rows.map((row) => (
                  <tr
                    key={row.id}
                    className="odd:bg-scroll/10 even:bg-scroll/5 font-unifraktur border-none py-4"
                  >
                    {row.getVisibleCells().map((cell) => (
                      <td
                        key={cell.id}
                        className="p-2 max-w-[15rem] text-black text-base md:text-xl focus-visible:outline-none cursor-default"
                      >
                        {flexRender(cell.column.columnDef.cell, cell.getContext())}
                      </td>
                    ))}
                  </tr>
                ))
              )}
            </tbody>
          </table>
        </div>
      </div>

      <div className="flex gap-2 items-center justify-end">
        <button
          className="py-4 px-1"
          onClick={() => table.previousPage()}
          disabled={!table.getCanPreviousPage()}
        >
          <img className="transform scale-x-[-1]" src={Sword} alt="Sword" />
        </button>
        <ul className="flex gap-1 items-center">
          {/* {Array.from({ length: table.getPageCount() }, (_, index) => (
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
          ))} */}
           {Array.from({ length: table.getPageCount() }, (_, index) => {
            const currentPage = table.getState().pagination.pageIndex;
            const totalPages = table.getPageCount();

            if (
              index === 0 ||
              index === totalPages - 1 || 
              Math.abs(index - currentPage) <= 1
            ) {
              return (
                <li key={index}>
                  <button
                    onClick={() => table.setPageIndex(index)}
                    className={`px-2 py-1 rounded flex items-center text-sm ${
                      currentPage === index
                        ? "bg-yellow-950 text-white"
                        : "bg-transparent text-black"
                    }`}
                  >
                    {index + 1}
                  </button>
                </li>
              );
            } else if (
              (index === currentPage - 2 || index === currentPage + 2) &&
              Math.abs(index - currentPage) > 1
            ) {
              return (
                <li key={index} className="text-yellow-950">
                  ...
                </li>
              );
            }
            return null;
          })}
        </ul>
        <button
          onClick={() => table.nextPage()}
          disabled={!table.getCanNextPage()}
        >
          <img src={Sword} alt="Sword" />
        </button>
      </div>
    </div>
  );
}
