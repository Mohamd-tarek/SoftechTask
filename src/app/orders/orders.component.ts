import { Component, OnDestroy, OnInit } from '@angular/core';
import { OrderRepository } from 'src/model/Repositories/orderRepository.model';
import { Subscription } from 'rxjs';
import { Order } from 'src/model/dataModels/order.model';
import { ProductRepository } from 'src/model/Repositories/productRepository.model';

@Component({
  selector: 'orders',
  templateUrl: './orders.component.html',
})
export class OrdersComponent implements OnInit, OnDestroy{

  orders!:Order[];
  ordersSubscribtion!: Subscription
  constructor(
    public ordersRepo: OrderRepository,
    public productRepo:ProductRepository) {
    
  }

  ngOnInit(): void {
   this.ordersSubscribtion =  this.ordersRepo.getOrders().subscribe(orders => {
      this.orders = orders;
     })
  }

  ngOnDestroy(): void {
    this.ordersSubscribtion.unsubscribe();
  }

  getTotalPrice(order:Order)
  {
    let totalPrice:number = 0;
    order.products?.forEach(orderProduct => {      
      this.productRepo.getProduct(orderProduct.ProductId).subscribe(product => {
        totalPrice += product.productPrice * orderProduct.Quantity;
      });
    })

    return totalPrice;
  }

}
