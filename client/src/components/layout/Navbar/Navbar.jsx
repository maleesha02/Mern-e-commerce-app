import Logo from "./Logo";
import SearchBar from "./SearchBar";
import Navigation from "./Navigation";
import Actions from "./Actions";

function Navbar() {
  return (
    <header className="sticky top-0 z-50 bg-white shadow-md border-b border-gray-200">
      <div className="max-w-7xl mx-auto flex items-center justify-between px-6 py-4 gap-6">
        <Logo />
        <SearchBar />
        <Navigation />
        <Actions />
      </div>
    </header>
  );
}

export default Navbar;