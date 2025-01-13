import { gql, useQuery } from "@apollo/client";
import { columns } from "./columns";
import Table from "../../Table";
import { useState } from "react";
import SearchFilter from "../../search-filter";
import Loader from "../../loader";

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
  const { data, loading } = useQuery(GET_SPELLS);
  const [localSearch, setLocalSearch] = useState("");
  const [loader, setLoader] = useState(false);

  const spells = data?.spells || [];

  const getRando = () => {
    setLoader(true);
    setTimeout(() => {
      setLoader(false);
      setLocalSearch(spells[Math.floor(Math.random() * spells.length)]?.name);
    }, 3000);
  };

  return (
    <>
      {(loading || loader) && <Loader />}
      <div className="w-full max-w-3.5/5 md:my-4 flex flex-col gap-4">
        <SearchFilter
          activeTab={activeTab}
          localSearch={localSearch}
          setLocalSearch={setLocalSearch}
          getRando={getRando}
        />
        <Table
          data={spells}
          columns={columns}
          localSearch={localSearch}
          setLocalSearch={setLocalSearch}
        />
      </div>
    </>
  );
}
