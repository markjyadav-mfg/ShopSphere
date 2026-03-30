export interface Product {
  id: number;
  name: string;
  price: number;
  originalPrice?: number;
  category: string;
  rating: number;
  image: string;
  description: string;
  stock: number;
  sizes?: string[];
}

export interface CartItem extends Product {
  quantity: number;
}

export interface User {
  id: number;
  name: string;
  email: string;
}
export interface Toast {
  id: string;
  message: string;
  type: 'success' | 'error' | 'info';
  duration?: number;
}

export interface Comment {
  id: string;
  productId: number;
  userName: string;
  text: string;
  rating: number;        // 1 to 5
  date: string;
}