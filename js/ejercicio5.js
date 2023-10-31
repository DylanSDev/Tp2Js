let dni = -1;
let indice = -1;
let letras = ["T", "R", "W", "A", "G", "M", "Y", "F", "P", "D", "X", "B", "N", "J", "Z", "S", "Q", "V", "H", "L", "C", "K", "E"];

do{
   
    do{
        dni = parseInt(prompt("Ingrese el numero de DNI sin puntos: "))
        if(isNaN(dni) || dni < 0 || dni > 99999999) { alert("¡No se ha ingresado un numero correcto! :c ")};
    } while(isNaN(dni) || dni < 0 || dni > 99999999)
    
    indice = dni % 23;

    document.write("DNI ingresado: " + dni);
    document.write("     -       Letra correspondiente: " + letras[indice] + "<br>");

 }while(confirm("- Aceptar para continuar ingresando.\n- Cancelar para terminar."))
