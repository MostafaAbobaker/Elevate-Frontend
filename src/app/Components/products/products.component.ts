import { Component, OnInit } from '@angular/core';
import { IProduct } from 'src/app/Interfaces/iproduct';
import { ProductService } from 'src/app/Services/product.service';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss']
})
export class ProductsComponent implements OnInit {
  filterByName:string = '';
  productsItems!: IProduct[]

constructor(private _productService:ProductService) {

}
  ngOnInit(): void {

    this._productService.getProducts().subscribe({
      next:(data) =>{console.log(data)
        this.productsItems = data;
      },
      error:(err) =>{console.log(err)}

    })
  }



}
