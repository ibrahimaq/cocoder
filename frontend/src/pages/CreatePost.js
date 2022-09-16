import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import Form from "../components/Post/Form";
import { usePost } from "../hooks/usePost";



const CreatePost = () => {

  const { createPost, error, loading, newPost } = usePost();


  const navigate = useNavigate();

  useEffect(() => {
   
    if(newPost){
      navigate('/feed')
    }
  
  }, [newPost, navigate]);


  return (
    <>
      <Form createPost={createPost} newPost={newPost} loading={loading} />
    </>
  );
};

export default CreatePost;
