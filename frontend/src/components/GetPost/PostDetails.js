import { useEffect, useState } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";

import ReactMarkdown from "react-markdown";
import moment from "moment";

import Form from "../Post/Form";
import DeleteModal from "../DeleteModal";
import Loading from "../states/Loading";
import Error from "../states/Error";
import Success from "../states/Success";

import { usePost } from "../../hooks/usePost";
import { useAuthcontext } from "../../context/AuthContext";

import { categoryBgColor } from "../../utils/utils";
import { usePostContext } from "../../context/PostContext";
import CommentIcon from "../../assets/icons/CommentIcon.js";
import EditIcon from "../../assets/icons/EditIcon";
import TrashIcon from "../../assets/icons/TrashIcon";


const PostDetails = ({post_id}) => {
  const navigate = useNavigate();

  const {user} = useAuthcontext()
  const {post , editing, success, dispatch} = usePostContext()
  const {getPost, deletePost, patchPost, error, loading} = usePost();

  const [showDeleteModal, setShowDeleteModal] = useState(false);


  

  const handleEdit = () => {
    if(editing){
      dispatch({type: 'EDITING', payload: false})
    } else {
      dispatch({type: 'EDITING', payload: true})
    }
  }

  const handleDelete = async () => {
    await deletePost(post_id, post.author._id);
  }


  useEffect(() => {
    getPost(post_id)
  }, [])
  

  useEffect(() => {
    
    if(success && success.includes('deleted')){
      setTimeout(() => {
        navigate('/feed')
      }, 2000)
    }
  }, [success, navigate])




  return (
    <>
  
      {/* <div className='bg-rose-500 p-4 rounded-md absolute'>this is an error</div> */}
      {post && (
        <article className={`mx-3 p-4 mt-5 bg-white shadow-md rounded-md transition-colors duration-1000 ${success && !success.includes('deleted') && 'bg-yellow-500'}`}>
          <header>
            <div className="grid grid-cols-10">
              <div className="col-span-8 ">
              <h1 className="post-title">{post.title}</h1>
              <span className="text-sm mt-2 text-slate-500">
              {moment(post.createdAt).fromNow()}
            </span>
              </div>
              

              {user && post.author._id === user.id ? (
                <div className="col-span-2 flex flex-col items-end sm:items-start sm:flex-row sm:justify-end">
                  <button
                    onClick={() => handleEdit(post)}
                    aria-label="edit"
                    className="bg-slate-200 hover:bg-slate-300 shadow-md p-2 rounded-full"
                  >
                    <EditIcon customClass='w-6 h-6 ' />
                    {/* <PencilSquareIcon className="w-4 h-4 text-slate-800" /> */}
                  </button>
                  <button
                    onClick={() => setShowDeleteModal(true)}
                    aria-label="delete"
                    className="bg-slate-200 hover:bg-slate-300 shadow-md p-2 rounded-full mt-3 sm:mt-0 sm:ml-3"
                  >
                    <TrashIcon customClass="w-6 h-6" />
                  </button>
                </div>
              ) : null}
            </div>

            <div className="flex justify-end flex-wrap space-x-3">
              {post.categories.map((category, i) => (
                <span
                  key={i}
                  className={`px-2 py-1 bg-opacity-60 rounded-full mt-3 sm:mt-2 ${categoryBgColor[category]}`}
                >
                  # {category}
                </span>
              ))}
            </div>
          </header>
          <hr class="my-4" />
          <ReactMarkdown className="prose">{post.body}</ReactMarkdown>
          <hr className="my-4" />
          <footer className="flex flex-row justify-between">
            <button className="text-sm font-medium">
              <CommentIcon customClass="w-6 h-6 inline mr-2" />
              Read comments
            </button>
            <div className="text-sm font-medium">
              <span>Posted by </span>
              <Link to="/:username" className="text-purple-700">
                {post.author.username}
              </Link>
            </div>
          </footer>
        </article>
      )}
      {editing && <Form patchPost={patchPost} loading={loading} createPost={undefined} />}

      {showDeleteModal && (
        <DeleteModal handleDelete={handleDelete} setShowDeleteModal={setShowDeleteModal} />
      )}

    
        <Error />
    

        <Success />
    
    </>
  );
};

export default PostDetails;
