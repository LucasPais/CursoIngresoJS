/*
Debemos lograr tomar Los numeros por ID ,
transformarlos a enteros (parseInt),realizar la operación correcta y 
mostrar el resulto por medio de "ALERT"
ej.: "la Resta es 750"*/ 
function sumar()
{	
	var  numero1;
	numero1=txtIdNumeroUno.value;
	var numero2;
	numero2=txtIdNumeroDos.value;
	numero1=parseInt(numero1);
	numero2=parseInt(numero2);
	var suma
	suma=numero1 + numero2
       alert("la Suma es "+suma);
		
}

function restar()
{
	var  numero1;
	numero1=txtIdNumeroUno.value;
	var numero2;
	numero2=txtIdNumeroDos.value;
	numero1=parseInt(numero1);
	numero2=parseInt(numero2);
	var restar
	restar=numero1 - numero2
       alert("la Resta es "+restar);
}

function multiplicar()
{ 
	var  numero1;
	numero1=txtIdNumeroUno.value;
	var numero2;
	numero2=txtIdNumeroDos.value;
	numero1=parseInt(numero1);
	numero2=parseInt(numero2);
	var multiplicar
	multiplicar=numero1 * numero2
       alert("la Multiplicacion es "+multiplicar);
}

function dividir()
{
	var  numero1;
	numero1=txtIdNumeroUno.value;
	var numero2;
	numero2=txtIdNumeroDos.value;
	numero1=parseInt(numero1);
	numero2=parseInt(numero2);
	var divicion
	divicion=numero1 / numero2
       alert("la Divicion es "+divicion);
}

