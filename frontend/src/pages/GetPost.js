import { useEffect, useState } from "react";
import { Link, useParams, useNavigate } from "react-router-dom";
import Error from "../components/states/Error";
import Loading from "../components/states/Loading";
import Success from "../components/states/Success";
import { useGetPost } from "../hooks/useGetPost";
import moment from "moment";
import { useAuthcontext } from "../context/AuthContext";
import { TrashIcon, PencilSquareIcon } from "@heroicons/react/24/solid";
import { ChatBubbleLeftRightIcon } from "@heroicons/react/24/outline";
import { categoryBgColor } from "../components/GetPost/helpers";
import EditPost from "../components/Post/EditPost";
import { usePost } from "../hooks/usePost";

const GetPost = () => {
  const navigate = useNavigate();
  const [post, setPost] = useState({});

  ////// EDIT FEATURE /////
  const [editing, setEditing] = useState(false);

  const { id } = useParams();
  const { getPost, data, loading, error } = useGetPost();

  const { user } = useAuthcontext();

  moment().format();

  useEffect(() => {
    const updatedPostFromLocalStorage = JSON.parse(
      localStorage.getItem("updated-post")
    );
    if (updatedPostFromLocalStorage) {
      setPost(updatedPostFromLocalStorage);
      // setEditing(false)
      console.log("localsto: ", updatedPostFromLocalStorage);
    } else if (!updatedPostFromLocalStorage) {
      setPost(data);
      console.log("not in locals");
    }

    // return localStorage.removeItem("updated-post");
  }, [editing]);

  useEffect(() => {
    getPost(id);
  }, []);

  useEffect(() => {
    console.log("Data from GetPost: ", data);
    console.log("post: ", post);
  }, [data, post]);

  const handleEdit = () => {
    setEditing(!editing);
  };

  /// Delete Post ///
  const {
    deletePost,
    error: deleteError,
    loading: deleteLoading,
    deletedMessage,
  } = usePost();

  const handleDelete = async () => {
    await deletePost(data._id, data.author._id);
    console.log("data._id: ", data._id);
    console.log("author_id: ", data.author._id);
    
  };

  useEffect(() => {
    if(deletedMessage){
      setTimeout(() => {
        navigate(-1);
      }, 2500)
      
    }
    
  }, [deletedMessage, navigate])

  return (
    <>
      {data && (
        <div>
          <article className="mx-3 p-4 mt-5 bg-white shadow-md rounded-md">
            <header>
              <div className="grid grid-cols-10">
                <h1 className="post-title col-span-8 ">{data.title}</h1>
                {data.author._id === user.id && (
                  <div className="col-span-2 flex flex-col items-end sm:items-start sm:flex-row sm:justify-end">
                    <button
                      onClick={handleEdit}
                      aria-label="edit"
                      className="bg-gray-300 hover:scale-105 p-3 rounded-lg max-w-10 max-h-10 shadow-md"
                    >
                      <PencilSquareIcon className="w-4 h-4 text-slate-800" />
                    </button>
                    <button
                      onClick={handleDelete}
                      aria-label="delete"
                      className="bg-gray-300 hover:scale-105 p-3 rounded-lg max-w-10 max-h-10 mt-3 sm:mt-0 sm:ml-3 shadow-md"
                    >
                      <TrashIcon className="w-4 h-4 text-red-600 font-bold" />
                    </button>
                  </div>
                )}
              </div>

              <span className="text-sm mt-2 text-slate-500">
                {moment(data.createdAt).fromNow()}
              </span>
              <div className="flex justify-end flex-wrap space-x-3">
                {data.categories.map((category, i) => (
                  <span
                    key={i}
                    className={`px-2 py-1 bg-opacity-60 rounded-full mt-3 sm:mt-2 ${categoryBgColor[category]}`}
                  >
                    # {category}
                  </span>
                ))}
              </div>
            </header>
            <p className="pt-2">{data.body}</p>

            <hr className="my-4" />
            <footer className="flex flex-row justify-between">
              <button className="text-sm font-medium">
                <ChatBubbleLeftRightIcon className="w-6 h-6 inline-block mr-2" />
                Read comments
              </button>
              <div className="text-sm font-medium">
                <span>Posted by </span>
                <Link to="/:username" className="text-purple-700">
                  {data.author.username}
                </Link>
              </div>
            </footer>
          </article>
        </div>
      )}
      {editing && (
        <EditPost setEditing={setEditing} editing={editing} postToEdit={data} />
      )}

      {loading && <Loading message={"Loading..."} />}
      {error && (
        <Error
          message={"Oops, we're having some techincal issues. Try again later."}
        />
      )}

      {deletedMessage && (
        <Success success={"Your post has been successfully deleted."} />
      )}
    </>
  );
};

export default GetPost;
