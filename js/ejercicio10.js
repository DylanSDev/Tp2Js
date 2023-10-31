//Se obvian las validaciones de datos
let filas = parseInt(prompt("Ingrese el numero de filas: "));
let columnas = parseInt(prompt("Ingrese el numero de columnas: "));

let num = filas * columnas;

document.write('<table class="table table-bordered border-primary">');
for(let i=0; i<filas; i++)
{
    document.write('<tr>');
    for(let j=0; j<columnas; j++)
    {
        document.write(`<td>${num}</td>`);
        num--;
    }
    document.write('</tr>');
}
document.write('</table>');
