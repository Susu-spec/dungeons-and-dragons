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

  // const shuffleString = (str: string) => {
  //   return str.split('').sort(() => Math.random() - 0.5).join('');
  // };

  return (
    <div className="w-full max-w-[50%] mx-auto flex gap-3 items-center justify-center">
      <input
        type="text"
        placeholder={`Search ${activeTab}...`}
        value={localSearch}
        onChange={handleSearch}
        className="w-full  mx-auto border-2 border-stone-600 px-4 py-3 text-lg text-stone-900 bg-transparent placeholder-black rounded-lg shadow-md focus:ring-2 focus:ring-black focus:border-none focus:outline-none font-uncial"
      />
      <button className="w-fit" onClick={getRando}>
        <img
          src="/src/assets/dice-icon.png"
          className="w-16 h-16 cursor-pointer shake"
        />
      </button>
    </div>
  );
}
