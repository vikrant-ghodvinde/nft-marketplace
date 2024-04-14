import PropTypes from "prop-types";

const Container = ({ children, fluid }) => {
  return (
    <div className={`px-4 ${!fluid ? "max-w-screen-xl" : ""} mx-auto`}>
      {children}
    </div>
  );
};

Container.propTypes = {
  children: PropTypes.node,
  fluid: PropTypes.bool,
};

export default Container;
