function mostrar()
{
	//tomo la edad  
/*	var edad;

	edad=txtIdEdad.value;
	edad=parseInt(edad)
	
	if (edad>17)
	{
		
		alert("Usted es mayor de edad");
	}
	if(edad<16)
	{
		if (edad>12)
		{
			alert("Usted es adolescente");
		  }
	}

	if(edad<13){
		alert("Usted es un niño");
	}*/
	var edad;

	edad=txtIdEdad.value;
	edad=parseInt(edad)

	if(edad<12)
	{
		alert("menor")
	}
   else
   {
	if (edad>12 && edad<18)
	{
		alert("adolescente")
	}else{
		alert("mayor")
	}
   }
   
}//FIN DE LA FUNCIÓN