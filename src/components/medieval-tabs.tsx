interface Tab {
  tabs: {
    id: string;
    label: string;
    content: React.ReactNode;
  }[];
  activeTab: string;
  setActiveTab: (activeTab: string) => void;
}

export default function MedievalTabs({ tabs, activeTab, setActiveTab }: Tab) {
  return (
    <div className="flex flex-col gap-2 p-4 w-full">
      <div className="flex md:mt-3 mx-auto space-x-4 bg-scroll-paper rounded-lg ">
        {tabs.map((tab) => (
          <button
            key={tab.id}
            onClick={() => {
              setActiveTab(tab.id);
            }}
            className={`px-3 py-1 text-sm md:px-6  md:text-lg font-uncial text-stone-900 bg-transparent-100 border-2 border-stone-800 rounded-t-lg shadow-md transition-all focus:outline-none ${activeTab === tab.id ? "border-none ring-4 ring-yellow-400" : ""}`}
          >
            {tab.label}
          </button>
        ))}
      </div>
      <div className="w-full">
        {tabs.map((tab) =>
          activeTab === tab.id ? <div key={tab.id}>{tab.content}</div> : null,
        )}
      </div>
    </div>
  );
}
