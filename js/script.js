// // Este código se ejecuta cuando todo el DOM ha sido cargado
// document.addEventListener('DOMContentLoaded', function() {
//   // Cargar la vista inicial (home.php) al cargar la página
//   cargarVista('home.php');
// });

// // Función para cargar una vista utilizando AJAX
// function cargarVista(vista) {
//   // Crear una nueva instancia de XMLHttpRequest para hacer una solicitud AJAX
//   const xhttp = new XMLHttpRequest();

//   // Esta función se ejecutará cada vez que cambie el estado de la solicitud
//   xhttp.onreadystatechange = function() {
//     // Verificar si la solicitud está completa (estado 4) y es exitosa (código de estado 200)
//     if (this.readyState === 4 && this.status === 200) {
//       // Colocar la respuesta (contenido de la vista) en el elemento con ID 'contenido'
//       document.getElementById('contenido').innerHTML = this.responseText;
//     }
//   };

//   // Configurar la solicitud para obtener la vista desde la carpeta 'views/'
//   xhttp.open('GET', `views/${vista}`, true);

//   // Enviar la solicitud
//   xhttp.send();
// }


// version 2

document.addEventListener('DOMContentLoaded', function() {
  // Cargar la vista inicial al cargar la página
  cargarVista('home.php');
});

function cargarVista(vista) {
  const xhttp = new XMLHttpRequest();
  xhttp.onreadystatechange = function() {
    if (this.readyState === 4 && this.status === 200) {
      document.getElementById('contenido').innerHTML = this.responseText;
    }
  };
  xhttp.open('GET', `views/${vista}`, true);
  xhttp.send();
}

// Escucha los clics en los enlaces y carga la vista correspondiente
document.addEventListener('click', function(event) {
  const target = event.target;
  if (target.tagName === 'A') {
    event.preventDefault();
    const vista = target.getAttribute('href');
    cargarVista(vista);
    // Cambia la URL en la barra de direcciones sin recargar la página
    history.pushState(null, null, vista);
  }
});

// Maneja el evento de navegación hacia adelante y atrás del navegador
window.addEventListener('popstate', function(event) {
  const vista = location.pathname.substring(1); // Obtiene la parte de la URL después del dominio
  cargarVista(vista);
});
