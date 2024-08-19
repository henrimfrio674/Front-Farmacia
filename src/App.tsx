import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from './components/pages/home/Home';
import { DeletarCategoria } from './components/categorias/deletarCategorias/DeletarCategorias';
import Footer from './components/footer/Footer';
import { Header } from './components/header/Header';
import { DeletarProduto } from './components/produtos/deletarProdutos/DeletarProdutos';
import { ListaProdutos } from './components/produtos/listaProdutos/ListaProdutos';
import { ListaCategorias } from './components/categorias/listaCategorias/ListaCategorias';
import FormularioCategorias from './components/categorias/formularioCategorias/FormularioCategorias';
import { FormularioProduto } from './components/produtos/formularioProdutos/FormularioProdutos';

export function App() {
  return (
    <BrowserRouter>
      <div className="relative h-screen">
        <Header />
        <div className="flex-grow">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/home" element={<Home />} />
            <Route path="/categorias" element={<ListaCategorias />} />
            <Route
              path="/deletarCategoria/:id"
              element={<DeletarCategoria />}
            />
            <Route
              path="/cadastroCategoria"
              element={<FormularioCategorias />}
            />
            <Route
              path="/cadastroCategoria/:id"
              element={<FormularioCategorias />}
            />
            <Route path="/produtos" element={<ListaProdutos />} />
            <Route path="/cadastroProduto" element={<FormularioProduto />} />
            <Route
              path="/cadastroProduto/:id"
              element={<FormularioProduto />}
            />
            <Route path="/deletarProduto/:id" element={<DeletarProduto />} />
          </Routes>
        </div>
        <Footer />
      </div>
    </BrowserRouter>
  );
}
