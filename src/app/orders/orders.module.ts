import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { ModelModule } from 'src/model/model.module';
import { RouterModule } from '@angular/router';
import { OrdersComponent } from './orders.component';
import { OrderDetailsComponent } from './orderDetails/orderDetails.component';


@NgModule({
  imports: [
    BrowserModule,
    ModelModule,
    RouterModule
  ],
  declarations: [
   OrdersComponent,
   OrderDetailsComponent
  ]
})
export class OrdersModule { }
