import React from 'react';
import CategoriaCard from '../components/CategoriaCard';
import './PaginaExplorar.css';


const categorias = [
  { nome: 'Ferramentas', imagem: '/assets/ferramentas.png', link: '#' },
  { nome: 'Utilitários', imagem: '/assets/utilitarios.png', link: '#'},
  { nome: 'Eletrônicos', imagem: '/assets/eletronicos.png', link: '#' },
  { nome: 'Brinquedos', imagem: '/assets/brinquedos.png', link: '#' },
  { nome: 'Entretenimento', imagem: '/assets/entretenimento.png', link: '#'},
  { nome: 'Móveis', imagem: '/assets/moveis.png', link: '#' }
];

const PaginaExplorar = () => {
  const handleClick = () => {
    console.log("Botão clicado!");
  };

  return (
    <div className="explorar-container">
      <header className="top-bar">
        <a href="#" className="logo">INFINITY MARKET</a>
        <div className="input-container">
          <img src="/assets/search.png" alt="Pesquisa" className="search-icon" />
          <input type="text" placeholder="pesquise por itens, coleções ou contas..." />
        </div>
          <nav>
            <a href="#">Explorar</a>
            <a href="#">Coleções</a>
            <a href="#">Anúncios</a>
            <a href="#">Comunidade</a>
            <button onClick={handleClick} style={{ border: "none", background: "none" }}>
            <img src="/assets/criar.png" alt="Botão Criar" className="criar-img" />
            </button>
            <img src="/assets/user.png" alt="Usuario" className="user-icon" />
          </nav>
      </header>
        <div className="categorias-mapa">
          <CategoriaCard {...categorias[0]} className="cat1" />
          <CategoriaCard {...categorias[1]} className="cat2" />
          <CategoriaCard {...categorias[2]} className="cat3" />

          <div className="explorar-botao-central" onClick={handleClick}>
            <img src="/assets/carrinho.png" alt="Carrinho" className="carrinho-img" />
            <img src="/assets/border.png" alt="Botão imagem" className="botao-img" />
          </div>

          <CategoriaCard {...categorias[3]} className="cat4" />
          <CategoriaCard {...categorias[4]} className="cat5" />
          <CategoriaCard {...categorias[5]} className="cat6" />
        </div>
    </div>
  );
};

export default PaginaExplorar;

