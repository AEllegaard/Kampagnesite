import React from 'react';
import { Outlet, Link } from 'react-router-dom';

const App = () => {
  return (
    <div className="flex ">
      <nav className="w-8 h-screen flex flex-col items-center justify-center fixed z-10">
        <ul className="space-y-36">
          <li className="transform -rotate-90 origin-left translate-x-14 text-xl">
            <Link to="/about" className=" whitespace-nowrap font-pp">Read more</Link>
          </li>
          <li className="transform -rotate-90 origin-left translate-x-14 translate-y-10 font-pp text-xl">
            <Link to="https://www.eventim-light.com/dk/a/6268ebc70e2f6b59c13b0fac/s/6655dc75e820523242408abe?lang=da" target='_blank' className=" whitespace-nowrap">Book tickets</Link>
          </li>
        </ul>
      </nav>
      <div className="flex-1 p-6">
        <Outlet />
      </div>
    </div>
  );
};

export default App;