import { useEffect, useState} from "react";
import { useNavigate } from "react-router-dom";
import { useLogin } from "../hooks/useLogin";
import { useAuthcontext } from "../context/AuthContext";

const Login = () => {
    const navigate = useNavigate();
    const {user} = useAuthcontext();
    const {login, isLoading, isError} = useLogin();

    

    const [formData, setFormData] = useState({
        email: '',
        password: ''
    })

    
    const handleSubmit = async (e) => {
        e.preventDefault();
        
       await login(formData);
      
  
    }

    useEffect(() => {
        if(user){
            navigate('/')
        }
    })

    return ( 
        <>
        <h1>Login Page</h1>
        <form onSubmit={(e) => handleSubmit(e)}>
            <label htmlFor="email">Email</label>
            <input type="email" value={formData.email} onChange={e => setFormData({...formData, email: e.target.value})} />
            <label htmlFor="password">Password</label>
            <input type="password" value={formData.password} onChange={(e) => setFormData({...formData, password: e.target.value})} />
            <button type="submit" disabled={isLoading}>Submit</button>
        </form>
        {isError && <div>{isError}</div>}
        
        </>
     );
}
 
export default Login;