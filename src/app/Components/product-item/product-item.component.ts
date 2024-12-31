import { Component, Input } from '@angular/core';
import { IProduct } from 'src/app/Interfaces/iproduct';

@Component({
  selector: 'app-product-item',
  templateUrl: './product-item.component.html',
  styleUrls: ['./product-item.component.scss']
})
export class ProductItemComponent {
  @Input() product!:IProduct

  addToCart(id:number){
    console.log(`Product with id ${id} added to cart`)
  }
}
