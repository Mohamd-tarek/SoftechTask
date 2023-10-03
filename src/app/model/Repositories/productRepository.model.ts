import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { HttpClient, HttpParams } from "@angular/common/http";
import { API_ENDPOINTS } from "../../../app.constants";
import { Product } from "../dataModels/product.model";

@Injectable({
  providedIn: 'root',
})

export class ProductRepository {
  constructor(private http: HttpClient) { }

  getProducts(): Observable<Product[]> {
    return this.http.get<Product[]>(API_ENDPOINTS.Products);
  }

  getProduct(ProductId: number): Observable<Product> {
    return this.http.get<Product>(API_ENDPOINTS.Product + "/" + ProductId);
  }

}
