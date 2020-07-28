function mostrar()
{
	//Genero el número RANDOM entre 1 y 10 
	var numero;
	var letras;

	numero=Math.floor((Math.random()*10)+1);

	if (numero>8)
	{
		letras="Excelente";
	}
	else
	{
		if(numero>3)
		{
			letras="Aprobo";
		}
		else
		 {
			letras="Vamos, la proxima se puede";
		 }
		
	}

	alert(letras);
	
}//FIN DE LA FUNCIÓN