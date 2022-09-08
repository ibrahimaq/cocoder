import { useEffect, useState } from "react";
import { useAuthcontext } from "../context/AuthContext";
import { useCreatePost } from "../hooks/useCreatePost";
import { useNavigate } from "react-router-dom";
const CreatePost = () => {
  const [formData, setFormData] = useState({});

  const { user } = useAuthcontext();
  const { createPost, error, loading, newPost } = useCreatePost();
  const navigate = useNavigate();

  const handlechange = (e) => {
    setFormData({ ...formData, [e.target.id]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    await createPost(formData);
    if (newPost) {
        console.log('post success')
      navigate("/");
    }
  };

  useEffect(() => {
    // console.log(formData)
    console.log(user);
    if(newPost){
        navigate('/')
    }
  });

  return (
    <>
    <form onChange={(e) => handlechange(e)} onSubmit={(e) => handleSubmit(e)}>
      <label htmlFor="title">Title</label>
      <input type="text" name="title" id="title" />
      <label htmlFor="body">Body</label>
      <input type="text" name="body" id='body' />
      <button type="submit" disabled={loading}>Post</button>
    </form>
    {error && <div>{error}</div>}
    </>
  );
};

export default CreatePost;
