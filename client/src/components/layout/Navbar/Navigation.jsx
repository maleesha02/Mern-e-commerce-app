import { NavLink } from "react-router-dom";

function Navigation() {
  return (
    <nav className="hidden lg:flex items-center gap-6">
      <NavLink to="/" className="hover:text-blue-600">
        Home
      </NavLink>

      <NavLink to="/products" className="hover:text-blue-600">
        Products
      </NavLink>

      <NavLink to="/categories" className="hover:text-blue-600">
        Categories
      </NavLink>

      <NavLink to="/contact" className="hover:text-blue-600">
        Contact
      </NavLink>
    </nav>
  );
}

export default Navigation;