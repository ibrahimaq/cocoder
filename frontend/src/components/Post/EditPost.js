import Form from "./Form";
import { useCreatePost } from "../../hooks/useCreatePost";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";




const EditPost = ({ setEditing, postToEdit }) => {
  const navigate = useNavigate()

  const { patchPost, error, loading, newPost } = useCreatePost()

  useEffect(() => {
    
    if (newPost){
      // const {title, body, categories} = updatedPost.post;
      localStorage.setItem('updated-post', JSON.stringify({newPost}))
      setEditing(false)
      console.log(newPost)
    }
  },[newPost])


  return (
    <div className="bg-rose-300 ">
      <Form setEditing={setEditing} postToEdit={postToEdit} patchPost={patchPost} loading={loading} />
 
    </div>
  );
};

export default EditPost;
