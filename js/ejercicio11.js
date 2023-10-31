let nombres = [];
let edades = [];


for(let i = 0; i < 3; i++){
    let nombre =  prompt("Ingrese un nombre: ");
    let edad = parseInt(prompt("Ingrese la edad: "));

    nombres.push(nombre);
    edades.push(edad);
}

document.write("La persona con mayor edad es: " + nombres[edades.indexOf(Math.max(...edades))]);