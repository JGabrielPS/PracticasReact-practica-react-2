import React from "react";

const Card = ({ imagen, titulo, texto }) => {
  return (
    <div className="card" style={{ width: "18rem" }}>
      <img src={imagen} alt="" className="card-img-top img-thumbnail" />
      <div className="card-body">
        <h5 className="card-title">{titulo}</h5>
        <p className="card-text">{texto}</p>
        <a href="#" className="btn btn-primary">
          Ver más
        </a>
      </div>
    </div>
  );
};

export default Card;
