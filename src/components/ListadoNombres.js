import React, { useState } from "react";

import uniqid from "uniqid";

const ListadoNombres = () => {
  const [nombre, setNombre] = useState("");
  const [listaNombres, setListaNombre] = useState([]);
  const [modoEdicion, setModoEdicion] = useState(false);
  const [id, setId] = useState("")

  const addNombre = (e) => {
    e.preventDefault();

    const nuevoNombre = {
      id: uniqid(),
      nombre,
    };

    setListaNombre([...listaNombres, nuevoNombre]);
    setNombre("");
  };

  const deleteNombre = (_id) => {
    const nuevaLista = listaNombres.filter((item) => item.id !== _id);
    setListaNombre(nuevaLista);
  };

  const editMode = (item) => {
    setModoEdicion(true);
    setNombre(item.nombre);
  };

  const editNombre = (e) => {
    const nuevaLista = listaNombres.map((item) =>
      item.id === id ? { id, nombre } : item
    );
    setListaNombre(nuevaLista);
  };

  return (
    <div>
      <h1>Aplicación CRUD básica</h1>
      <div className="row">
        <div className="col">
          <h2 className="mb-3">Listado de nombres</h2>
          <ul className="list-group">
            {listaNombres.map((item) => {
              return (
                <li key={item.id} className="list-group-item mb-3">
                  {item.nombre}
                  <button
                    className="btn btn-info float-right"
                    onClick={() => editMode(item)}
                  >
                    Editar
                  </button>
                  <button
                    className="btn btn-danger float-right"
                    onClick={() => deleteNombre(item.id)}
                  >
                    Eliminar
                  </button>
                </li>
              );
            })}
          </ul>
        </div>
        <div className="col">
          <h2 className="mb-3">Formulario para añadir nombres</h2>
          <form className="form-group" onSubmit={addNombre}>
            <input
              type="text"
              className="form-control mb-3"
              placeholder="Introduce tu nombre"
              onChange={(e) => setNombre(e.target.value)}
              value={nombre}
            />
            <input
              type="submit"
              className="btn btn-info btn-block mb-3"
              value={modoEdicion ? "Editar nombre" : "Crear nombre"}
            />
          </form>
        </div>
      </div>
    </div>
  );
};

export default ListadoNombres;
