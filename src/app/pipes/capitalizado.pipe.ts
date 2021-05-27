//PIPE que capitaliza si es true las primeras letras y si es false solo la primer letra
import { Pipe, PipeTransform } from '@angular/core';
@Pipe({
  name: 'capitalizado'
})
export class CapitalizadoPipe implements PipeTransform {
  //valor que recibo, argumentos o parametros que recibo y la funcion que tipo me va a retornar
  transform(value: string, activo:boolean = true): string {
    value = value.toLowerCase();
    let nombres:string[] = value.split(' ');
    if(activo){
      nombres = nombres.map( nombre => {
        //con substr le decimos que concatene apartir de la posicion 1 para que la Primera letra salga en mayuscula
        return nombre[0].toUpperCase() + nombre.substr(1);
      })
      console.log(nombres);      
    } else {
        nombres[0] = nombres[0][0].toUpperCase() + nombres[0].substr(1)      
    }
    //join une los elementos de un arreglo
    return nombres.join(' ');
  }

}
