const camisetas = [
    { id: 1, precio: 30100 },
    { id: 2, precio: 24499 },
    { id: 3, precio: 24499 },
    { id: 4, precio: 30100 },
    { id: 5, precio: 26999 },
    { id: 6, precio: 27100 },
];
function agregarAlCarrito(id) {
    const cantidadInput = document.getElementById(`cantidad-camiseta-${id}`);
    const cantidad = parseInt(cantidadInput.value);
    if (cantidad > 0) {
    const carrito = obtenerCarrito();
    const camiseta = camisetas.find(item => item.id === id);
    carrito.push({ id: camiseta.id, precio: camiseta.precio, cantidad });
    guardarCarrito(carrito);
    mostrarCarrito();
    }
}
function obtenerCarrito() {
    const carrito = localStorage.getItem('carrito');
    return carrito ? JSON.parse(carrito) : [];
}
function guardarCarrito(carrito) {
    localStorage.setItem('carrito', JSON.stringify(carrito));
}

function mostrarCarrito() {
    const carrito = obtenerCarrito();
    const listaCarrito = document.getElementById('items-carrito');
    listaCarrito.innerHTML = '';

    let totalCompra = 0;

    carrito.forEach(item => {
      const subtotal = item.precio * item.cantidad;
    totalCompra += subtotal;

    const listItem = document.createElement('li');
    listItem.textContent = `${item.cantidad} x Camiseta ${item.id} - Subtotal: $${subtotal}`;
    listaCarrito.appendChild(listItem);
    });

    const totalCompraElement = document.getElementById('total-compra');
    totalCompraElement.textContent = `$${totalCompra}`;
}
mostrarCarrito();
function comprar() {
    alert('¡Gracias por su compra!');
    vaciarCarrito();
    mostrarCarrito();
}
function vaciarCarrito() {
    const carrito = [];
    guardarCarrito(carrito);
}
