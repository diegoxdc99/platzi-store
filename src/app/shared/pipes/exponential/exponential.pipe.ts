import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'exponential'
})
export class ExponentialPipe implements PipeTransform {
  // value es el valor que llega
  // ..args son los atributos que necesita
  transform(value: number, ...args: any[]): any {
    const exponent = args[0] ? args[0] : 2;
    return Math.pow(value, exponent);
  }
}
