let frase = "";
let fraseFinal = "";
let bandera=true;

do{
    frase = prompt("Ingrese una cadena de texto: ")  

    //De esta manera evitamos que la frase final tenga concatenado un vacio al comienzo 
    if(bandera)
    {
        fraseFinal = frase;
        bandera = false;
    } else {
        fraseFinal = fraseFinal + "-" + frase;
    }
}while(confirm("- Aceptar para continuar ingresando.\n- Cancelar para terminar."))

document.write(fraseFinal);
