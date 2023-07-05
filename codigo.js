
let totalDeGastos = 0;
let camiseta = prompt(" 1-Camiseta Boca $30.000 \n 2-Camiseta Independiente $26.000 \n 3-Camiseta Racing $26.500 \n 4-Camiseta River $30.000 \n 5-Camiseta San Lorenzo $27.800 \n 6- Camiseta Unión $22.000 \n 0- Opción para finalizar");
while(camiseta !== "0"){
    switch(camiseta){
        case "1":
        alert("Añadiste la camiseta del Xeneize al carrito por el monto de $30.000");
        incrementarTotalDeGastos(30000);
        break;
        case "2": 
        alert("Añadiste la camiseta del Rojo al carrito por el monto de $26.000");
        incrementarTotalDeGastos(26000);
        break;
        case "3":
        alert("Añadiste la camiseta de la Academia al carrito por el monto de $26.500");
        incrementarTotalDeGastos(26500);
        break;
        case "4":
        alert("Añadiste la camiseta del Millonario al carrito por el monto de $30.000");
        incrementarTotalDeGastos(30000);
        break;
        case "5":
        alert("Añadiste la camiseta del Cuervo al carrito por el monto de $27.800");
        incrementarTotalDeGastos(27800);
        break;
        case "6":
        alert("Añadiste la camiseta del Tate al carrito por el monto de $22.000");
        incrementarTotalDeGastos(22000);
        break;
        default:
            alert ("Este número es inválido");
            break;
    }
    camiseta = prompt(" 1-Camiseta Boca $30.000 \n 2-Camiseta Independiente $26.000 \n 3-Camiseta Racing $26.500 \n 4-Camiseta River $30.000 \n 5-Camiseta San Lorenzo $27.800 \n 6- Camiseta Unión $22.000 \n 0- Opción para finalizar");
}

alert ("El total de gastos de tu compra es de $" +totalDeGastos);
function incrementarTotalDeGastos(costocamiseta){
    totalDeGastos = totalDeGastos + costocamiseta;
    console.log ("El monto total es de $"+totalDeGastos);
}