import { useEffect, useState } from "react";
import moment from "moment";

import Cards from "../components/Feed/Cards";
import SelectFilter from "../components/Feed/SelectFilter";
import HoverMenu from "../components/Feed/HoverMenu";

import { useGetAllposts } from "../hooks/useGetAllPosts";

import Loading from "../components/states/Loading";
import Error from "../components/states/Error";

const Feed = () => {
  const [selectedCategory, setSelectedCategory] = useState({
    value: "All",
    label: "All",
  });
  moment().format();

  const { getPosts, data, error, loading } = useGetAllposts();

  useEffect(() => {
    getPosts();
  }, []);


  return (
    <div className="pt-5 px-3 mx-auto flex flex-col md:flex-none md:w-11/12">
      <div className="md:fixed w-full md:w-80">
        <p className="mb-2 font-medium">Filter by category:</p>
        <SelectFilter
          selectedCategory={selectedCategory}
          setSelectedCategory={setSelectedCategory}
        />
      </div>
      <div className="md:ml-80 md:pl-3">
        <Cards data={data} selectedCategory={selectedCategory} />
      </div>
      <HoverMenu />

      {loading && <Loading message={"Loading some cool projects..."} />}
      {error && (
        <Error
          message={
            "OoOoPs! We're having some technical issues, try again later."
          }
        />
      )}
    </div>
  );
};

export default Feed;
