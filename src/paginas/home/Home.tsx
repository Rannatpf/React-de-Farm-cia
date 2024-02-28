import React from 'react';
import homeLogo from '../assets/home.png';
import './Home.css';

import { Link } from 'react-router-dom';

function Home() {
  return (
    <>
      <div className="pharmacy-grid grid-cols-2 grid-rows-2 rounded-lg bg-gradient-to-r bg-green-500">
        <div className="container grid grid-cols-2 text-white">
          <div className="flex flex-col gap-4 items-center justify-center py-4">
            <h2 className="text-5xl font-bold">Bem-vindo à Farmácia </h2>
            <p className="text-xl">Cuidando da sua saúde e bem-estar.</p>

            <div className="flex justify-around gap-4">
              <Link to="/produtos">
                <button className="border rounded px-5 text-white bg-blue-700 hover:bg-gray-300">
                  Ver Produtos
                </button>
              </Link>
            </div>
          </div>

          <div className="flex justify-center ">
            
          </div>
        </div>
      </div>
    </>
  );
}

export default Home;
