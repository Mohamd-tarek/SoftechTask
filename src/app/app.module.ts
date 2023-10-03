import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavBarComponent } from './navbar/navbar.component';
import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { CacheInterceptor } from 'src/CacheInterceptor';
import { DataInterceptor } from 'src/DataInterceptor';
import { ModelModule } from './model/model.module';
import { ProductsModule } from './products/products.module';
import { OrdersModule } from './orders/orders.module';


@NgModule({
  declarations: [
    AppComponent,
    NavBarComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ModelModule,
    ProductsModule,
    OrdersModule
  ],
  providers: [ 
    { provide: HTTP_INTERCEPTORS, useClass: CacheInterceptor, multi: true },
    { provide: HTTP_INTERCEPTORS, useClass: DataInterceptor , multi: true }],
  bootstrap: [AppComponent]
})
export class AppModule { }
