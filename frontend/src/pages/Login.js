import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { useLogin } from "../hooks/useLogin";
import { useAuthcontext } from "../context/AuthContext";

const Login = () => {
  const navigate = useNavigate();
  const { user } = useAuthcontext();
  const { login, isLoading, isError } = useLogin();

  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  const handleSubmit = async (e) => {
    e.preventDefault();

    await login(formData);
  };

  useEffect(() => {
    if (user) {
      navigate("/feed");
    }
  });

  return (
    <div className="flex flex-col">
      <h1 className="text-3xl my-5 mx-auto">Login to your account</h1>
      <form
        onSubmit={(e) => handleSubmit(e)}
        className="flex flex-col mx-5 sm:mx-auto sm:w-3/4 md:w-1/2"
      >
        <label htmlFor="email">Email</label>
        <input
          type="email"
          value={formData.email}
          onChange={(e) => setFormData({ ...formData, email: e.target.value })}
          className="mb-3 mt-1 py-2 px-1 border-solid border-2 rounded-md focus:outline-slate-400"
        />
        <label htmlFor="password">Password</label>
        <input
          type="password"
          value={formData.password}
          onChange={(e) =>
            setFormData({ ...formData, password: e.target.value })
          }
          className="mb-3 mt-1 py-2 px-1 border-solid border-2 rounded-md focus:outline-slate-400"
        />
        <button
          type="submit"
          disabled={isLoading}
          className="bg-emerald-300 font-semibold mx-auto py-2 px-4 sm:px-20 rounded-md mt-7 shadow-md tracking-wide hover:bg-emerald-400 transition duration-300 ease-in-out"
        >
            {isLoading? 'Loading...' : 'Login'}
    
        </button>
      </form>
      {isError && <div>{isError}</div>}
    </div>
  );
};

export default Login;
