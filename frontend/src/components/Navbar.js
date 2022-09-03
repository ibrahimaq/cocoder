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
    <header className="navbar">
      <div className="container">
        <nav>
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/login">Login</Link>
            </li>
            <li>
              <Link to="/register">Register</Link>
            </li>
          </ul>
          {user ? (
            <button onClick={handleClick}>Logout</button>
          ) : (
            <>
              <Link to="/login" style={{marginRight: '1rem'}}>Login</Link>
              <Link to="/register">Register</Link>
            </>
          )}
        </nav>
      </div>
    </header>
  );
};

export default Navbar;
