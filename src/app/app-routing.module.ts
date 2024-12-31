import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProductsComponent } from './Components/products/products.component';
import { ProductDetailsComponent } from './Components/product-details/product-details.component';

const routes: Routes = [
  {path: '',  redirectTo:'products',pathMatch: 'full' },
  {path: 'products', component:ProductsComponent},
  {path: 'products/:id', component:ProductDetailsComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes,{useHash:true})],
  exports: [RouterModule]
})
export class AppRoutingModule { }
