interface Tab {
    tabs: {
        id : string,
        label: string,
        content: React.ReactNode
    }[],
    activeTab: string,
    setActiveTab: (activeTab: string) => void
}

export default function MedievalTabs({ tabs, activeTab, setActiveTab }: Tab) {

    return (
        <div className="flex flex-col gap-4 p-4">
            <div className="flex mt-6 space-x-4 bg-scroll-paper rounded-lg ">
                {tabs.map((tab) => ( 
                    <button
                        key={tab.id}
                        onClick={() => {setActiveTab(tab.id)}}
                        className={`px-6 py-3 text-lg font-uncial text-stone-900 bg-transparent-100 border-2 border-stone-800 rounded-t-lg shadow-inner hover:bg-stone-300 transition-all ${activeTab === tab.id ? "border-[3px] border-yellow-400" : ""}`}>
                        {tab.label}
                    </button>
                ))}
            </div>
            <div className="w-full">
                {tabs.map((tab) => (
                    activeTab === tab.id ? 
                    <div key={tab.id}>
                        {tab.content}
                    </div> :
                    null
                ))}
            </div>
        </div> 
    )
}




