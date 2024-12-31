import SearchFilter from "../components/search-filter";
import Table from "../components/table";

export default function Dashboard() {
    const compartments = [
        "Spells",
        "Monsters",
        "Items"
    ]
    return (
        <div className="h-[80vh] flex flex-col items-center">
            <div className="flex items-center mx-auto w-full justify-center">
                <h1 className="font-unifraktur font-semibold text-black text-7xl">Welcome to the realm</h1>
            </div>
            <div className="w-full max-w-3.5/5 my-4 flex flex-col gap-3">
                <SearchFilter activeTab="spells"/>
                <div className="flex flex-col gap-4 p-4">
                    <div className="flex mt-6 space-x-4 bg-scroll-paper rounded-lg ">
                        {compartments.map((compartment) => ( 
                            <button 
                            className="px-6 py-3 text-lg font-uncial text-stone-900 bg-transparent-100 border-2 border-stone-800 rounded-t-lg shadow-inner hover:bg-stone-300 focus:ring-4 focus:ring-yellow-400 transition-all">
                            {compartment}
                            </button>
                        ))}
                    </div>
                    <Table />
                </div>
                
            </div>
        </div>
    )
}