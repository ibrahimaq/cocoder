import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import Form from "../components/Post/Form";
import { useCreatePost } from "../hooks/useCreatePost";



const CreatePost = () => {

  const { createPost, error, loading, newPost } = useCreatePost();


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
