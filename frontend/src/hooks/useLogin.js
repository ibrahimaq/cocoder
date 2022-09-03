import {useState} from 'react'

import { useAuthcontext } from '../context/AuthContext'

export const useLogin = () => {
    const [isError, setIsError] = useState(null);
    const [isLoading, setIsLoading] = useState(null);

    const {dispatch} = useAuthcontext();

    const login = async (formData) => {
        setIsLoading(true);
        setIsError(null);

        const response = await fetch('/api/user/login', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(formData),
            
        })
        const data = await response.json();

        if(!response.ok){
            setIsLoading(false)
            setIsError(data.error)
        }

        if(response.ok){
            setIsError(null);
            localStorage.setItem('user', JSON.stringify(data))
            
            dispatch({type: 'LOGIN', payload: data});

            setIsLoading(false);
        }
    }

    return {login, isLoading, isError}
}