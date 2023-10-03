import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { ModelModule } from '../model/model.module';
import { RouterModule } from '@angular/router';
import { ProductsComponent } from './products.component';
import { ProductComponent } from './product/product.component';


@NgModule({
  imports: [
    BrowserModule,
    ModelModule,
    RouterModule
  ],
  declarations: [
    ProductsComponent, 
    ProductComponent
  ]
})
export class ProductsModule { }
