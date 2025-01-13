import type { ColumnDef } from "@tanstack/react-table";
import { CustomCell } from "../../Table";
import ViewRow from "../../view";
import { EquipmentCard } from "./equipment-card";

export interface Equipment {
  index: string;
  name: string;
  desc: string;
  weight: number;
  cost: {
    unit: string;
    quantity: number;
  };
  equipment_category: {
    name: string;
  };
}

export const columns: ColumnDef<Equipment>[] = [
  {
    accessorKey: "name",
    header: "Name",
    cell: (info) => (
      <CustomCell
        value={info.getValue()}
        className="max-w-[12rem] truncate text-ellipsis whitespace-nowrap"
      />
    ),
  },
  {
    accessorKey: "desc",
    header: "Description",
    cell: (info) => (
      <CustomCell
        value={info.getValue() || "Can't describe this equipment."}
        className="max-w-[15rem] truncate text-ellipsis whitespace-nowrap"
      />
    ),
    enableGlobalFilter: false,
  },
  {
    accessorKey: "equipment_category.name",
    header: "Category",
    cell: (info) => (
      <CustomCell
        value={info.getValue() || "Can't describe this monster."}
        className="min-w-[7rem] max-w-[15rem] truncate text-ellipsis whitespace-nowrap"
      />
    ),
  },
  {
    accessorKey: "cost",
    header: "Cost",
    cell: (info) => {
      const { unit, quantity } = info.getValue() as Equipment["cost"];
      return (
        <CustomCell value={`${quantity} ${unit}` || "No cost found"} className="min-w-[8rem]" />
      );
    },
    enableGlobalFilter: false,
  },
  {
    accessorKey: "weight",
    header: "Weight",
    cell: (info) => (
      <CustomCell value={info.getValue() ?? "No weight"} className="max-w-[5rem]" />
    ),
    enableGlobalFilter: false,
  },
  {
    header: () => <CustomCell value="" className="w-full md:max-w-[3rem]" />,
    accessorKey: "action",
    cell: ({ row }) => (
      <div className="flex place-content-center items-center gap-2 w-8 md:w-fit">
        <div className="flex justify-center items-center w-full md:max-w-[3rem]">
          <ViewRow data={row.original} CardContent={EquipmentCard} />
        </div>
      </div>
    ),
  },
];
