let str1 = prompt("Ingrese un texto: ");
let vocales = ['A', 'E', 'I', 'O', 'U', 'a', 'e', 'i', 'o', 'u'];
let contador = 0;

for(let i = 0; i < str1.length; i++)
{
    if(vocales.includes(str1.substring(i, i+1)))
    {
        contador++;
    }
}

document.write("Cantidad de vocales: " + contador);