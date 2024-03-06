import React from "react";
import { Route, Routes } from "react-router-dom";
import Home from "../home";
import { ROUTES } from "../../utils/routes";
import SingleProduct from "../products/SingleProduct";


const AppRoutes = () => {
  return(
    <Routes>
      <Route index element={<Home />} />
      <Route path={ROUTES.PRODUCT} element={<SingleProduct/>}/>
    </Routes>
  )
}

export default AppRoutes