import { Heart, ShoppingCart, User } from "lucide-react";

function Actions() {
  return (
    <div className="flex items-center gap-5">
      <button className="relative hover:text-blue-600 transition">
        <Heart size={22} />
      </button>

      <button className="relative hover:text-blue-600 transition">
        <ShoppingCart size={22} />

        <span className="absolute -top-2 -right-2 flex h-5 w-5 items-center justify-center rounded-full bg-red-500 text-xs text-white">
          0
        </span>
      </button>

      <button className="hover:text-blue-600 transition">
        <User size={22} />
      </button>
    </div>
  );
}

export default Actions;