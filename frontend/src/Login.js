import { useState } from "react";


const Login = () => {

    const [formData, setFormData] = useState({
        name: '',
        email: ''
    })
    const [error, setError] = useState(null)
    const handleSubmit = async (e) => {
        e.preventDeafult();
        
        const response = await fetch('/api/user/login', {
            method: 'POST',
            body: JSON.stringify(formData),
            headers: {
                'Content-Type': 'application/json'
            }
        })

        const data = await response.json();

        if(response.ok){
            setError(null);
            console.log('logged in successful ', data)
            setFormData({
                name: '',
                email: ''
            })
        } else {
            setError(data.error);
        }

    }
    return ( 
        <>
        <h1>Login Page</h1>
        <form onSubmit={(e) => handleSubmit(e)}>
            <label htmlFor="email"></label>
            <input type="email" value={formData.email} onChange={e => setFormData({...formData, email: e.target.value})} />
            <label htmlFor="password"></label>
            <input type="password" value={formData.name} onChange={(e) => setFormData({...formData, name: e.target.value})} />
            <button type="submit">Submit</button>
        </form>
        {error && <div>{error}</div>}
        </>
     );
}
 
export default Login;