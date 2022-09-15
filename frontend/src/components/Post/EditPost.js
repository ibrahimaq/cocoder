import Form from "./Form";
import { useCreatePost } from "../../hooks/useCreatePost";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";




const EditPost = ({ setEditing, editing, postToEdit }) => {
  const navigate = useNavigate()

  const { patchPost, error, loading, newPost: updatedPost } = useCreatePost()

  useEffect(() => {
    if(updatedPost){
      localStorage.setItem('updated-post', JSON.stringify(updatedPost))
      console.log(updatedPost)
      // setEditing(false)
    }
  }, [updatedPost, setEditing])


  return (
    <>
    {updatedPost && <div className="bg-red-500">{JSON.stringify(updatedPost, null, 2)}</div>}
    
    <div className="bg-rose-300 ">
      <Form setEditing={setEditing} postToEdit={postToEdit} patchPost={patchPost} loading={loading} />
 
    </div>
    </>
  );
};

export default EditPost;
