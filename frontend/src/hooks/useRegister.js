import { useState } from "react";

import { useAuthcontext } from "../context/AuthContext";

export const useRegister = () => {

    const {dispatch} = useAuthcontext();

    const [isError, setIsError] = useState(null)
    const [isLoading, setIsLoading] = useState(null)

    const register = async (formData) => {
        setIsError(null);
        setIsLoading(true);

        const response = await fetch('api/user/register', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(formData)
        })
        const data = await response.json();

        if(!response.ok){
            setIsError(data.error);
            setIsLoading(false);
        }
        else{
            setIsError(null);
            localStorage.setItem('user', JSON.stringify(data))
            dispatch({type: 'LOGIN', payload: data})
            setIsLoading(false)
        }

    }

    return {register, isLoading, isError}

}

