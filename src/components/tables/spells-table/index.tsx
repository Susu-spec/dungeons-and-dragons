import { gql, useQuery } from "@apollo/client";
import { columns } from "./columns";
import Table from "../../table";

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

export default function SpellsTable() {
  const { data } = useQuery(GET_SPELLS);

  const spells = data?.spells || [];

  return (
    <>
      <Table data={spells} columns={columns} />
    </>
  );
}
