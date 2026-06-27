import { Search } from "lucide-react";

function SearchBar() {
  return (
    <div className="hidden md:flex flex-1 max-w-xl items-center rounded-lg border border-gray-300 px-3">
      <Search size={18} className="text-gray-500" />

      <input
        type="text"
        placeholder="Search products..."
        className="w-full p-3 outline-none"
      />
    </div>
  );
}

export default SearchBar;