let num = -1;

do{

    num = parseInt(prompt("Ingrese un entero entre 1 y 50: "));
    if(num < 1 || num > 50 ){alert("Ingrese un numero válido.")}

}while(num < 1 || num > 50 )

for (let i = num; i > 0; i--) {
    for(let j = 0; j < i ; j++)
    {
     document.write(i);
    }    
 document.write("<br>");
 }