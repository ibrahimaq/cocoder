import { Link } from "react-router-dom";

const Hero = () => {
  return (
    <div className="pt-10 sm:pt-20 flex flex-col space-y-3 ">
      <h1 className="text-3xl mx-auto font-bold text-center text-slate-700">
        Welcome to CoCoder
      </h1>
      <p className="text-lg mx-auto font-semibold text-center text-slate-600">
        A place to buddy-up and get your project done.
      </p>
      <div className="flex pt-5">
        <Link to="/feed" className="btn mx-auto rounded-md">
          Take me there{" "}
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 20 20"
            fill="currentColor"
            className="w-5 h-5 inline-block"
          >
            <path
              fillRule="evenodd"
              d="M5 10a.75.75 0 01.75-.75h6.638L10.23 7.29a.75.75 0 111.04-1.08l3.5 3.25a.75.75 0 010 1.08l-3.5 3.25a.75.75 0 11-1.04-1.08l2.158-1.96H5.75A.75.75 0 015 10z"
              clipRule="evenodd"
            />
          </svg>
        </Link>
      </div>
    </div>
  );
};

export default Hero;
