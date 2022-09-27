import {Route, Routes} from "react-router-dom";
import React from "react";
import Layout from "../components/Layout";
import Main from "../pages/Main";
import Page1 from "../pages/Page1";
import Page2 from "../pages/Page2";
import Page3 from "../pages/Page3";

const AppRouter = () => {
  return (
    <Layout>
      <Routes>
        <Route path="/" element={<Main/>}/>
        <Route path="page1" element={<Page1/>}/>
        <Route path="page2" element={<Page2/>}/>
        <Route path="page3" element={<Page3/>}/>
      </Routes>
    </Layout>
  )
}

export default AppRouter
