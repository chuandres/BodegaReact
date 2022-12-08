<?php
$id = $_GET['id'];
include_once "cors.php";
include_once "funciones.php";
$producto = obtenerProductoPorId($id);
echo json_encode($producto);