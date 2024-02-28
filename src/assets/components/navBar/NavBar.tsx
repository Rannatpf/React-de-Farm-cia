// Navbar.tsx
import React from 'react';
import { Link } from 'react-router-dom';

const Navbar: React.FC = () => {
  return (
    <nav className="bg-gray-800 p-4 text-white">
      <div className="container mx-auto flex justify-between items-center">
        <Link to="/" className="text-lg font-bold">
           Farmácia
        </Link>
        <div>
          <Link to="/produtos" className="mx-4">
            Produtos
          </Link>
          
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
