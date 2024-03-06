import React, { useEffect } from "react";
import Poster from "../poster";
import Products from "../products";
import { useDispatch, useSelector } from "react-redux";
import Categories from "../categories";
import Banner from "../banner";
import { filterByPrice } from "../../features/products/productsSlice";

const Home = () => {
  const dispatch = useDispatch();
  const {
    products: { list, filtered }, 
    categories,
  } = useSelector(( state ) => state);

  useEffect(() => {
    if(!list.length) return;

    dispatch(filterByPrice(100))
  },[dispatch, list.length])


  return (
    <div>
      <Poster />
      <Products products={list} amount={5} title="Trending"/>
      <Categories products={filtered} amount={5} title="Worth seeing"/>
      <Banner/>
      <Products products={filtered} amount={5} title="Less than 100%"/>

    </div>
  )
};

export default Home;
