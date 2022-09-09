// import { useEffect } from 'react';
import { Link } from "react-router-dom";
import { useLogout } from "../hooks/useLogout";

import { useAuthcontext } from "../context/AuthContext";

const Navbar = () => {
  const { user } = useAuthcontext();
  const { logout } = useLogout();

  const handleClick = () => {
    logout();
  };

  return (
    <header className="bg-slate-200 px-5 py-4 text-lg flex flex-row align-middle justify-between z-10 sticky">
      <Link to='/'>Logo</Link>
        
        {user ? (
          <button onClick={handleClick}>Logout</button>
        ) : (
          <div className="flex space-x-4">
            <Link to="/login" className="px-4 py-2 rounded-full">
              Login
            </Link>
            <Link to="/register" className="px-4 py-2 rounded-full bg-emerald-400">Register</Link>
          </div>
        )}
    
    </header>
  );
};

export default Navbar;
