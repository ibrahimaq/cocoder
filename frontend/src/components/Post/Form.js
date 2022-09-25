import { useEffect, useState } from "react";
import Select from "react-select";
import ReactMarkdown from "react-markdown";

import { PaperAirplaneIcon } from "@heroicons/react/20/solid";

import { convertPostCategoriesfromDbToReactSelectFormat } from "./helpers";
import { categoryOptions } from "../../utils/utils";
import { selectStyle } from "../../utils/utils";

import { usePostContext } from "../../context/PostContext";



const Form = ({createPost, patchPost, loading}) => {

  const {editing, post } = usePostContext();
  

  // initialise state if creating new post
  const [formData, setFormData] = useState({
    title: "",
    body: "",
  });

  // if user is editing post, initialise form state
  useEffect(() => {
    if (editing) {
      setSelectedCategory(
        convertPostCategoriesfromDbToReactSelectFormat(post.categories)
      );
      console.log(post.title)
      setFormData({
        title: post.title,
        body: post.body,
      });
    }
  }, []);


  const handlechange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const body = {
      title: formData.title,
      body: formData.body,
      categories: selectedCategory.map((category) => category.value),
    };
   
    // if user updating post
    if (editing) {
      console.log(body, post._id)
      patchPost(body, post._id)
      
    } 
    else if (!editing) {
     createPost(body);
      
    }

  };


  ////////// LIST BOX /////////

  const [selectedCategory, setSelectedCategory] = useState([]);

  


  const validateForm = () => {
    if (!formData.title.length > 0 && !formData.body.length > 0) {
      return true;
    } else {
      return false;
    }
  };

  return (
    <>
    <div className="overflow-y-auto container mx-auto px-3 pt-10 pb-20 md:px-0 flex flex-col md:flex-row space-y-5 md:space-y-0 md:space-x-5">
      <div className="flex flex-col md:w-1/2">
        <h1 className="text-3xl">New Post</h1>
        <hr className="my-3" />
        <form
          onChange={(e) => handlechange(e)}
          // onSubmit={(e) => handleSubmit(e)}
          className="flex flex-col"
        >
          <label htmlFor="title">Title</label>
          <input
            type="text"
            name="title"
            placeholder="Title"
            defaultValue={formData.title}
            className="mb-5 mt-1 py-2 px-1 border-solid border-b-2 border-b-purple-400 focus:border-b-purple-700 focus:outline-none"
          />
          <label htmlFor="body">Body</label>
          <textarea
            type="text"
            name="body"
            defaultValue={formData.body}
            className="mb-5 mt-1 p-3 border-solid border-b-2 border-b-purple-400 focus:border-b-purple-700 focus:outline-none resize-none h-48"
          />

          <Select
            value={selectedCategory}
            isMulti
            onChange={(selectedOption) => setSelectedCategory(selectedOption)}
            name="category"
            placeholder="Choose category"
            options={categoryOptions}
            className="mb-5"
            classNamePrefix="select"
            styles={selectStyle}
          />

          <div className="flex justify-end">
            <button
              className="btn bg-purple-400 hover:bg-purple-500 transition-colors duration-500 ease-in-out flex items-center disabled:cursor-not-allowed "
              type="button"
              disabled={loading || validateForm()}
              onClick={(e) => handleSubmit(e)}
            >
              Post
              <span>
                <PaperAirplaneIcon className="w-4 h-4 ml-3 -rotate-45" />
              </span>
            </button>
          </div>
        </form>
      </div>
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

export default Form;
