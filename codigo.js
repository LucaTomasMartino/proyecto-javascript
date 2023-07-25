let numero1, numero2;
function capturarEntradas() {
numero1 = parseFloat(prompt("Ingrese el primer número:"));
numero2 = parseFloat(prompt("Ingrese el segundo número:"));
}
function suma(a, b) {
return a + b;
}
function resta(a, b) {
return a - b;
}
const miArray = [10, 5, 8, 15, 20];
function buscarEnArray(valor) {
return miArray.includes(valor);
}
function filtrarArray(min, max) {
return miArray.filter((numero) => numero >= min && numero <= max);
}
function mostrarResultadoAlert(resultado) {
alert("El resultado es: " + resultado);
}
function mostrarResultadoConsole(resultado) {
console.log("El resultado es:", resultado);
}

capturarEntradas();

const opcion = parseInt(prompt("Elija una opción:\n1. Suma\n2. Resta\n3. Búsqueda en el array\n4. Filtrado del array"));

switch (opcion) {
case 1:
    const resultadoSuma = suma(numero1, numero2);
    mostrarResultadoAlert(resultadoSuma);
    mostrarResultadoConsole(resultadoSuma);
    break;
case 2:
    const resultadoResta = resta(numero1, numero2);
    mostrarResultadoAlert(resultadoResta);
    mostrarResultadoConsole(resultadoResta);
    break;
case 3:
    const valorBuscado = parseFloat(prompt("Ingrese el valor que desea buscar en el array:"));
    const resultadoBusqueda = buscarEnArray(valorBuscado);
    mostrarResultadoAlert(resultadoBusqueda);
    mostrarResultadoConsole(resultadoBusqueda);
    break;
case 4:
    const minimo = parseFloat(prompt("Ingrese el valor mínimo para el filtrado del array:"));
    const maximo = parseFloat(prompt("Ingrese el valor máximo para el filtrado del array:"));
    const resultadoFiltrado = filtrarArray(minimo, maximo);
    mostrarResultadoAlert(resultadoFiltrado);
    mostrarResultadoConsole(resultadoFiltrado);
    break;
default:
    alert("Opción inválida.");
    break;
}