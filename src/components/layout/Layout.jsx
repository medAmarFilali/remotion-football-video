import { useState } from "react";
import Header from "./Header/Header";

const Layout = ({ children }) => {
  const [dashboard, setDashboard] = useState(false);
  return (
    <div>
      {dashboard && <Header />}
      {children}
    </div>
  );
};

export default Layout;
