import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProductsComponent } from './products/products.component';
import { OrdersComponent } from './orders/orders.component';
import { OrderDetailsComponent } from './orders/orderDetails/orderDetails.component';

const routes: Routes = [
  
  { path: "products", component: ProductsComponent },
  { path: "orders", component: OrdersComponent },
  { path: "order-details/:orderId", component: OrderDetailsComponent }];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
