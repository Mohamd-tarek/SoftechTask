import { products } from "./products";
import { orders } from "./orders";
import { users } from "./users";
import { Product } from "src/model/dataModels/product.model";
import { Order } from "src/model/dataModels/order.model";
import { User } from "src/model/dataModels/user.model";


export class StaticDataSource {

    products: Product[] = [];
    orders: Order[] = [];
    users: User[] = [];

    constructor(){
         products.forEach(product => {
           let curProduct = new Product(product.ProductId, product.ProductName, product.ProductPrice, product.AvailablePieces, product.ProductImg);
           this.products.push(curProduct);
        });
        orders.forEach(order => {

            let curOrder = new Order(order.OrderId, order.OrderDate, order.UserId, order.Products,  order.PaymentType);
            this.orders.push(curOrder);
         });
         users.forEach(user => {
            let curUser = new User(user.Id, user.Name, user.Email, user.Phone, user.Address, user.RegisterDate);
            this.users.push(curUser);
         });
    }

    getProducts() : Product[] {
        return this.products;
    }

    getProduct(productId :number) : Product {
        return this.products.find(product => product.productId == productId) as Product;
    }

    getOrders() : Order[] {
        return this.orders;
    }

    getOrder(orderId :number) : Order {
        return this.orders.find(order => order.orderId == orderId) as Order;
    }

    getUsers() : User[] {
        return this.users;
    }

    getUser(userId :string) : User {
        return this.users.find(user => user.id == userId) as User;
    }
}