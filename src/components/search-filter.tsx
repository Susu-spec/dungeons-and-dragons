import { useState } from "react";

export default function SearchFilter({ activeTab }: { activeTab: string }) {
  const [search, setSearch] = useState("");
  const handleSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value.toLowerCase();
    setSearch(value);
    // setFilteredData(
    //   data.filter((item) => item.name.toLowerCase().includes(value))
    // );
  };
  return (
    <div className="w-full mx-auto flex items-center">
      <input
        type="text"
        placeholder={`Search ${activeTab}...`}
        value={search}
        onChange={handleSearch}
        className="w-full max-w-[50%] mx-auto border-2 border-stone-600 px-4 py-3 text-lg text-stone-900 bg-transparent placeholder-black rounded-lg shadow-md focus:ring-2 focus:ring-black focus:border-none focus:outline-none font-uncial"
      />
    </div>
  );
}
