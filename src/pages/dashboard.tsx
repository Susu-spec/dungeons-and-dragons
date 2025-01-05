import { useState } from "react";
import SearchFilter from "../components/search-filter";
import MedievalTabs from "../components/medieval-tabs";
import SpellsTable from "../components/tables/spells-table";
import MonstersTable from "../components/tables/monsters-table";
import EquipmentTable from "../components/tables/equipment-table";

const compartments = [
  {
    id: "spells",
    label: "Spells",
    content: <SpellsTable />,
  },
  {
    id: "monsters",
    label: "Monsters",
    content: <MonstersTable />,
  },
  {
    id: "equipment",
    label: "Equipment",
    content: <EquipmentTable />,
  },
];
export default function Dashboard() {
  const [activeTab, setActiveTab] = useState("spells");

  return (
    <div className="h-[80vh] flex flex-col items-center">
      <div className="flex items-center mx-auto w-full justify-center">
        <h1 className="font-unifraktur font-semibold text-black text-7xl">
          Welcome to the realm
        </h1>
      </div>
      <div className="w-full max-w-3.5/5 my-4 flex flex-col gap-3">
        <SearchFilter activeTab={activeTab} />
        <MedievalTabs
          tabs={compartments}
          activeTab={activeTab}
          setActiveTab={setActiveTab}
        />
      </div>
    </div>
  );
}
