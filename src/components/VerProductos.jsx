import React, {useEffect, useState} from 'react'
import Constantes from './constantes'
import FilaDeTablaDeProducto from './FilaDeTablaDeProducto';
import { Link, useNavigate, } from "react-router-dom";


const VerProductos = () => {

    const [productos, setProductos] = useState([]);
    const [valorDolarDia, setvalorDolarDia] = useState({});
    const navigate = useNavigate();   

function handleChange(e) {
    const { name, value } = e.target;
    setvalorDolarDia({...valorDolarDia, [name]: value});
};

function handleSubmit(e) {
    e.preventDefault();
    const datosJSON = JSON.stringify(valorDolarDia);
    const exitoso = fetch(`${Constantes.RUTA_API}/src/php/actualizar_dolar.php`, {
      method: "PUT",
      body: datosJSON,
    }).then((response) => {
      if(response.ok){
        navigate("/productos/ver");
      }
    });
  }
        
useEffect(() => {
    fetch(`${Constantes.RUTA_API}/src/php/obtener_productos.php`)
    .then((response) => { 
      if(response.ok){
        return response.json();
      }
      throw response;
    })
    .then((data)=>{
      fetch(`${Constantes.RUTA_API}/src/php/obtener_dolar_dia.php`)
      .then((response) => {
        if(response.ok){
            return response.json();
        }
        throw response;
      }).then((data1)=>{
            setvalorDolarDia(data1[0]);
      });
      return setProductos(data);
    })
    .catch(error => {
      console.log("error", error)
    });
    
  },[]);

  return (
      <div>
          <div className="column">
              <h1 className="is-size-3">Productos</h1>
              <Link to={`/productos/agregar`} className="button is-success">AGREGAR PRODUCTO</Link>
              {/* <form action="" onSubmit={handleSubmit}>
                    <h4>Dolar al día de hoy:</h4>
                    <input type="text" name="valor" value={valorDolarDia.valor} onChange={handleChange}/>
                    <input type="submit" value="Submit" />
                </form>      */}
          </div>
          <div className="table-container">
              <table className="table is-fullwidth is-bordered">
                  <thead>
                      <tr>
                          <th> Bs. $PA</th>
                          <th>Bs. PA</th>
                          <th>Nombre</th>
                          <th>Precio</th>
                          <th>Precio en Dolares</th>
                          <th>Precio en Bolivares</th>
                          <th>Funciones</th>
                          {/* <th>Editar</th> */}
                          {/* <th>Eliminar</th> */}
                      </tr>
                  </thead>
                  <tbody>
                      {productos.map(producto => {
                          return <FilaDeTablaDeProducto key={producto.id} producto={producto} dolarDia = {valorDolarDia}></FilaDeTablaDeProducto>;
                      })}
                  </tbody>
              </table>
          </div>
      </div>
  );
}


export default VerProductos