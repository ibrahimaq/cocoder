import { useState } from "react";
import { useAuthcontext } from "../context/AuthContext";
import { usePostContext } from "../context/PostContext";
// import { useErrLoadcontext } from "../context/ErrLoadContext"

export const usePost = () => {
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(null);
  const [post, setPost] = useState(null);
  const [success, setSuccess] = useState(null);

  const { user } = useAuthcontext();
  const { dispatch } = usePostContext();
  // const {} = useErrLoadcontext()

  const createPost = async (body) => {
  
    setLoading(true);
    setError(null);
    setSuccess(null);

    const response = await fetch(`/api/post/${user.id}`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(body),
    });
    const data = await response.json();

    if (!response.ok) {
      dispatch({type: 'ERROR', payload: data.error})
      setError(data.error);
      setLoading(false);
    } else if (response.ok) {
      dispatch({type: 'SUCCESS', payload: 'Post created successfully'})
      setError(false);
      // setLoading(false);
      // setPost(data);
      setSuccess('Post created successfully')
      
    }
  };

  const getPost = async (post_id) => {
    setLoading(true);
    setError(null);

    const response = await fetch(`/api/post/${post_id}`);
    const data = await response.json();
    if (response.ok) {
      console.log("getPost: ", data)
      setLoading(false);
      setPost(data.post);
      dispatch({ type: "POST", payload: data.post });
      // console.log(data);
    } else if (!response.ok) {
      setLoading(false);
      setError(data.error);
    }
  };

  const patchPost = async (body, post_id) => {
    // console.log('state from useCreatePost: ', user)
    setLoading(true);
    setError(null);

    const response = await fetch(`/api/post/${post_id}`, {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ updatedPost: body, author_id: user.id }),
    });
    const data = await response.json();

    if (!response.ok) {
      setError(data.error);
      dispatch({type: 'ERROR', payload: data.error})
      setLoading(false);
    } else if (response.ok) {
      console.log('updatedPost successfully: ', data);
      setPost(data.post);
      dispatch({type: 'POST', payload: data.post})
      dispatch({type: 'EDITING', payload: false})
      dispatch({type: 'SUCCESS', payload: 'Post updated'})
      setLoading(false);
   

    }
  };

  const deletePost = async (post_id, author_id) => {
    setError(null);
    setLoading(true);
    setSuccess(null);

    const response = await fetch(`/api/post/${post_id}`, {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ author_id }),
    });
    const data = await response.json();

    if (!response.ok) {
      setError(data.error);
      dispatch({type: 'ERROR', payload: data.error})
      setLoading(false);
    }
    if (response.ok) {
      setLoading(false);
      dispatch({type: 'SUCCESS', payload: 'Post deleted successfully'})
      setSuccess('Post deleted successfully')
    }
  };

  return {
    createPost,
    getPost,
    patchPost,
    deletePost,
    post,
    error,
    loading,
    success,
  };
};
