/*2.	Para el departamento de Construcción:
A.	 mostrar la cantidad de alambre a comprar  si se ingresara el largo y el ancho de un terreno rectangular y se debe alambra con tres hilos de alambre.
B.	mostrar la cantidad de alambre a comprar  si se ingresara el radio  de un terreno circular y se debe alambra con tres hilos de alambre.
C.	Para hacer un contrapiso de 1m x 1m se necesitan 2 bolsas de cemento y 3 de cal, debemos mostrar cuantas bolsas se necesitan de cada uno para las medidas que nos ingresen.
*/

function Rectangulo () 
{
    var ancho;
	var largo;
	var perimetro;
	var alambre;

	ancho=txtIdAncho.value;
	ancho=parseFloat(ancho);
	largo=txtIdLargo.value;
	largo=parseFloat(largo);

	perimetro=ancho*2+largo*2;

	txtIdRadio.value=perimetro;

	alambre=perimetro*3;

	alert("Cantidad de alambre necesaria: "+alambre+" metros");
}
function Circulo () 
{
    var radio;
    var alambre;
    var longitud;
    
    radio=txtIdRadio.value;
    radio=parseFloat(radio);

    longitud=(radio*2)*Math.PI;
    alambre=longitud*3;

alert("La cantidad de alambre necesaria es: "+alambre+" metros");
}
function Materiales () 
{
    var ancho;
	var largo;
	var cemento;
	var cal;

	ancho=txtIdAncho.value;
	ancho=parseFloat(ancho);
	largo=txtIdLargo.value;
	largo=parseFloat(largo);
    
    cemento = (largo*ancho)*2;
	//cemento = parseInt(cemento);
	cemento = parseFloat(cemento);
	cal = (largo*ancho)*3;
	cal = parseFloat(cal);
	
	alert("Se necesitan "+cemento+" bolsas de cemento y "+cal+" bolsas de cal.")
}