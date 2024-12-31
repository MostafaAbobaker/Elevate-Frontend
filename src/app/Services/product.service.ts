import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  constructor(private _http:HttpClient) { }

  getProducts():Observable<any>{

    return this._http.get('https://fakestoreapi.com/products')
  }

  getProductsById(id:number):Observable<any>{
    return this._http.get(`https://fakestoreapi.com/products/${id}`)
  }


}
