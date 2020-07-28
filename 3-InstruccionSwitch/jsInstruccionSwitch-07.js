function mostrar()
{
	var destino
	destino=txtIdDestino.value

	switch(destino)
	{
		case "Cordoba":
			alert("Oeste");
			break;
		case "Mar del plata":
			alert("Este");
			break;
		case "Cataratas":
			alert("Norte");
			break;
		case "Bariloche":
			alert("Sur");		
	}

}//FIN DE LA FUNCIÓN