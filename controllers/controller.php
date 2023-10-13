<?php
if (isset($_GET['vista'])) {
  $vista = $_GET['vista'];

  // Aquí puedes incluir lógica para cargar diferentes vistas según la solicitud
  include_once "views/$vista";
}
?>