import Form from "./Form";
import { usePost } from "../../hooks/usePost";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

const EditPost = ({ setEditing, editing, postToEdit }) => {
  const [mouseDown, setMouseDown] = useState(false)
  const navigate = useNavigate();

  const { patchPost, error, loading, newPost: updatedPost } = usePost();

  useEffect(() => {
    if (updatedPost) {
      localStorage.setItem("updated-post", JSON.stringify(updatedPost));
      console.log(updatedPost);
      setEditing(false);
    }
  }, [updatedPost, setEditing]);


  return (
    <>
      <div className="bg-slate-300 border-t-4 border-t-slate-400 fixed bottom-0 left-0 right-0 max-h-80 w-full overflow-y-scroll">
        <Form
          setEditing={setEditing}
          postToEdit={postToEdit}
          patchPost={patchPost}
          loading={loading}
        />
      </div>
    </>
  );
};

export default EditPost;
