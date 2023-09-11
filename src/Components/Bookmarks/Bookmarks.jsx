import PropTypes from "prop-types";
import SingleBookMark from "../SingleBooksMark/SingleBookMark";

const Bookmarks = ({ bookMarks, readTime }) => {
  return (
    <div className="md:w-1/3 bg-gray-400 ml-4 mt-2 p-4">
      <div>
        <h3 className="text-4xl border-b-2 my-3 py-3">
          Reading time : {readTime}
        </h3>
      </div>
      <h2 className="text-3xl text-center ">
        Bookmarks Blogs : {bookMarks.length}
      </h2>
      {bookMarks.map((item, idx) => (
        <SingleBookMark key={idx} singleBookMark={item}></SingleBookMark>
      ))}
    </div>
  );
};

Bookmarks.propTypes = {
  bookMarks: PropTypes.array,
  readTime: PropTypes.number,
};

export default Bookmarks;
