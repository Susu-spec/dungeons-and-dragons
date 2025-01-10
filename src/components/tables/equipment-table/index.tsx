import { gql, useQuery } from "@apollo/client";
import Table from "../../Table";
import { columns } from "./columns";
import { useEffect, useState } from "react";
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

  const getRando = () => {
    setLocalSearch(
      equipment[Math.floor(Math.random() * equipment.length)]?.name,
    );
  };

  useEffect(() => {
    if (localSearch) {
      const row = document.querySelector(`[data-name="${localSearch}"]`);
      row?.scrollIntoView({ behavior: "smooth", block: "center" });
    }
  }, [localSearch]);

  return (
    <>
      <div className="w-full max-w-3.5/5 my-4 flex flex-col gap-4">
        <SearchFilter
          activeTab={activeTab}
          localSearch={localSearch}
          setLocalSearch={setLocalSearch}
          getRando={getRando}
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
