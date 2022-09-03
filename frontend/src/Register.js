import { useState} from "react";
// import { useNavigate } from "react-router-dom";
import { useRegister } from "./hooks/useRegister";

const Register = () => {
    // const navigate = useNavigate();

    const {register, isError, isLoading} = useRegister();

    const [formData, setFormData] = useState({
        name: '',
        email: '',
        password: ''
    })


    const handleSubmit = async (e) => {
        e.preventDefault();
        
        await register(formData);
        
    }

    return ( 
        <>
        <h1>Register Page</h1>
        <form onSubmit={(e) => handleSubmit(e)}>
            <label htmlFor="name">name</label>
            <input type="text" id="name" value={formData.name} onChange={e => setFormData({...formData, name: e.target.value})} />
            <label htmlFor="email">Email</label>
            <input type="email" id="email" value={formData.email} onChange={e => setFormData({...formData, email: e.target.value})} />
            <label htmlFor="password">Password</label>
            <input type="password" id='password' value={formData.password} onChange={(e) => setFormData({...formData, password: e.target.value})} />
            <button type="submit" disabled={isLoading}>Submit</button>
        </form>
        {isError && <div>{isError}</div>}
        </>
     );
}
 
export default Register;