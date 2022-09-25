import { Link } from "react-router-dom";
import moment from "moment";

import { categoryBgColor } from "../../utils/utils";

const Cards = ({data, selectedCategory}) => {
    moment().format();

    return ( 
        <>
        {data &&
            data
              .filter((post) => {
                if (selectedCategory.value === "All") {
                  return post;
                }
                return post.categories.includes(selectedCategory.value);
              })
              .map((post) => (
                <article
                  key={post._id}
                  className="p-3 mb-5 bg-white shadow-md md:shadow-sm flex flex-col rounded-md"
                >
                  <header className="flex flex-col">
                    <Link to={`/posts/${post._id}`}>
                      <h2 className="post-title">{post.title}</h2>
                    </Link>
                    <span className="text-sm my-2 text-slate-500">
                      {moment(post.createdAt).fromNow()}
                    </span>
                    <div className="flex justify-end flex-wrap space-x-3">
                      {post.categories.map((category, i) => (
                        <span
                          key={i}
                          className={`px-2 bg-opacity-60 rounded-full mt-2 ${categoryBgColor[category]}`}
                        >
                          # {category}
                        </span>
                      ))}
                    </div>
                  </header>
                  <hr className="my-4" />
                  <footer className="flex flex-row justify-between text-sm font-medium">
                    <Link to={`/posts/${post._id}`}>
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 20 20"
                        fill="currentColor"
                        className="w-6 h-6 inline-block mr-2"
                      >
                        <path d="M3.505 2.365A41.369 41.369 0 019 2c1.863 0 3.697.124 5.495.365 1.247.167 2.18 1.108 2.435 2.268a4.45 4.45 0 00-.577-.069 43.141 43.141 0 00-4.706 0C9.229 4.696 7.5 6.727 7.5 8.998v2.24c0 1.413.67 2.735 1.76 3.562l-2.98 2.98A.75.75 0 015 17.25v-3.443c-.501-.048-1-.106-1.495-.172C2.033 13.438 1 12.162 1 10.72V5.28c0-1.441 1.033-2.717 2.505-2.914z" />
                        <path d="M14 6c-.762 0-1.52.02-2.271.062C10.157 6.148 9 7.472 9 8.998v2.24c0 1.519 1.147 2.839 2.71 2.935.214.013.428.024.642.034.2.009.385.09.518.224l2.35 2.35a.75.75 0 001.28-.531v-2.07c1.453-.195 2.5-1.463 2.5-2.915V8.998c0-1.526-1.157-2.85-2.729-2.936A41.645 41.645 0 0014 6z" />
                      </svg>
                      {post.comment_count}
                    </Link>
                    <div>
                      <span>Posted by </span>
                      <Link
                        to={`/${post.author.username}`}
                        className="text-purple-700"
                      >
                        {post.author.username}
                      </Link>
                    </div>
                  </footer>
                </article>
              ))}
              </>
     );
}
 
export default Cards;