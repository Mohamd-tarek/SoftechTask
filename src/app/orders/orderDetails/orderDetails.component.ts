import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { OrderRepository } from '../../model/Repositories/orderRepository.model';
import { ProductRepository } from '../../model/Repositories/productRepository.model';
import { UserRepository } from '../../model/Repositories/userRepository.model';
import { Order } from '../../model/dataModels/order.model';
import { Product } from '../../model/dataModels/product.model';
import { User } from '../../model/dataModels/user.model';

@Component({
  selector: 'orderetails',
  templateUrl: './orderDetails.component.html',
})
export class OrderDetailsComponent implements OnInit {


  orderId:number;
  order!:Order;
  products:Product[] = [];
  user!:User
  totalPrice:number = 0;

  constructor(
    public orderRepo:OrderRepository,
    public productRepo:ProductRepository,
    public userRepo:UserRepository,
    public route: ActivatedRoute){
    const routeParams = this.route.snapshot.paramMap;

    this.orderId =  Number(routeParams.get('orderId'));

  }

  ngOnInit(): void {
    this.getOrderDetails();
  }

  getOrderDetails(){
    this.orderRepo.getOrder(this.orderId).subscribe(order => {
      this.order = order;
      this.userRepo.getUser(this.order.userId as string).subscribe(user => {
        this.user = user;
      })
      this.order.products?.forEach(orderProduct =>{
         this.productRepo.getProduct(orderProduct.ProductId).subscribe(product => {
             this.products.push(product);
             this.totalPrice += product.productPrice * orderProduct.Quantity;
         })
      })
    })
    
  }

  getQuantity(i:number) :number{

    if(this.order.products){
     return this.order.products[i].Quantity
    }
    else
    {
      return 0;
    }
  }

}
