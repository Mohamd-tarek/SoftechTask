import { NgModule } from '@angular/core';
import { HttpClientModule } from "@angular/common/http";
import { ProductRepository } from './Repositories/productRepository.model';
import { OrderRepository } from './Repositories/orderRepository.model';
import { UserRepository } from './Repositories/userRepository.model';

@NgModule({
  imports: [
    HttpClientModule
  ],
  providers: [
    ProductRepository,
    OrderRepository,
    UserRepository
  ]
})

export class ModelModule { }
     