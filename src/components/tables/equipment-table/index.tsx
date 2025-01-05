import { gql, useQuery } from "@apollo/client";
import Table from "../../table";
import { columns } from "./columns";

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
export default function EquipmentTable() {
  const { data } = useQuery(GET_EQUIPMENT);
  const equipment = data?.equipments || [];

  return (
    <>
      <Table data={equipment} columns={columns} />
    </>
  );
}
