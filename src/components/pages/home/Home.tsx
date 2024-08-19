import { ListaProdutos } from '../../produtos/listaProdutos/ListaProdutos';
import ModalProdutos from '../../produtos/modalProdutos/ModalProdutos';
import './Home.css';

function Home() {
  return (
    <>
      <div className="flex justify-center py-8">
        <div className="max-w-6xl w-full text-gray-800">
          <div className="flex flex-col items-center justify-center py-4">
            <h2 className="text-4xl font-semibold text-red-900">
              Bem-vindo à 75!
            </h2>
            <p className="text-lg text-gray-700">
              Encontre os melhores produtos para sua saúde.
            </p>

            <div className="flex gap-4 mt-4">
              <ModalProdutos />
              <button className="rounded bg-red-600 hover:bg-red-700 text-white py-2 px-4">
                Ver produtos
              </button>
            </div>
          </div>
        </div>
      </div>
      <ListaProdutos />
    </>
  );
}

export default Home;
