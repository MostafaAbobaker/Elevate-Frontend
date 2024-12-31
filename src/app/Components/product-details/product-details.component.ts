import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { IProduct } from 'src/app/Interfaces/iproduct';
import { ProductService } from 'src/app/Services/product.service';

@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.scss']
})
export class ProductDetailsComponent implements OnInit {
  inputQuantity:number = 1
  productId!: number
  productDetails?:IProduct
  constructor(private _activatedRoute:ActivatedRoute , private _productService:ProductService) { }

  ngOnInit(): void {
    this._activatedRoute.paramMap.subscribe((prompt) =>{console.log(prompt)
      this.productId = Number(prompt.get('id'))
    })
    this._productService.getProductsById(this.productId).subscribe({
      next:(result) => {console.log(result) ;
        this.productDetails = result},
      error:(err) => {console.log(err)},
    })
  }

  addCartItem(id:number){
    console.log(`Product with id ${id} added to cart`)
  }
}
