import { NavLink, Link } from "react-router-dom";
import { FaUserCircle, FaSignOutAlt, FaBolt } from "react-icons/fa";

const Navbar = () => {
  return (
    <nav className="fixed top-0 left-0 right-0 z-[100] px-6 py-4">
      {/* Main Glass Container */}
      <div className="max-w-7xl mx-auto bg-black/60 backdrop-blur-xl border border-white/10 rounded-2xl px-8 py-3 flex justify-between items-center shadow-[0_8px_32px_0_rgba(0,0,0,0.37)]">
        
        {/* Logo Section - Your Original Name */}
        <Link to="/" className="flex items-center gap-2 group">
          <div className="w-10 h-10 bg-gradient-to-br from-blue-600 to-emerald-500 rounded-xl flex items-center justify-center text-white shadow-lg group-hover:rotate-[10deg] transition-transform duration-300">
            <FaBolt size={18} />
          </div>
          <h1 className="text-xl font-bold tracking-tight text-gray-400">
            Game <span className="text-white italic font-black">Changers</span>
          </h1>
        </Link>

        {/* Navigation Links - Your Original Routes */}
        <div className="hidden md:flex items-center gap-8">
          {[
            { name: "Home", path: "/" },
            { name: "About", path: "/about" },
            { name: "Dashboard", path: "/dashboard" },
          ].map((link) => (
            <NavLink
              key={link.name}
              to={link.path}
              className={({ isActive }) =>
                `text-sm font-bold tracking-wide transition-all duration-300 relative group ${
                  isActive ? "text-blue-400" : "text-gray-400 hover:text-white"
                }`
              }
            >
              {link.name}
              {/* Active Underline Effect */}
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-blue-500 to-emerald-500 transition-all duration-300 group-hover:w-full"></span>
            </NavLink>
          ))}
        </div>

        {/* User Actions - With Logout Link */}
        <div className="flex items-center gap-4 border-l border-white/10 pl-6">
          <NavLink 
            to="/logout" 
            className="flex items-center gap-2 bg-white/10 hover:bg-red-500/20 text-white text-xs md:text-sm font-bold px-5 py-2 rounded-xl transition-all duration-300 border border-white/5 active:scale-95"
          >
            Logout
            <FaSignOutAlt className="text-gray-400 group-hover:text-white" />
          </NavLink>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;