import Dice from "../assets/dice-icon.png";

export default function SearchFilter({
  activeTab,
  localSearch,
  setLocalSearch,
  getRando,
}: {
  activeTab: string;
  localSearch: string;
  setLocalSearch: (localSearch: string) => void;
  getRando: () => void;
}) {
  const handleSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value.toLowerCase();
    setLocalSearch(value);
  };

  return (
    <div className="search-filter mx-auto flex gap-3 items-center justify-center">
      <input
        type="text"
        placeholder={`Search ${activeTab}...`}
        value={localSearch}
        onChange={handleSearch}
        className="w-full mx-auto border-2 border-stone-600 px-4 py-2 md:py-3 text-sm md:text-lg text-stone-900 bg-transparent placeholder-black rounded-sm md:rounded-lg shadow-md focus:ring-2 focus:ring-black focus:border-none focus:outline-none font-uncial"
      />
      <button className="w-fit focus-visible:outline-none" onClick={getRando}>
        <img src={Dice} className="h-12 w-16 md:h-16 cursor-pointer shake" />
      </button>
    </div>
  );
}
