import {
  Component,
  Input,
  Output,
  EventEmitter,
  OnChanges,
  SimpleChanges,
  OnInit,
  OnDestroy } from '@angular/core';
import { Product } from '../../../product.model';
import { CartService } from 'src/app/core/services/cart/cart.service';


@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.scss']
})
export class ProductComponent implements OnInit, OnChanges, OnDestroy {
  // Enviar un parametro a este componente desde afuera
  @Input() product: Product;

  // para declarar un valor de salida se debe de hacer por evento y definir el tipo de valor entre <>
  // y se debe de inicializar con un objeto eventemitter
  @Output() productClicked: EventEmitter<any> = new EventEmitter(); // Se envian los datos por eventos
  today = new Date();

  constructor(
    private cartService: CartService
  ) {
    // console.log('1. constructor');
  }

  ngOnChanges(changes: SimpleChanges) {
    // console.log('2. ngOnChange');
    // console.log('changes :', changes);
  }

  // buena practica usar este evento para usar servicios de datos
  ngOnInit() {
    // console.log('3. ngOnInit');
  }

  // ngDoCheck() {
  //   console.log('4. doCkeck');
  // }

  // limpiar la memoria, desuscripciones. remover etc
  ngOnDestroy() {
    // console.log('5. ngOnDestroy');
  }

  // Función que producirá un evento para que el padre sepa que producto se agregó al carrito
  addCart() {
    console.log('Añadir al carrito');
    this.cartService.addCart(this.product);
    // this.productClicked.emit(this.product.id);
  }
}
