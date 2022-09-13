import { useState } from "react";
import Select from "react-select";
import { PaperAirplaneIcon } from "@heroicons/react/20/solid";

const Form = ({ formData, setFormData, createPost, loading }) => {
  const handlechange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const body = {
      title: formData.title,
      body: formData.body,
      categories: selectedCategory.map((category) => category.value),
    };
    console.log(body);
    await createPost(body);
  };
  ////////// LIST BOX /////////

  const [selectedCategory, setSelectedCategory] = useState([]);

  const categoryOptions = [
    { value: "Frontend", label: "Frontend" },
    { value: "Backend", label: "Backend" },
    { value: "Database", label: "Database" },
    { value: "Data", label: "Data" },
    { value: "DevOps", label: "DevOps" },
    { value: "AI and Machine Learning", label: "AI and Machine Learning" },
    { value: "Other", label: "Other" },
  ];

  const style = {
    control: (base) => ({
      ...base,
      border: 0,
      boxShadow: "0 1px 2px 0 rgb(0 0 0 / 0.05)",
      padding: 5,
      color: "red",
    }),
  };

  return (
    <form
      onChange={(e) => handlechange(e)}
      onSubmit={(e) => handleSubmit(e)}
      className="flex flex-col"
    >
      <label htmlFor="title">Title</label>
      <input
        type="text"
        name="title"
        placeholder="Title"
        className="mb-5 mt-1 py-2 px-1 border-solid border-b-2 border-b-purple-400 focus:border-b-purple-700 focus:outline-none"
      />
      <label htmlFor="body">Body</label>
      <textarea
        type="text"
        name="body"
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
        styles={style}
      />

      <div className="flex justify-end">
        <button
          className="btn bg-purple-400 hover:bg-purple-500 transition-colors duration-500 ease-in-out flex items-center"
          type="button"
          disabled={loading}
          onClick={(e) => handleSubmit(e)}
        >
          Post
          <span>
          <PaperAirplaneIcon className="w-4 h-4 ml-3 -rotate-45" />
          </span>
        </button>
      </div>
    </form>
  );
};

export default Form;
