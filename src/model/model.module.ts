import { NgModule } from '@angular/core';
import { HttpClientModule } from "@angular/common/http";
import { ProductRepository } from './Repositories/productRepository.model';
import { OrderRepository } from './Repositories/orderRepository.model';

@NgModule({
  imports: [
    HttpClientModule
  ],
  providers: [
    ProductRepository,
    OrderRepository
  ]
})

export class ModelModule { }
     