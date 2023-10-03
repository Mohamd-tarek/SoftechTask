const PROTOCOL = "https";
const HOST = "localhost";
const PORT = "0000";

export const BASE_URL = `${PROTOCOL}://${HOST}:${PORT}`;   

export const REST_API_URL = `${BASE_URL}`;
  
interface APIEndPoints {

    readonly Products: string;
    readonly Product: string;
    readonly Orders: string;
    readonly Order: string;
    readonly Users: string;
    readonly User: string;

  }

  export const API_ENDPOINTS : APIEndPoints =  {
    Products: `${REST_API_URL}/Products`,
    Product: `${REST_API_URL}/Product`,
    Orders: `${REST_API_URL}/Orders`,
    Order: `${REST_API_URL}/Order`,
    Users: `${REST_API_URL}/Users`,
    User: `${REST_API_URL}/User`,

  }

  

  
