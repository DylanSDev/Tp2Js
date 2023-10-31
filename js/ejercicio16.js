let str1 = prompt("Ingrese un texto: ");
let strInverso = "";

for(let i = str1.length; i > 0; i--)
{
    strInverso = strInverso + str1.substring(i, i-1);
}

document.write(strInverso);