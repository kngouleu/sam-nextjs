export interface Product {
    id: string;
    name: string;
    description: string;
    price: number;
    imageUrl: string;
    quantity?: number;
    userId: string;
  }
  
 export interface ProductData {
    name: string;
    description: string;
    price: number;
    imageUrl: string;
  }

export type FormData = {
  firstName: string;
  lastName: string;
  address: string;
  email: string;
  phoneNumber: string;
};


export type TunnelPageProps = {};

export type ProductPageProps = {
  product: Product;
};
export type Props = {
  products: Product[];
};

export type CartPageProps = {};
