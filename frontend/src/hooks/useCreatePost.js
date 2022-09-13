import { useState } from "react"
import { useAuthcontext } from "../context/AuthContext"


export const useCreatePost = () => {

    const [error, setError] = useState(null)
    const [loading, setLoading] = useState(null)
    const [newPost, setNewPost] = useState(null)

    const {user} = useAuthcontext();

    const createPost = async (body) => {
        console.log('state from useCreatePost: ', user)
        setLoading(true);
        setError(null);
        setNewPost(null);
        const response = await fetch(`/api/post/${user.id}`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(body),
        })
        const data = JSON.stringify(response);

        if(!response.ok){
            setError(data.error);
            setLoading(false)
        }
        else if(response.ok){
            setError(false);
            setLoading(false);
            setNewPost(data);
        }

    } 

    return {createPost, newPost, error, loading}
}