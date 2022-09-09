import { useState } from "react"

export const useGetAllposts = () => {
    const [error, setError] = useState(null)
    const [loading, setLoading] = useState(null)
    const [data, setData] = useState({})

    const getPosts = async () => {
        setLoading(true);
        setError(null);

        const response = await fetch('/api/post')
        
        if(response.ok){
            const data = await response.json();
            console.log(data);
            setData(data);
            setLoading(false)
            setError(false)
        }
        else if(!response.ok){
            setError(true)
            setLoading(false)
        }
    }

    return {getPosts, data, error, loading}

}