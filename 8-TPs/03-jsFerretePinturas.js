/*3.	Para el departamento de Pinturas:
A.	Al ingresar una temperatura en Fahrenheit debemos mostrar la temperatura en Centígrados con un mensaje concatenado (ej.: " 32 Fahrenheit son 0 centígrados").
B.	Al ingresar una temperatura en Centígrados debemos mostrar la temperatura en Fahrenheit (ej.: "0  centígrados son 32 Fahrenheit ").
*/
function FahrenheitCentigrados () 
{
    var temperatura;
    var centigrados;
 
    temperatura=txtIdTemperatura.value;
    temperatura=parseInt(temperatura);

    centigrados=(temperatura - 32) *5/9
    //centigrados=parseInt(centigrados);

    alert(temperatura+" grados fahrenheit son "+centigrados.toFixed(2)+" grados centigrados.");
}

function CentigradosFahrenheit () 
{
    var temperatura;
    var fahrenheit;
 
    temperatura=txtIdTemperatura.value;
    temperatura=parseInt(temperatura);

    fahrenheit=(temperatura*9/5)+32
    //fahrenheit=parseInt(fahrenheit);

    alert(temperatura+" grados centigrados son "+fahrenheit.toFixed(2)+" grados fahrenheit.");
}
