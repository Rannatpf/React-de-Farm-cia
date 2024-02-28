import React from 'react';
import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from './paginas/home/Home';
import Navbar from './assets/components/navBar/NavBar';
import ListaCategoria from './assets/components/categoria/listaCategoria/ListaCategoria';
import Footer from './assets/components/footer/Footer';






function App() {
  return (
    <>
        <BrowserRouter>
          <Navbar />
          <div className='min-h-[80vh]'>
            <Routes>
            <Route path="/" element={<Home />} />
              <Route path="/home" element={<Home />} />
              <Route path="/categoria" element={<ListaCategoria />} />
              
            </Routes>
          </div>
          <Footer />
        </BrowserRouter>
    </>
  );
}
export default App;