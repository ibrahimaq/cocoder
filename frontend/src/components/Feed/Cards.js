import { Link } from "react-router-dom";
import moment from "moment";

import { categoryBgColor } from "../../utils/utils";
import CommentIcon from "../../assets/icons/CommentIcon.js";

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
                      <CommentIcon customClass="w-6 h-6 inline mr-2" />
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