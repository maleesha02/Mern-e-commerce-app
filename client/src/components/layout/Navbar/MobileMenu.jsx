import { Menu } from "lucide-react";

function MobileMenu() {
  return (
    <button className="lg:hidden">
      <Menu size={24} />
    </button>
  );
}

export default MobileMenu;