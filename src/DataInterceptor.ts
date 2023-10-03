import { HttpInterceptor, HttpRequest, HttpHandler, HttpEvent, HttpResponse } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable, of } from "rxjs";
import { StaticDataSource } from "./app/staticData/datasource";
import { useAnimation } from "@angular/animations";
import { Order } from "./model/dataModels/order.model";
import { orders } from "./app/staticData/orders";

@Injectable()

export class DataInterceptor implements HttpInterceptor {

  dataSource:StaticDataSource = new StaticDataSource();
  
  constructor() { }

  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    
    let url = req.url.split('0000/');
    url = url[1].split('/');
    
    switch(url[0])
    {
      case "Products" : return of(new HttpResponse({body :this.dataSource.getProducts()}));
      case "Product" : return of(new HttpResponse({body :this.dataSource.getProduct(Number(url[1]))}));
      case "Orders" : return of( new HttpResponse({body : this.dataSource.getOrders()}));
      case "Order" : return of( new HttpResponse({body : this.dataSource.getOrder(Number(url[1]))}));
      case "Users" : return of( new HttpResponse({body : this.dataSource.getUsers()}));
      case "User" : return of( new HttpResponse({body : this.dataSource.getUser(url[1])}));
      default : return of(new HttpResponse({}));
    }
    
  }
}

