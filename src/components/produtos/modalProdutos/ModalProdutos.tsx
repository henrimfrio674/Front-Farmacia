import 'reactjs-popup/dist/index.css';
import Popup from 'reactjs-popup';
import './ModalProdutos.css';
import { FormularioProduto } from '../formularioProdutos/FormularioProdutos';

function ModalProduto() {
  return (
    <>
      <Popup
        trigger={
          <button className="border-2 border-red-700 rounded-lg px-4 py-2 bg-red-50 text-red-700 hover:bg-red-700 hover:text-white transition-colors duration-300">
            Novo produto
          </button>
        }
        modal
        contentStyle={{
          borderRadius: '8px',
          padding: '20px',
          backgroundColor: '#fef2f2', // Fundo vermelho claro para o conteúdo do modal
          maxWidth: '500px',
          width: '90%',
        }}
        overlayStyle={{ backgroundColor: 'rgba(0, 0, 0, 0.5)' }}
      >
        <div>
          <h2 className="text-2xl font-bold text-red-900 mb-4">
            Adicionar Novo Produto
          </h2>
          <FormularioProduto />
        </div>
      </Popup>
    </>
  );
}

export default ModalProduto;
