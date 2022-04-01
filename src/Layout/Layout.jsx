import React from 'react';
import { Outlet, Link, useLocation } from 'react-router-dom';

function Layout() {
  const location = useLocation();
  const currentURL = location.pathname;
  return (
    <div className="md:flex md:min-h-screen">
      <div className="md:w-1/4 bg-blue-900 px-5 py-10">
        <h2 className="text-4xl font-black text-center text-white">
          CRM - Clientes
        </h2>
        <nav className="mt-10">
          <Link
            to="/customers"
            className={` text-2xl block mt-2 hover:text-blue-300 ${
              currentURL === '/customers' ? 'text-blue-300 underline' : 'text-white'
            }`}
          >
            Clientes
          </Link>
          <Link
            to="/customers/new"
            className={` text-2xl block mt-2 hover:text-blue-300 ${
              currentURL === '/customers/new' ? 'text-blue-300 underline' : 'text-white'
            }`}
          >
            Nuevo Cliente
          </Link>
        </nav>
      </div>
      <div className="md:w-3/4 p-10 md:h-screen overflow-y-scroll">
        <Outlet />
      </div>
    </div>
  );
}

export default Layout;
