import { Component, OnInit } from '@angular/core';
import { CartService } from 'src/app/core/services/cart/cart.service';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  // total = 0; version subscribre
  total$: Observable<number>;
  constructor(
    private cartService: CartService
  ) { }

  ngOnInit() {
    // this.cartService.cart$.subscribe(products => { version subscribre
    //   this.total = products.length;
    // });
    this.total$ = this.cartService.cart$
    .pipe(
      map(products => products.length)
    );
  }

}
