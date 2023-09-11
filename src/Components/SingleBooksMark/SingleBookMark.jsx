import PropTypes from "prop-types";

const SingleBookMark = ({ singleBookMark }) => {
  const { title } = singleBookMark;
  return (
    <div className="bg-slate-300 p-4 m-4 rounded-xl">
      <h3 className="text-2xl">{title}</h3>
    </div>
  );
};

SingleBookMark.propTypes = {
  singleBookMark: PropTypes.object,
};
export default SingleBookMark;
