function mostrar()
{
	var edad;
	var estadoCivil;
	var mensaje = "";
	estadoCivil = estadoCivil.value;
	edad = txtIdEdad.value;
	edad = parseInt(edad);

	if(edad < 18)
	{
      mensaje = "respeta a tus mayores";
	      if( edad < 13)
	      {
	      	mensaje = mensaje + " hagan la tarea";
	      }
	      else
	      {
	      	switch(estadoCivil)
	      	{
	        case "Casado":
	        	case "Divorciado":
	        		mensaje = mensaje + " sos muy joven para no ser soltero";
	        		mensaje = mensaje + " a intentarlo nuevamente";
	        		break;
	        	case "Soltero":
	        		mensaje = mensaje + " a vivir la vida";
	        		break;
	      	}
	      }
    }
    else
    {
      mensaje = "se responsable";
	      if(edad >60)
	      {
	      	mensaje = mensaje + "sos persona de riesgo";
	      }
		  else
		{
	      switch(estadoCivil)
	      	{
	      	case "Divorciado":
				mensaje = mensaje + " a intentarlo nuevamente";
	        	break;
	        case "Casado":
	        	mensaje = mensaje + " a disfrutar la pareja";
	        	break;
		 	}
		}
	}
	alert(mensaje);
}
//FIN DE LA FUNCIÓN