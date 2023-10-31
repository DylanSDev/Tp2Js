let str1 = prompt("Ingrese un texto: ");
let strGuion = ""; //Cadena con guiones

for(let i = 0; i < str1.length; i++)
{
    if(i==0) { strGuion = str1.substring(0,1);}
    else {
        strGuion = strGuion + "-" +  str1.substring(i, i+1);
    }
}

document.write(strGuion);