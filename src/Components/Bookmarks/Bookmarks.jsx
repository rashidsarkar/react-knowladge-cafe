import PropTypes from "prop-types";
import SingleBookMark from "../SingleBooksMark/SingleBookMark";

const Bookmarks = ({ bookMarks }) => {
  return (
    <div className="md:w-1/3">
      <h2 className="text-3xl">Bookmarks Blogs : {bookMarks.length}</h2>
      {bookMarks.map((item) => (
        <SingleBookMark
          key={bookMarks.id}
          singleBookMark={item}
        ></SingleBookMark>
      ))}
    </div>
  );
};

Bookmarks.propTypes = { bookMarks: PropTypes.object };

export default Bookmarks;
