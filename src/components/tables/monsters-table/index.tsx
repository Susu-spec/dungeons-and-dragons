import { gql, useQuery } from "@apollo/client";
import Table from "../../table";
import { columns } from "./columns";
import { useState } from "react";
import SearchFilter from "../../search-filter";

const GET_MONSTERS = gql`
  query {
    monsters {
      size
      special_abilities {
        name
        desc
      }
      languages
      name
      desc
      actions {
        actions {
          action_name
        }
      }
      armor_class {
        type
        spell {
          name
        }
      }
      index
      dexterity
      hit_points
      strength
      xp
    }
  }
`;

export default function MonstersTable({ activeTab }: { activeTab: string }) {
  const { data } = useQuery(GET_MONSTERS);
  const [localSearch, setLocalSearch] = useState("");

  const monsters = data?.monsters || [];

  return (
    <>
      <div className="w-full max-w-3.5/5 my-4 flex flex-col gap-4">
        <SearchFilter
          activeTab={activeTab}
          localSearch={localSearch}
          setLocalSearch={setLocalSearch}
        />
        <Table
          data={monsters}
          columns={columns}
          localSearch={localSearch}
          setLocalSearch={setLocalSearch}
        />
      </div>
    </>
  );
}
