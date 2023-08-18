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
        carrito.push({ id: camiseta.id, precio: camiseta.precio, cantidad});
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
        listItem.textContent = `${item.cantidad} x Camiseta ${item.id}  - Subtotal: $${subtotal}`;
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
function mostrarFormulario() {
    const formulario = document.getElementById('formulario-compra');
    const carritoContainer = document.getElementById('carrito');
    
    formulario.classList.remove('disabled');
    carritoContainer.classList.add('disabled');
}

function realizarCompra() {
    // Obtener los valores del formulario
    const nombre = document.getElementById('nombre').value;
    const email = document.getElementById('email').value;
    const celular = document.getElementById('celular').value;
    const whatsapp = document.getElementById('whatsapp').value;
    
    // Aquí puedes realizar acciones con los datos, como enviarlos a un servidor, etc.
    // Por ahora, solo mostraremos un mensaje de éxito
    alert(`Gracias por tu compra, ${nombre}! Te contactaremos por email: ${email} y celular: ${celular}. Enlace a WhatsApp: ${whatsapp}`);
    
    // Limpiar el carrito y mostrarlo nuevamente
    vaciarCarrito();
    mostrarCarrito();
    
    // Ocultar el formulario y mostrar el carrito nuevamente
    const formulario = document.getElementById('formulario-compra');
    const carritoContainer = document.getElementById('carrito');
    
    formulario.classList.add('disabled');
    carritoContainer.classList.remove('disabled');
    
    // También podrías redireccionar a otra página o realizar más acciones según tus necesidades
}
function vaciarCarrito() {
    const carrito = [];
    guardarCarrito(carrito);
}
