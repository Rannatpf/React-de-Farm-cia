import React from 'react';
import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from './paginas/home/Home';
import Navbar from './assets/components/navBar/NavBar';
import ListaCategoria from './assets/components/categoria/listaCategoria/ListaCategoria';
import Footer from './assets/components/footer/Footer';
import FormularioCategoria from './assets/components/categoria/formularioCategoria/FormularioCategoria';
import ListaProdutos from './assets/components/produtos/listaProdutos/ListaProdutos';
import DeletarCategoria from './assets/components/categoria/deletarCategoria/DeletarCategoria';
import FormularioProdutos from './assets/components/produtos/formularioProdutos/FormularioProdutos';






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
              <Route path="/cadastroCategoria" element={<FormularioCategoria />} />
              <Route path="/editarCategoria/:id" element={<FormularioCategoria />} />
              <Route path="/deletarCategoria/:id" element={<DeletarCategoria />} />
              <Route path="/produtos" element={<ListaProdutos />} />
              <Route path="/cadastroProduto" element={<FormularioProdutos />} />
              <Route path="/editarProduto/:id" element={<FormularioProdutos />} />
            </Routes>
          </div>
          <Footer />
        </BrowserRouter>
    </>
  );
}
export default App;