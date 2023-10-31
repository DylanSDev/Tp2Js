let str1 = prompt("Ingrese un texto: ");
let vocales = ['A', 'E', 'I', 'O', 'U', 'a', 'e', 'i', 'o', 'u'];
let posicion = -1; let vocal = "";

for(let i = 0; i < str1.length ; i++)
{
    vocal = str1.substring(i, i+1);
    if(vocales.includes(vocal)) 
    {
        posicion = i;
        break;
    }
}

document.write(`La vocal "${vocal}" se encuentra en la posicion: ${posicion} `);