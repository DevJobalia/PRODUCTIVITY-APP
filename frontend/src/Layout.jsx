// Layout.js
import React from "react";
import NavBar from "./components/NavBar"; // Import your navigation bar component

const Layout = ({ children }) => {
  // The `children` prop represents the content that will be wrapped by the layout
  return (
    <div>
      <NavBar /> {/* Include your navigation bar component */}
      <div className="content">{children}</div>
      {/* You can add additional layout elements like headers, footers, or sidebars here */}
    </div>
  );
};

export default Layout;
