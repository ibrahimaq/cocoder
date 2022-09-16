import { useState } from "react"
import { useAuthcontext } from "../context/AuthContext"
// import { useErrLoadcontext } from "../context/ErrLoadContext"


export const usePost = () => {

    const [error, setError] = useState(null)
    const [loading, setLoading] = useState(null)
    const [newPost, setNewPost] = useState(null)
    const [deletedMessage, setDeletedMessage] = useState(null)

    const {user} = useAuthcontext();
    // const {} = useErrLoadcontext()

    const createPost = async (body) => {
        console.log('state from useCreatePost: ', user)
        setLoading(true);
        setError(null);
        
        const response = await fetch(`/api/post/${user.id}`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(body),
        })
        const data = await response.json();

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

    const patchPost = async (body, post_id) => {
        // console.log('state from useCreatePost: ', user)
        setLoading(true);
        setError(null);
        
      


        const response = await fetch(`/api/post/${post_id}`, {
            method: 'PATCH',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({'updatedPost': body, 'author_id': user.id}),
            
        })
        const data = await response.json();
       

        if(!response.ok){
            setError(data.error);
            setLoading(false)
           
        }
        else if(response.ok){
            setNewPost(data);
            setError(false);
            setLoading(true);
            
        }
    }

    const deletePost = async (post_id, author_id) => {
        setError(null)
        setLoading(true)
        setDeletedMessage(null)

        const response = await fetch(`/api/post/${post_id}`, {
            method: 'DELETE',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({author_id})
        })
        const data = await response.json()

        if(!response.ok){
            setError(data);
            setLoading(false)
        }
        if(response.ok){
            setLoading(false)
            console.log('data from response: ', data)
            setDeletedMessage(data)
        }
    }


    return {createPost, patchPost, deletePost, newPost, error, loading, deletedMessage}
}