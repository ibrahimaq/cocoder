import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import Form from "../components/Post/Form";
import Error from "../components/states/Error";
import Success from "../components/states/Success";
import { usePost } from "../hooks/usePost";



const CreatePost = () => {

  const { createPost, loading, success } = usePost();


  const navigate = useNavigate();

  useEffect(() => {
   
    if(success){
      setTimeout(() => {
        navigate('/feed')
      }, 1500)
      
    }
  
  }, [success, navigate]);


  return (
    <>
      <Form createPost={createPost} loading={loading} />
      <Success />
      <Error />
    </>
  );
};

export default CreatePost;
