import { Link } from "react-router-dom";

const HoverMenu = () => {
    return ( 
        <Link
        to="/new-post"
        className="bg-purple-600 hover:bg-purple-800 transition-colors duration-300 ease-in-out text-slate-50 z-10 fixed right-5 bottom-5 py-2 px-3 rounded-lg shadow-xl"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={1.5}
          stroke="currentColor"
          className="w-6 h-6 inline-block align-top mr-1"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M12 4.5v15m7.5-7.5h-15"
          />
        </svg>
        Create post
      </Link>
     );
}
 
export default HoverMenu;