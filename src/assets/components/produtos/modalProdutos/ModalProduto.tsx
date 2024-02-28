import React from 'react';


import 'reactjs-popup/dist/index.css';

import './ModalProduto.css'
import Popup from 'reactjs-popup';
import FormularioProdutos from '../formularioProdutos/FormularioProdutos';

function ModalProduto() {
  return (
    <>
      <Popup> 
      trigger={<button className='border rounded px-4 hover:bg-white hover:text-indigo-800'>Novo produto</button>} modal>
        <div>
          <FormularioProdutos />
        </div>
      </Popup>
    </>
  );
}

export default ModalProduto;