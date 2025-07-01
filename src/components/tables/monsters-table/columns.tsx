import type { ColumnDef } from "@tanstack/react-table";
import { CustomCell } from "../../Table";
import ViewRow from "../../view";
import { MonsterCard } from "./monster-card";

function capitalizeFirstLetter(text: string) {
  if (!text) return ""; // Handle empty or null strings
  return text.charAt(0).toUpperCase() + text.slice(1).toLowerCase();
}

export interface Monster {
  index: string;
  name: string;
  languages: string;
  alignment: string;
  xp: number;
  strength: number;
  hit_points: number;
  size: string;
  special_abilities: {
    name: string;
    description: string;
  };
}

export const columns: ColumnDef<Monster>[] = [
  {
    accessorKey: "name",
    header: "Name",
    cell: (info) => (
      <CustomCell
        value={info.getValue()}
        className="w-[10rem] truncate text-ellipsis whitespace-nowrap"
      />
    ),
  },
  {
    accessorKey: "size",
    header: "Size",
    cell: (info) => {
      const size = capitalizeFirstLetter(info.getValue() as string);
      return <CustomCell value={size} className="w-[8rem]" />;
    },
  },
  {
    accessorKey: "alignment",
    header: "Alignment",
    cell: (info) => (
      <CustomCell
        value={info.getValue() ?? "We don't know where this monster's loyalty lies."}
        className="max-w-[20rem] truncate text-ellipsis whitespace-nowrap capitalize"
      />
    ),
    enableGlobalFilter: false,
  },
  {
    accessorKey: "languages",
    header: "Languages",
    cell: (info) => (
      <CustomCell
        value={info.getValue() || "No known languages."}
        className="max-w-[20rem] text-ellipsis truncate"
      />
    ),
  },
  {
    accessorKey: "xp",
    header: "XP",
    cell: (info) => (
      <CustomCell value={info.getValue()} className="w-[5rem]" />
    ),
    enableGlobalFilter: false,
  },

  {
    header: () => <CustomCell className="w-full md:max-w-[3rem]" />,
    accessorKey: "action",
    cell: ({ row }) => (
      <div className="flex place-content-center items-center gap-2 eye">
        <div className="flex justify-center items-center w-full md:max-w-[3rem]">
          <ViewRow data={row.original} CardContent={MonsterCard} />
        </div>
      </div>
    ),
  },
];
