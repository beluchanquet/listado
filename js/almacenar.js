// Selección de elementos del DOM
const inputItem = document.getElementById('item');
const contenedor = document.getElementById('contenedor');
const btnAgregar = document.getElementById('agregar');
const btnLimpiar = document.getElementById('limpiar');

// Función para obtener el listado de ítems desde localStorage
function obtenerListado() {
  const listado = localStorage.getItem('listado');
  return listado ? JSON.parse(listado) : []; // Si no existe listado, retorna un array vacío
}

// Función para guardar el listado en localStorage
function guardarListado(listado) {
  localStorage.setItem('listado', JSON.stringify(listado));
}

// Función para actualizar la vista del listado
function actualizarVista() {
  const listado = obtenerListado();
  contenedor.innerHTML = ''; // Limpiamos la vista del contenedor

  // Recorremos el listado y creamos los elementos de la lista
  listado.forEach((item) => {
    const li = document.createElement('li');
    li.className = 'list-group-item'; // Clase de Bootstrap para el estilo de lista
    li.textContent = item;
    contenedor.appendChild(li);
  });
}

// Función para agregar un nuevo ítem
function agregarItem() {
  const nuevoItem = inputItem.value.trim(); // Obtenemos el valor del input y eliminamos espacios

  if (nuevoItem) { // Verificamos que no esté vacío
    const listado = obtenerListado();
    listado.push(nuevoItem); // Añadimos el nuevo ítem al array
    guardarListado(listado); // Guardamos el listado actualizado en localStorage
    actualizarVista(); // Actualizamos la vista
    inputItem.value = ''; // Limpiamos el campo de input
  }
}

// Función para limpiar el listado almacenado
function limpiarListado() {
  localStorage.removeItem('listado'); // Eliminamos el listado de localStorage
  actualizarVista(); // Actualizamos la vista
}

// Agregar event listeners para los botones
btnAgregar.addEventListener('click', agregarItem);
btnLimpiar.addEventListener('click', limpiarListado);

// Actualizar la vista al cargar la página
document.addEventListener('DOMContentLoaded', actualizarVista);