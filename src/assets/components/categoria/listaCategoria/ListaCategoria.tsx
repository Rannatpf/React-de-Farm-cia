import React, { useEffect, useState } from 'react';
import CardCategoria from '../cardCategorias/CardCategoria';
import { buscar } from '../../../../services/Service';


function ListaCategoria() {
  const [categorias, setCategorias] = useState<Categoria[]>([]);
  const [loading, setLoading] = useState<boolean>(true);

  useEffect(() => {
    // Carregar a lista de categorias ao montar o componente
    carregarCategorias();
  }, []);

  async function carregarCategorias() {
    try {
      const listaCategorias = await buscar('/categorias');
      setCategorias(listaCategorias);
    } catch (error) {
      console.error('Erro ao carregar categorias:', error);
    } finally {
      setLoading(false);
    }
  }

  return (
    <div className="flex justify-center w-full my-4">
      <div className="container flex flex-col">
        {loading ? (
          <p>Carregando categorias...</p>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {categorias.map((categoria) => (
              <CardCategoria key={categoria.id} categoria={categoria} />
            ))}
          </div>
        )}
      </div>
    </div>
  );
}

export default ListaCategoria;
