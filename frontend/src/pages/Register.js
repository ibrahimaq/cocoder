import { useEffect, useState } from "react";
// import { useNavigate } from "react-router-dom";
import { useRegister } from "../hooks/useRegister";

const Register = () => {
  // const navigate = useNavigate();

  const { register, isError, isLoading } = useRegister();

  const [formData, setFormData] = useState({
    username: "",
    email: "",
    password: "",
  });

  const handleChange = (e) => {
    setFormData({...formData, [e.target.name]: e.target.value})
  }

  const handleSubmit = async (e) => {
    e.preventDefault();

    await register(formData);
  };

  useEffect(()=>{console.log(formData)},[formData])

  return (
    <>
      <h1>Register Page</h1>
      <form onChange={e => handleChange(e)} onSubmit={(e) => handleSubmit(e)}>
        <label htmlFor="name">Username</label>
        <input
          type="text"
          name="username"
          value={formData.username}
        />
        <label htmlFor="email">Email</label>
        <input
          type="email"
          name="email"
          value={formData.email}
        />
        <label htmlFor="password">Password</label>
        <input
          type="password"
          name="password"
          value={formData.password}
        />
        <button type="submit" disabled={isLoading}>
          Submit
        </button>
      </form>
      {isError && <div>{isError}</div>}
    </>
  );
};

export default Register;
