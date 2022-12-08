<?php
$id = $_GET['id'];
include_once "cors.php";
include_once "funciones.php";
$producto = eliminarProducto($id);
echo json_encode($producto);
 
