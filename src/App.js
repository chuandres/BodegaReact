import './App.css';
// import Nav from './components/nav';
import AgregarProducto from "./components/AgregarProducto";
import VerProductos from './components/VerProductos';
import EditarProductos from './components/EditarProductos';
import EliminarProducto from './components/EliminarProducto';
import React, { useState } from "react";
import {
  BrowserRouter,
  Routes,
  Route,
  Link,
} from "react-router-dom";
function App() {
  return (
    <div>
    <div className="container is-fullhd">
      <div className="columns">
      <BrowserRouter>
        <Routes>
          <Route path="/productos/agregar" element={<AgregarProducto />}/>
          <Route path="/productos/editar/:id" element={ <EditarProductos/>}/>
          <Route path="/productos/ver" element={<VerProductos/>}/>
          <Route path="/productos/eliminar/:id" element={ <EliminarProducto/>} />
          <Route path="/" element={ <VerProductos/>} />
        </Routes>
      </BrowserRouter>
      </div>
    </div>
  </div>
  );
}

export default App;
