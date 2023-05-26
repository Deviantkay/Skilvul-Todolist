import { PropTypes } from "prop-types";
const MainLayout = ({ children }) => {
  return (
    <main>
      {children}
    </main>
  );
};

MainLayout.propTypes = {
  children: PropTypes.node,
};

export default MainLayout;
