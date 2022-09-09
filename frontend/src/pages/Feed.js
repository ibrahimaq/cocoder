import { useEffect } from "react";
import { Link } from "react-router-dom";
import { useGetAllposts } from "../hooks/useGetAllPosts";
import moment from "moment";

const Feed = () => {
  moment().format();

  const { getPosts, data, error, loading } = useGetAllposts();

  useEffect(() => {
    getPosts();
  }, []);

  return (
    <div className="pt-5 w-full mx-auto sm:w-4/5">
      {data.getPosts &&
        data.getPosts.map((post) => (
          <article
            key={post._id}
            className="p-3 mx-3 mb-5 bg-white shadow-md flex flex-col rounded-md"
          >
            <header className="grid grid-cols-4">
              <h2 className="text-md sm:text-lg col-span-3 font-medium">{post.title}</h2>
              <span className="inline-block text-end text-sm ">
                {moment(post.createdAt).format("DD MMM YY")}
              </span>
            </header>
            <p className="pt-2">{post.body}</p>
            <footer className="flex flex-row justify-between mt-8">
              <div>
                <span className="mr-3">{post.comment_count}</span>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                  className="w-5 h-5 inline-block text-emerald-500"
                >
                  <path d="M3.505 2.365A41.369 41.369 0 019 2c1.863 0 3.697.124 5.495.365 1.247.167 2.18 1.108 2.435 2.268a4.45 4.45 0 00-.577-.069 43.141 43.141 0 00-4.706 0C9.229 4.696 7.5 6.727 7.5 8.998v2.24c0 1.413.67 2.735 1.76 3.562l-2.98 2.98A.75.75 0 015 17.25v-3.443c-.501-.048-1-.106-1.495-.172C2.033 13.438 1 12.162 1 10.72V5.28c0-1.441 1.033-2.717 2.505-2.914z" />
                  <path d="M14 6c-.762 0-1.52.02-2.271.062C10.157 6.148 9 7.472 9 8.998v2.24c0 1.519 1.147 2.839 2.71 2.935.214.013.428.024.642.034.2.009.385.09.518.224l2.35 2.35a.75.75 0 001.28-.531v-2.07c1.453-.195 2.5-1.463 2.5-2.915V8.998c0-1.526-1.157-2.85-2.729-2.936A41.645 41.645 0 0014 6z" />
                </svg>
              </div>

              <Link
                to={`/${post.author.username}`}
                className="text-sm hover:text-emerald-500 font-medium flex flex-row gap-2"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                  className="w-5 h-5 text-emerald-500"
                >
                  <path d="M10 8a3 3 0 100-6 3 3 0 000 6zM3.465 14.493a1.23 1.23 0 00.41 1.412A9.957 9.957 0 0010 18c2.31 0 4.438-.784 6.131-2.1.43-.333.604-.903.408-1.41a7.002 7.002 0 00-13.074.003z" />
                </svg>

                {post.author.username}
              </Link>
            </footer>
          </article>
        ))}
    </div>
  );
};

export default Feed;
