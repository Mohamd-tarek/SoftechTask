import { Product } from "./product.model";

export class Order {
    constructor(
      public  orderId?: number,
      public  orderDate? :string,
      public  userId? : string,
      public  products? :any[] ,
      public  paymentType?:string,
     ) {} 
  }
