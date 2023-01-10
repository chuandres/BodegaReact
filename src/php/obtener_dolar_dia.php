<?php
include_once "cors.php";
include_once "funciones.php";
$producto = obtenerDolarDia();
echo json_encode($producto);