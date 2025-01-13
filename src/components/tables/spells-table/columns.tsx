import type { ColumnDef } from "@tanstack/react-table";
import { CustomCell } from "../../Table";
import ViewRow from "../../view";
import { SpellCard } from "./spell-card";

export interface Spell {
  index: string;
  name: string;
  school: {
    name: string;
  };
  damage?: {
    damage_type: {
      name: string;
    };
  };
  ritual: boolean;
  range: string;
  level: number;
  higher_level: string[];
  material: string;
  duration: string;
  desc: string[];
}

export const columns: ColumnDef<Spell>[] = [
  {
    accessorKey: "name",
    header: "Name",
    cell: (info) => (
      <CustomCell
        value={info.getValue()}
        className="max-w-[10rem] truncate text-ellipsis whitespace-nowrap"
      />
    ),
  },
  {
    accessorKey: "desc",
    header: "Description",
    cell: (info) => (
      <CustomCell
        value={info.getValue()}
        className="max-w-[20rem] truncate text-ellipsis whitespace-nowrap"
      />
    ),
    enableGlobalFilter: false,
  },
  {
    accessorKey: "material",
    header: "Material",
    cell: (info) => (
      <CustomCell
        value={info.getValue() ?? "No materials."}
        className="max-w-[20rem] text-ellipsis truncate"
      />
    ),
  },
  {
    accessorKey: "school.name",
    header: "School",
    cell: (info) => (
      <CustomCell value={info.getValue()} className="max-w-[5rem]" />
    ),
  },
  {
    accessorKey: "level",
    header: "Level",
    cell: (info) => (
      <CustomCell
        value={info.getValue()}
        className="max-w-[5rem] text-center"
      />
    ),
    enableGlobalFilter: false,
  },
  {
    header: () => <CustomCell value="" className="w-full md:max-w-[3rem]" />,
    accessorKey: "action",
    cell: ({ row }) => (
      <div className="flex place-content-center items-center gap-2">
        <div className="flex justify-center items-center w-full md:max-w-[3rem]">
          <ViewRow data={row.original} CardContent={SpellCard} />
        </div>
      </div>
    ),
  },
];
