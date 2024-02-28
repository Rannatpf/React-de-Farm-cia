import React from 'react';
import ModalProduto from '../modalProdutos/ModalProduto';



function FormularioProdutos() {
  

 
  return (
    <div className="container flex flex-col mx-auto items-center">
      <h1 className="text-4xl text-center my-8"></h1>
    

      <form  className="flex flex-col w-1/2 gap-4">
        <div className="flex flex-col gap-2">
          <label htmlFor="titulo">Produto</label>
          <input
            
            type="text"
            placeholder="Titulo"
            name="titulo"
            required
            className="border-2 border-slate-700 rounded p-2"
          />
        </div>
        <div className="flex flex-col gap-2">
          <label htmlFor="titulo">Tipo:</label>
          <input
            
            type="text"
            placeholder="Texto"
            name="texto"
            required
            className="border-2 border-slate-700 rounded p-2"
          />
        </div>
        <div className="flex flex-col gap-2">
          <p>Categoria do Formulario Produto</p>
          <select name="tema" id="tema" className='border p-2 border-slate-800 rounded' >
            <option value="" selected disabled>Selecione uma categoria</option>
           
              <>
                <option >categoria1</option>
              </>
           
          </select>
        </div>
        <button  type='submit' className='rounded disabled:bg-slate-200 bg-indigo-400 hover:bg-indigo-800 text-white font-bold w-1/2 mx-auto block py-2'>
         Cadastrar
        </button>
      </form>
    </div>
  );
}

export default FormularioProdutos;