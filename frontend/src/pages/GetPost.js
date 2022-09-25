
import {useParams} from "react-router-dom";


import PostDetails from "../components/GetPost/PostDetails";



const GetPost = () => {
  const { id } = useParams();
 






  return (
    <>
    <PostDetails post_id={id} />
    {/* {editing && (
        <div>Editing</div>
      )} */}
      {/* {post && (
        <div>
          <article className="mx-3 p-4 mt-5 bg-white shadow-md rounded-md">
            <header>
              <div className="grid grid-cols-10">
                <h1 className="post-title col-span-8 ">{post.title}</h1>
             
                 {user && post.author._id === user.id ? (
                  <div className="col-span-2 flex flex-col items-end sm:items-start sm:flex-row sm:justify-end">
                    <button
                      onClick={handleEdit}
                      aria-label="edit"
                      className="bg-gray-300 hover:scale-105 p-3 rounded-lg max-w-10 max-h-10 shadow-md"
                    >
                      <PencilSquareIcon className="w-4 h-4 text-slate-800" />
                    </button>
                    <button
                      onClick={() => setShowDeleteModal(true)}
                      aria-label="delete"
                      className="bg-gray-300 hover:scale-105 p-3 rounded-lg max-w-10 max-h-10 mt-3 sm:mt-0 sm:ml-3 shadow-md"
                    >
                      <TrashIcon className="w-4 h-4 text-red-600 font-bold" />
                    </button>
                  </div>
                ) : null}
              </div>

              <span className="text-sm mt-2 text-slate-500">
                {moment(post.createdAt).fromNow()}
              </span>
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
            <p className="pt-2">{post.body}</p>

            <hr className="my-4" />
            <footer className="flex flex-row justify-between">
              <button className="text-sm font-medium">
                <ChatBubbleLeftRightIcon className="w-6 h-6 inline-block mr-2" />
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
        </div>
      )} */}
      {/* {editing && (
        <EditPost setEditing={setEditing} editing={editing} postToEdit={data} />
      )}

      {loading && <Loading message={"Loading..."} />}
      {error && (
        <Error
          message={"Oops, we're having some techincal issues. Try again later."}
        />
      )}
      {showDeleteModal && <DeleteModal setShowDeleteModal={setShowDeleteModal} handleDelete={handleDelete} />}
      {deletedMessage && (
        <Success success={"Your post has been successfully deleted."} />
      )} */}

    </>
  );
};

export default GetPost;
