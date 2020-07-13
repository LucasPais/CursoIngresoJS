/*
Debemos lograr tomar un dato por 'ID'
y luego mostrarlo por 'Alert' al presionar el botón  'mostrar'*/
function mostrar()
{
	var nombreIngresado;
	nombreIngresado=txtIdNombre.value; // sin .value [object HTMLInputElement]
	//nombreIngresado=document.getElementById("txtIdNombre").value lo mismo que el de arriba
	alert("su nombre es: "+nombreIngresado);

}


