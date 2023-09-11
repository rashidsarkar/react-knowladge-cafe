import PropTypes from "prop-types";
import { FaBookmark } from "react-icons/fa";
const SingleBlog = ({ singleBlog, addToBookMark }) => {
  const {
    title,
    cover,
    reading_time,
    author_img,
    author,
    posted_date,
    hashtags,
  } = singleBlog;
  // console.log(singleBlog);
  return (
    <div className="mb-20">
      <img className="w-full mb-8" src={cover} alt="" />
      <div className="flex justify-between mb-4">
        <div className="flex ">
          <img className="w-14" src={author_img} alt="" />
          <div className="ml-6">
            <h3 className="text-2xl">{author}</h3>
            <p>{posted_date}</p>
          </div>
        </div>
        <div className="flex items-center">
          <span>{reading_time} min read</span>
          <button
            onClick={() => addToBookMark(singleBlog)}
            className="ml-2 text-red-600 text-2xl"
          >
            <FaBookmark></FaBookmark>
          </button>
        </div>
      </div>
      <h2 className="text-xl">{title}</h2>
      <p>
        {hashtags.map((hash, idx) => (
          <span key={idx}>
            <a href="">#{hash}</a>
          </span>
        ))}
      </p>
    </div>
  );
};
SingleBlog.propTypes = {
  singleBlog: PropTypes.object.isRequired,
  addToBookMark: PropTypes.func,
};

export default SingleBlog;
