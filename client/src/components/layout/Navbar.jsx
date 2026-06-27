function Navbar() {
  return (
    <nav className="bg-white shadow">
      <div className="max-w-7xl mx-auto px-5 h-16 flex items-center justify-between">
        <h1 className="text-2xl font-bold text-blue-600">
          ShopSphere
        </h1>

        <div className="space-x-6">
          <button>Home</button>
          <button>Products</button>
          <button>Login</button>
          <button>Cart</button>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;