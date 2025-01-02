import { gql, useQuery } from "@apollo/client"
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
    const { data } = useQuery(GET_MONSTERS);

    const monsters = data?.monsters || [];

    return (
        <>
            <Table data={monsters} columns={columns} /> 
        </>
    )
}