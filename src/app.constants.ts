const PROTOCOL = "https";
const HOST = "localhost";
const PORT = "0000";

export const BASE_URL = `${PROTOCOL}://${HOST}:${PORT}`;   

export const REST_API_URL = `${BASE_URL}`;
  
interface APIEndPoints {

    readonly Products: string;
    readonly Product: string;
    readonly AddProduct: string;
    readonly DeleteProduct: string;
    readonly Orders: string;
    readonly Order: string;
    readonly AddOrder: string;
    readonly DeleteOrder: string;
  }

  export const API_ENDPOINTS : APIEndPoints =  {
    Products: `${REST_API_URL}/Products`,
    Product: `${REST_API_URL}/Product`,
    AddProduct: `${REST_API_URL}/AddProduct`,
    DeleteProduct: `${REST_API_URL}/DeleteProduct`,
    Orders: `${REST_API_URL}/Orders`,
    Order: `${REST_API_URL}/Order`,
    AddOrder: `${REST_API_URL}/AddOrder`,
    DeleteOrder: `${REST_API_URL}/DeleteOrder`
  }

  

  
