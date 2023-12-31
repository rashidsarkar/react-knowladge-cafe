import { useEffect, useState } from "react";
import SingleBlog from "../SingleBlog/SingleBlog";
import PropTypes from "prop-types";

const Blogs = ({ addToBookMark, markAsRead }) => {
  const [blogs, setBlogs] = useState([]);
  useEffect(() => {
    fetch("blogs.json")
      .then((res) => res.json())
      .then((data) => setBlogs(data));
  }, []);
  return (
    <div className="md:w-2/3">
      <h2 className="text-4xl">Blogs : {blogs.length}</h2>
      {blogs.map((item) => (
        <SingleBlog
          key={item.id}
          singleBlog={item}
          addToBookMark={addToBookMark}
          markAsRead={markAsRead}
        ></SingleBlog>
      ))}
    </div>
  );
};
Blogs.propTypes = {
  addToBookMark: PropTypes.func,
  markAsRead: PropTypes.func,
};

export default Blogs;
