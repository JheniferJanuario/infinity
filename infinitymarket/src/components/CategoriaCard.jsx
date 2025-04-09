import React from 'react';
import './estilos/CategoriaCard.css';

const CategoriaCard = ({ imagem, link, className }) => {
  return (
    <div className={`card-categoria ${className}`}>
      <a href={link}><img src={imagem} alt="categoria" /></a>
    </div>
  );
};

export default CategoriaCard;


