import { Component } from '@angular/core';
import { OrderRepository } from './model/Repositories/orderRepository.model';
import { ProductRepository } from './model/Repositories/productRepository.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  constructor(public productsRepo: ProductRepository, public ordersRepos: OrderRepository){

  }

  title = 'softechTask';
}
