import { PropTypes } from "prop-types";
const ContentLayout = ({ children }) => {
  return (
    <section>
      {children}
    </section>
  );
};

ContentLayout.propTypes = {
  children: PropTypes.node,
};

export default ContentLayout;
