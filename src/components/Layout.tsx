import Navbar from "./Navbar";
import {ReactFCWithChildren} from "../types/react";
import {StyledLayout} from "../styles/shared";
import Sidebar from "./Sidebar";

const Layout: ReactFCWithChildren = ({children}) => {
  return (
    <StyledLayout>
      <Sidebar />
      <div className="layout-container">
        <Navbar/>
        <div className="content">
          {children}
        </div>
      </div>
    </StyledLayout>
  )
}

export default Layout;
