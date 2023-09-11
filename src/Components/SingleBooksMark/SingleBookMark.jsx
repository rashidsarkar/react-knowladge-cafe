import PropTypes from "prop-types";

const SingleBookMark = ({ singleBookMark }) => {
  const { title } = singleBookMark;
  return (
    <div>
      <h3 className="text-3xl">{title}</h3>
    </div>
  );
};

SingleBookMark.propTypes = {
  singleBookMark: PropTypes.object,
};
export default SingleBookMark;
