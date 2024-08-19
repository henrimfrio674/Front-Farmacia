import { useEffect, useState } from 'react';
import Produto from '../../../models/Produto';
import { CardProduto } from '../cardProdutos/CardProdutos';
import { buscar } from '../../../service/Service';

export function ListaProdutos() {
  const [produtos, setProdutos] = useState<Produto[]>([]);

  async function buscarPostagens() {
    try {
      await buscar('/produtos', setProdutos, {
        headers: {},
      });
    } catch (error: any) {
      console.log(error);
    }
  }

  useEffect(() => {
    buscarPostagens();
  }, [produtos.length]);

  return (
    <div className="container mx-auto my-4 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
      {produtos.map((produto) => (
        <CardProduto key={produto.id} produto={produto} />
      ))}
    </div>
  );
}
