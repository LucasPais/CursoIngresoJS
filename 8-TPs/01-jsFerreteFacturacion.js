/*1.	Para el departamento de facturación:
A.	Ingresar tres precios de productos y mostrar la suma de los mismos.
B.	Ingresar tres precios de productos y mostrar el promedio de los mismos.
C.	ingresar tres precios de productos  y mostrar precio final (más IVA 21%).
*/
function Sumar () 
{
    var numero1;
    var numero2;
    var numero3;
    var suma;

    numero1=txtIdPrecioUno.value;
    numero2=txtIdPrecioDos.value;
    numero3=txtIdPrecioTres.value;
    numero1=parseInt(numero1);
    numero2=parseInt(numero2);
    numero3=parseInt(numero3);

    suma=numero1 + numero2 + numero3;
       alert("El resultado es "+suma);
}
function Promedio () 
{
    var numero1;
    var numero2;
    var numero3;
    var promedio;

    numero1=txtIdPrecioUno.value;
    numero2=txtIdPrecioDos.value;
    numero3=txtIdPrecioTres.value;
    numero1=parseInt(numero1);
    numero2=parseInt(numero2);
    numero3=parseInt(numero3);

    promedio=(numero1+numero2+numero3)/3;
    alert("El promedio es "+promedio);
}
function PrecioFinal () 
{
    var numero1;
    var numero2;
    var numero3;
    var preciofinal;
    var suma;

    numero1=txtIdPrecioUno.value;
    numero2=txtIdPrecioDos.value;
    numero3=txtIdPrecioTres.value;
    numero1=parseInt(numero1);
    numero2=parseInt(numero2);
    numero3=parseInt(numero3);

    suma=numero1 + numero2 + numero3;
    preciofinal=suma*1.21;
    alert("El precio final es $"+preciofinal);
}