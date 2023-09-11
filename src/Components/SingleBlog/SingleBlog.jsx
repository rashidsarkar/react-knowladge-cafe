import PropTypes from "prop-types";
const SingleBlog = ({ singleBlog }) => {
  console.log(singleBlog);
  return <div></div>;
};
SingleBlog.propTypes = { singleBlog: PropTypes.object.isRequired };

export default SingleBlog;
