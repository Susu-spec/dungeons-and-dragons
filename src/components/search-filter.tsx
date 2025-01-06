export default function SearchFilter({
  activeTab,
  localSearch,
  setLocalSearch,
}: {
  activeTab: string;
  localSearch: string;
  setLocalSearch: (localSearch: string) => void;
}) {
  const handleSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value.toLowerCase();
    setLocalSearch(value);
  };
  return (
    <div className="w-full mx-auto flex items-center">
      <input
        type="text"
        placeholder={`Search ${activeTab}...`}
        value={localSearch}
        onChange={handleSearch}
        className="w-full max-w-[90%] md:max-w-[50%] mx-auto border-2 border-stone-600 px-4 py-3 text-lg text-stone-900 bg-transparent placeholder-black rounded-lg shadow-md focus:ring-2 focus:ring-black focus:border-none focus:outline-none font-uncial"
      />
    </div>
  );
}
