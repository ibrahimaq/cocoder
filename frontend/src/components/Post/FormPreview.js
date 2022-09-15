import ReactMarkdown from "react-markdown";

const FormPreview = ({formData}) => {
    return ( 
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
     );
}
 
export default FormPreview;