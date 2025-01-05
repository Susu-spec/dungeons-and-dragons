import { gql, useQuery } from "@apollo/client";
import { columns } from "./columns";
import Table from "../../table";
import { useState } from "react";
import SearchFilter from "../../search-filter";

const GET_SPELLS = gql`
  query {
    spells {
      index
      name
      school {
        name
      }
      damage {
        damage_type {
          name
        }
      }
      ritual
      range
      level
      higher_level
      material
      duration
      concentration
      attack_type
      desc
    }
  }
`;

export default function SpellsTable({ activeTab }: { activeTab: string }) {
  const { data } = useQuery(GET_SPELLS);
  const [localSearch, setLocalSearch] = useState("");

  const spells = data?.spells || [];

  return (
    <div className="w-full max-w-3.5/5 my-4 flex flex-col gap-4">
      <SearchFilter
        activeTab={activeTab}
        localSearch={localSearch}
        setLocalSearch={setLocalSearch}
      />
      <Table
        data={spells}
        columns={columns}
        localSearch={localSearch}
        setLocalSearch={setLocalSearch}
      />
    </div>
  );
}
