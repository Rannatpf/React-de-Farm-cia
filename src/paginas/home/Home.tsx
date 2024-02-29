// src/paginas/home/Home.jsx
import React from 'react';
import homeLogo from '../assets/home.png';
import './Home.css';
import { Link } from 'react-router-dom';

function Home() {
  return (
    <div className="w-full h-screen flex items-center justify-start bg-cover bg-center" style={{ backgroundImage: `url('/src/assets/home.png')` }}>
      <div className="container grid grid-cols-2 text-black">
        <div className="flex flex-col gap-4 items-center justify-center py-4 col-span-2">
          <h2 className="text-5xl font-bold">Bem-vindo à Farmácia</h2>
          <p className="text-xl text-black">Cuidando da sua saúde e bem-estar.</p>
          <div className="flex justify-around gap-4">
            <Link to="/produtos">
              <button className="border rounded px-5 text-black bg-teal-800 hover:bg-gray-300">
                Ver Produtos
              </button>
            </Link>
          </div>
        </div>
        <div className="flex col-span-2"></div>
      </div>
    </div>
  );
}

export default Home;
