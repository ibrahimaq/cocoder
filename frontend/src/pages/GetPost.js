
import {useParams} from "react-router-dom";


import PostDetails from "../components/GetPost/PostDetails";



const GetPost = () => {
  const { id } = useParams();

  return (
    <div className="container">
      <PostDetails post_id={id} />
    </div>
  );
};

export default GetPost;
