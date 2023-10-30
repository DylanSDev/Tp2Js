let edad = parseInt(prompt("Ingrese su edad: "));

if (edad > 18 && edad <110){
    alert("¡Ya puedes conducir!");

} else if(edad > 0 && edad <=18){
    alert("¡No puedes conducir! Tas chiquito :c");
} else {
    alert("¡No se ha ingresado una edad valida!");
}