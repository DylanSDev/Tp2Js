let nota = parseInt(prompt(" Ingrese la nota: "));

//Se procura que se ingrese una nota entre 0 y 10
if(nota >= 0 && nota <= 10){
   if(nota >= 0 && nota <= 2) {alert("Muy deficiente :c");} 
   if(nota >= 3 && nota <= 4) {alert("Insuficiente :x");}
   if(nota >= 5 && nota <= 6) {alert("Suficiente :]");}
   if(nota == 7) {alert("Bien :D");}
   if(nota >= 8 && nota <= 9) {alert("Notable :D");}
   if(nota == 10) {alert("Sobresaliente {:D}");}

}else if( nota > 10 || nota < 0) {
    alert("¡Se ingresó un numero erróneo!");
} else {
    alert("Introduce un número válido.");
}