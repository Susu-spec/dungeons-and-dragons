import type { ColumnDef } from "@tanstack/react-table";
import { CustomCell } from "../../table";

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
    },
    {
      accessorKey: "material",
      header: "Material",
      cell: (info) => (
        <CustomCell
          value={info.getValue()}
          className="max-w-[20rem] text-ellipsis truncate"
        />
      ),
    },
    {
      accessorKey: "school.name",
      header: "School",
      cell: (info) => (
        <CustomCell
          value={info.getValue()}
          className="max-w-[5rem]"
        />
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
    },
  ];