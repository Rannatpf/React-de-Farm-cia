import React from 'react'
import { Link } from 'react-router-dom'
import Categoria from '../../../models/Categoria'

interface CardCategoriaProps {
  categoria: Categoria
}

function CardCategoria({categoria}: CardCategoriaProps) {
  return (
    <div className='border flex flex-col rounded-2xl overflow-hidden justify-between'>
      <header className='py-2 px-6 bg-violet-800 text-violet-300 font-bold text-2xl'>Categoria</header>
      <p className='p-8 text-3xl bg-slate-100 h-full'>{categoria.descricao}</p>
      <div className="flex">
        <Link to={`/editarCategoria/${categoria.id}`} className='w-full text-white bg-pink-600 hover:bg-pink-200 flex items-center justify-center py-2'>
          <button>Editar</button>
        </Link>
        <Link to={`/deletarCategoria/${categoria.id}`} className='text-white bg-sky-700 hover:bg-sky-200 w-full flex items-center justify-center'>
          <button>Deletar</button>
        </Link>
      </div>
    </div>
  )
}

export default CardCategoria