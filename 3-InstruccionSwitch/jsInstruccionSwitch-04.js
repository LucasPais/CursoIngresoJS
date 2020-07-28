function mostrar()
{
	//tomo el mes
	var mes
	mes=txtIdMes.value

	switch(mes)
	{
		case "Febrero":
            alert("Tiene 28 dias.");
            break;
        case "Junio":
        case "Abril":
        case "Septiembre":
        case "Noviembre":
            alert("Tiene 30 dias.");
            break;
        default:
            alert("Tiene 31 dias.");
            break;
	}
	
}//FIN DE LA FUNCIÓN