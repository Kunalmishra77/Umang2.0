import React from 'react';
import { Outlet } from 'react-router-dom';
import Header from '../components/common/Header';
import Footer from '../components/common/Footer';

const MainLayout = () => {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <main className="flex-grow pt-[80px] sm:pt-[120px] lg:pt-[130px]">
        <Outlet />
      </main>
      <Footer />
    </div>
  );
};

export default MainLayout;