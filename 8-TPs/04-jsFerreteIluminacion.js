/*4.	Para el departamento de iluminación:
Tomando en cuenta que todas las lámparas están en oferta al mismo precio de $35 pesos final.
A.	Si compra 6 o más  lamparitas bajo consumo tiene un descuento del 50%. 
B.	Si compra 5  lamparitas bajo consumo marca "ArgentinaLuz" se hace un descuento del 40 % y si es de otra marca el descuento es del 30%.
C.	Si compra 4  lamparitas bajo consumo marca "ArgentinaLuz" o “FelipeLamparas” se hace un descuento del 25 % y si es de otra marca el descuento es del 20%.
D.	Si compra 3  lamparitas bajo consumo marca "ArgentinaLuz"  el descuento es del 15%, si es  “FelipeLamparas” se hace un descuento del 10 % y si es de otra marca un 5%.
E.	Si el importe final con descuento suma más de $120  se debe sumar un 10% de ingresos brutos en informar del impuesto con el siguiente mensaje:
 ”Usted pago X de IIBB.”, siendo X el impuesto que se pagó. 

 */
function CalcularPrecio () 
{

    var cantidad; 
    var descuento;
    var marca;
    var lampara;
    var precio;
    var impuesto;

impuesto = 0;
 lampara=35;
 cantidad=txtIdCantidad.value;
 marca=document.getElementById("Marca").value;

 cantidad=parseInt(cantidad);
 precio=(lampara*cantidad);

 if(cantidad>5)//A
    {
        descuento=precio-(precio*50/100);
    
    }else
        {
         if(cantidad==5)//B
         {
         switch(marca)
             {
                case "ArgentinaLuz":
                     descuento=precio-(precio*40/100);
                          break;
                  default:
                     descuento=precio-(precio*30/100);
                        break;
            } 
        }else
         
         if(cantidad==4)//C
        {   switch(marca)
           {
              case "ArgentinaLuz":
              case "FelipeLamparas":
                  descuento=precio-(precio*25/100);
                      break;
              default:
                   descuento=precio-(precio*20/100); 
                       break;     
                }
            }else
            {
            cantidad==3;
            switch(marca)
            {
                case "ArgentinaLuz":
                     descuento=precio-(precio*15/100);
                       break;
                case "FelipeLamparas":
                     descuento=precio-(precio*10/100);
                         break;
                default:
                    descuento=precio-(precio*5/100);
                         break;     
                }   
            }

        }
            precioConDescuento=descuento;
         if(precioConDescuento>120)
 {
     impuesto=(precioConDescuento*0.1);
    

    alert("Usted pago "+impuesto+" de Ingresos Brutos");
 }
 
    txtIdprecioDescuento.value=precioConDescuento + impuesto;
 
}                           
