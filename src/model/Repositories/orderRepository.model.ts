import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { HttpClient, HttpParams } from "@angular/common/http";
import { API_ENDPOINTS } from "../../app.constants";
import { Order } from "../dataModels/order.model";



@Injectable({
  providedIn: 'root',
})

export class OrderRepository {
  constructor(private http: HttpClient) { }

  getOrders(): Observable<Order[]> {
    return this.http.get<Order[]>(API_ENDPOINTS.Orders);
  }

  getOrder(OrderId: number): Observable<Order> {
    return this.http.get<Order>(API_ENDPOINTS.Order + "/" + OrderId);
  }
}
