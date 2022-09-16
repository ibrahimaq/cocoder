const DeleteModal = ({setShowDeleteModal, handleDelete}) => {

    const handleDeletePost = () => {
        handleDelete();
        setShowDeleteModal(false)
    }
  return (
    <div className="bg-gray-800
    bg-opacity-20 fixed w-full h-full top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
      <div className="w-11/12 md:w-1/2 bg-slate-50 p-4 shadow-md rounded-md fixed z-30 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 flex flex-col">
        <div className="mb-2">
          <p className="text-lg font-medium">Are you sure you want to delete this post?</p>
          <p className="">This action cannot be undone.</p>
        </div>
        <hr className="my-3" />
        <div className="flex justify-end space-x-4 mt-3">
          <button onClick={() => setShowDeleteModal(false)} className="btn outline outline-1 outline-rose-500 rounded-sm">
            Cancel
          </button>
          <button onClick={handleDeletePost} className="btn bg-rose-500 rounded-sm text-slate-800">
            Delete
          </button>
        </div>
      </div>
    </div>
  );
};

export default DeleteModal;
