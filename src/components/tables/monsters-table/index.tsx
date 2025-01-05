import { gql, useQuery } from "@apollo/client";
import Table from "../../table";
import { columns } from "./columns";

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

export default function MonstersTable() {
  const { data, loading } = useQuery(GET_MONSTERS);

  const monsters = data?.monsters || [];

  return (
    <>
      {loading && (
        <div className="fixed top-0 bottom-0 inset-0 w-full h-full bg-opacity-30 z-60">
          <p>loading...</p>
        </div>
      )}
      <Table data={monsters} columns={columns} />
    </>
  );
}
