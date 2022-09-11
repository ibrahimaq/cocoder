import { useEffect } from "react";
import { useParams } from "react-router-dom";
import Error from "../components/states/Error";
import Loading from "../components/states/Loading";
import { useGetPost } from "../hooks/useGetPost";

const GetPost = () => {
  const { id } = useParams();
  const { getPost, data, loading, error } = useGetPost();

  useEffect(() => {
    getPost(id);
  }, []);

  return (
    <>
      {data && (
        <div>
          <article className="px-2 mt-5 bg-white shadow-md">
            <h1>{data.title}</h1>
            <p>{data.body}</p>
          </article>
        </div>
      )}

      {loading && <Loading message={"Loading..."} />}
      {error && (
        <Error
          message={"Oops, we're having some techincal issues. Try again later."}
        />
      )}
    </>
  );
};

export default GetPost;
