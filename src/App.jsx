
import React from 'react';
import Footer from './components/footer';
import Header from './components/header';
import AppRoutes from './components/routes/Routes';
import Sidebar from './components/sidebar';
import { useDispatch } from 'react-redux';
import { useEffect } from 'react';
import { getCategories } from './features/categories/categoriesSlice';
import { getProducts } from './features/products/productsSlice';

function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getCategories());
    dispatch(getProducts());

  },[dispatch])

  return (
    <div>
      <Header />
      <div className='container'>
        <Sidebar />
        <AppRoutes />
      </div>
      <Footer/>
    </div>
  );
}

export default App;
