let numero = 0;
let suma = 0;

do{
   numero = parseFloat(prompt(" Ingrese un número: "));

   while(isNaN(numero))
   {
        alert(" No es un número >:/")
        numero = parseFloat(prompt(" Ingrese un número: "));
   }
    suma = suma + numero;
   
    
}while(confirm("- Aceptar para continuar ingresando.\n- Cancelar para terminar."))

document.write("La suma total es: " + suma);