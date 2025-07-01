import { useState } from "react";
import MedievalTabs from "../components/medieval-tabs";
import SpellsTable from "../components/tables/spells-table";
import MonstersTable from "../components/tables/monsters-table";

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
    // {
    //   id: "equipment",
    //   label: "Equipment",
    //   content: <EquipmentTable activeTab={activeTab} />,
    // },
  ];

  return (
    <div className="h-[80vh] my-12 md:my-0 flex flex-col items-center p-2 md:p-[2rem] ">
      <div className="flex flex-col gap-3.5 items-center mx-auto w-full justify-center cursor-default">
        <h1 className="!font-unifraktur font-semibold text-black text-4xl text-center md:text-7xl">
          Welcome to the realm
        </h1>
        <p className="text-black tracking-wider text-center md:text-left">
          A dungeons and dragons inspired fantasy lore book.{" "}
          <span className="text-xs">eh not the entire thing</span>
        </p>
      </div>
      <MedievalTabs
        tabs={compartments}
        activeTab={activeTab}
        setActiveTab={setActiveTab}
      />
    </div>
  );
}
