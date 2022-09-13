import { useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import Error from "../components/states/Error";
import Loading from "../components/states/Loading";
import { useGetPost } from "../hooks/useGetPost";
import moment from "moment";

const GetPost = () => {
  const { id } = useParams();
  const { getPost, data, loading, error } = useGetPost();

  moment().format();

  useEffect(() => {
    getPost(id);
  }, []);

  return (
    <>
      {data && (
        <div>
          <article className="mx-3 p-4 mt-5 bg-white shadow-md rounded-md">
            <header>
              <h1 className="post-title">{data.title}</h1>
              <span className="text-sm mt-2 text-slate-500">
                {moment(data.createdAt).fromNow()}
              </span>
            </header>
            <p className="pt-2">{data.body}</p>
            <hr className="my-4" />
            <footer className="flex flex-row justify-between">
              <button className="text-sm font-medium">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                  className="w-6 h-6 inline-block mr-2"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M20.25 8.511c.884.284 1.5 1.128 1.5 2.097v4.286c0 1.136-.847 2.1-1.98 2.193-.34.027-.68.052-1.02.072v3.091l-3-3c-1.354 0-2.694-.055-4.02-.163a2.115 2.115 0 01-.825-.242m9.345-8.334a2.126 2.126 0 00-.476-.095 48.64 48.64 0 00-8.048 0c-1.131.094-1.976 1.057-1.976 2.192v4.286c0 .837.46 1.58 1.155 1.951m9.345-8.334V6.637c0-1.621-1.152-3.026-2.76-3.235A48.455 48.455 0 0011.25 3c-2.115 0-4.198.137-6.24.402-1.608.209-2.76 1.614-2.76 3.235v6.226c0 1.621 1.152 3.026 2.76 3.235.577.075 1.157.14 1.74.194V21l4.155-4.155"
                  />
                </svg>
                Read comments
              </button>
              <div className="text-sm font-medium">
                <span>Posted by </span>
                <Link to='/:username' className="text-purple-700">{data.author.username}</Link>
              </div>
            </footer>
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
