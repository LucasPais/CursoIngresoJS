function mostrar()
{
	var estacion;
	var destino;
	var tarifa;
	var descuento;
	tarifa=15000;
	tarifa=parseInt(tarifa);
	destino=txtIdDestino.value;
	estacion=txtIdEstacion.value;

	switch(estacion)
	{
		case "Invierno":
			switch(destino)
			{
				case "Bariloche":
					descuento=1.1;
						break;
				case "Cataratas":
				case "Cordoba":
					descuento=0.9;
						break;
				case "Mar del plata":
					descuento=0.8;
						break;	
			}
			break;
		case "Verano":
				switch(destino)
				{
					case "Bariloche":
						descuento=0.8;
							break;
					case "Cataratas":
					case "Cordoba":
						descuento=1.1;
							break;	
					case "Mar del plata":
						descuento=1.2;
							break;	
				}
			break;
		default:
			switch(destino)
			{
				case "Bariloche":
				case "Cataratas":
				case "Mar del plata":
					descuento=1.1;
				case "Cordoba":
					descuento=1;
					break;
			}
			break;
			
	}
		
		tarifaFinal=(tarifa*descuento);
    alert("El precio para "+destino+", en "+estacion+",es de $"+tarifaFinal);
	

}//FIN DE LA FUNCIÓN