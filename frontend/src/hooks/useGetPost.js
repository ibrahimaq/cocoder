import { useState } from "react";

export const useGetPost = () => {
  const [loading, setLoading] = useState(null);
  const [error, setError] = useState(null);
  const [data, setData] = useState(null);

  const getPost = async (post_id) => {
    setLoading(true);
    setError(null);

    const response = await fetch(`/api/post/${post_id}`);
    const data = await response.json();
    if(response.ok){
        setLoading(false);
        setData(data);
        // console.log(data);
    }
    else if(!response.ok){
        setLoading(false);
        setError(true);
    }
  };

  return {getPost, data, loading, error}
};
