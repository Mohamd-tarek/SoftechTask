import { Component, OnDestroy, OnInit } from '@angular/core';
import { OrderRepository } from 'src/model/Repositories/orderRepository.model';
import { ProductRepository } from 'src/model/Repositories/productRepository.model';
import { Product } from 'src/model/dataModels/product.model';
import { Subscription } from 'rxjs';

@Component({
  selector: 'products',
  templateUrl: './products.component.html',
})
export class ProductsComponent implements OnInit, OnDestroy{

  products!:Product[];
  productsSubscribtion!: Subscription
  constructor(public productsRepo: ProductRepository) {
    
  }

  ngOnInit(): void {
   this.productsSubscribtion =  this.productsRepo.getProducts().subscribe(products => {
      this.products = products;
     })
  }

  ngOnDestroy(): void {
    this.productsSubscribtion.unsubscribe();
  }

}
