import { useState } from "react";
import MedievalTabs from "../components/medieval-tabs";
import SpellsTable from "../components/tables/spells-table";
import MonstersTable from "../components/tables/monsters-table";
import EquipmentTable from "../components/tables/equipment-table";

export default function Dashboard() {
  const [activeTab, setActiveTab] = useState("spells");
  const compartments = [
    {
      id: "spells",
      label: "Spells",
      content: <SpellsTable activeTab={activeTab} />,
    },
    {
      id: "monsters",
      label: "Monsters",
      content: <MonstersTable activeTab={activeTab} />,
    },
    {
      id: "equipment",
      label: "Equipment",
      content: <EquipmentTable activeTab={activeTab} />,
    },
  ];

  return (
    <div className="h-[80vh] flex flex-col items-center">
      <div className="flex items-center mx-auto w-full justify-center">
        <h1 className="font-unifraktur font-semibold text-black text-7xl">
          Welcome to the realm
        </h1>
      </div>
      <MedievalTabs
        tabs={compartments}
        activeTab={activeTab}
        setActiveTab={setActiveTab}
      />
    </div>
  );
}
