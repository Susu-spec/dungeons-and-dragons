import { gql, useQuery } from "@apollo/client";
import Table from "../../table";
import { columns } from "./columns";
import { useState } from "react";
import SearchFilter from "../../search-filter";
import Loader from "../../loader";

const GET_EQUIPMENT = gql`
  query {
    equipments(equipment_category: $equipmentCategory, name: $name) {
      ... on Gear {
        cost {
          quantity
          unit
        }
        index
        name
        weight
      }
    }
  }
`;
export default function EquipmentTable({ activeTab }: { activeTab: string }) {
  const { data, loading } = useQuery(GET_EQUIPMENT);
  const equipment = data?.equipments || [];
  const [localSearch, setLocalSearch] = useState("");
  const [loader, setLoader] = useState(false);

  const getRando = () => {
    setLoader(true);
    setTimeout(() => {
      setLoader(false);
      setLocalSearch(
        equipment[Math.floor(Math.random() * equipment.length)]?.name,
      );
    }, 3000);
  };

  return (
    <>
      {(loading || loader) && <Loader />}
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
