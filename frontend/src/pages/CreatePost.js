import { useEffect, useState } from "react";
import { useAuthcontext } from "../context/AuthContext";
import { useCreatePost } from "../hooks/useCreatePost";
import { useNavigate } from "react-router-dom";
import ReactMarkdown from "react-markdown";
import Form from "../components/CreatePost/Form";

const CreatePost = () => {
  const [formData, setFormData] = useState({
    title: "",
    body: "",
  });

  // const { user } = useAuthcontext();
  const { createPost, error, loading, newPost } = useCreatePost();
  const navigate = useNavigate();

  useEffect(() => {
   
    if (newPost) {
      navigate("/feed");
    }
  }, [newPost, navigate]);


  return (
    <>
      <div className="overflow-y-auto container mx-auto px-3 pt-10 pb-20 md:px-0 flex flex-col md:flex-row space-y-5 md:space-y-0 md:space-x-5">
        <div className="flex flex-col md:w-1/2">
          <h1 className="text-3xl">New Post</h1>
          <hr className="my-3" />

          <Form
            formData={formData}
            setFormData={setFormData}
            createPost={createPost}
            loading={loading}
          />
        </div>
        {error && <div>{error}</div>}
        <div className="flex flex-col px-3 md:w-1/2">
          <h2 className="text-3xl">Preview</h2>
          <hr className="my-3" />
          <div className="bg-purple-300 mt-2 p-3 rounded-md flex-grow">
            <h2 className="text-2xl">
              {formData.title ? formData.title : "Title..."}
            </h2>

            <hr className="my-3" />
            <div className="prose break-words">
              {formData.body ? (
                <ReactMarkdown>{formData.body}</ReactMarkdown>
              ) : (
                <p className="text-lg">Body...</p>
              )}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default CreatePost;
