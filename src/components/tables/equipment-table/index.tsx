import { gql, useQuery } from "@apollo/client";
import Table from "../../Table";
import { columns } from "./columns";
import { useState } from "react";
import SearchFilter from "../../search-filter";

const GET_EQUIPMENT = gql`
  query {
    equipments {
      index
      name
      cost {
        unit
        quantity
      }
      desc
      equipment_category {
        name
      }
      weight
    }
  }
`;
export default function EquipmentTable({ activeTab }: { activeTab: string }) {
  const { data } = useQuery(GET_EQUIPMENT);
  const equipment = data?.equipments || [];
  const [localSearch, setLocalSearch] = useState("");

  return (
    <>
      <div className="w-full max-w-3.5/5 my-4 flex flex-col gap-4">
        <SearchFilter
          activeTab={activeTab}
          localSearch={localSearch}
          setLocalSearch={setLocalSearch}
        />
        <Table
          data={equipment}
          columns={columns}
          localSearch={localSearch}
          setLocalSearch={setLocalSearch}
        />
      </div>
    </>
  );
}
