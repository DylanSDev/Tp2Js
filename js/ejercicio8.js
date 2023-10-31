let num = -1;

do{

    num = parseInt(prompt("Ingrese un entero entre 1 y 50: "));
    if(num < 1 || num > 50 ){alert("Ingrese un numero válido.")}

}while(num < 1 || num > 50 )

for (let i = 0; i < num; i++) {
   for (let j = 1; j <= i+1; j++)
   {
        document.write(j);
   }
   document.write("<br>");
 }