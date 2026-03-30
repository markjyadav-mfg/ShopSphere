import type{ Product } from '../types';

export const mockProducts: Product[] = [
  {
    id: 1,
    name: "Sony WH-1000XM5 Wireless Headphones",
    price: 29999,
    originalPrice: 34999,
    category: "electronics",
    rating: 4.8,
    image: "https://picsum.photos/id/60/600/400",
    description: "Industry-leading noise cancelling wireless headphones with exceptional sound quality and 30-hour battery life.",
    stock: 12,
    sizes: ["One Size"]
  },
  {
    id: 2,
    name: "Apple Watch Ultra 2",
    price: 89999,
    category: "electronics",
    rating: 4.9,
    image: "https://picsum.photos/id/201/600/400",
    description: "Rugged and capable smartwatch with advanced health monitoring, precision GPS, and up to 36 hours of battery life.",
    stock: 8
  },
  {
    id: 3,
    name: "Nike Air Force 1 '07",
    price: 8999,
    originalPrice: 10999,
    category: "fashion",
    rating: 4.6,
    image: "https://picsum.photos/id/21/600/400",
    description: "Classic and comfortable sneakers with premium leather upper and iconic Nike Air cushioning.",
    stock: 25,
    sizes: ["40", "41", "42", "43", "44"]
  },
  {
    id: 4,
    name: "Samsung Galaxy Buds 3 Pro",
    price: 14999,
    category: "electronics",
    rating: 4.5,
    image: "https://picsum.photos/id/367/600/400",
    description: "Premium true wireless earbuds with intelligent active noise cancellation and 360 Audio.",
    stock: 18
  },
  {
    id: 5,
    name: "Levi's 501 Original Jeans",
    price: 3499,
    originalPrice: 4999,
    category: "fashion",
    rating: 4.7,
    image: "https://picsum.photos/id/1080/600/400",
    description: "The original straight fit jean that started it all. Timeless style with premium denim.",
    stock: 30,
    sizes: ["28", "30", "32", "34", "36"]
  },
  {
    id: 6,
    name: "MacBook Air M3 Chip",
    price: 124999,
    originalPrice: 139999,
    category: "electronics",
    rating: 4.9,
    image: "https://picsum.photos/id/180/600/400",
    description: "Supercharged by the M3 chip, with up to 18 hours of battery life and stunning Liquid Retina display.",
    stock: 5
  },
  {
    id: 7,
    name: "Adidas Originals Stan Smith",
    price: 7499,
    category: "fashion",
    rating: 4.4,
    image: "https://picsum.photos/id/106/600/400",
    description: "Iconic low-top sneakers with clean minimalist design and premium leather construction.",
    stock: 22,
    sizes: ["39", "40", "41", "42", "43"]
  },
  {
    id: 8,
    name: "Dyson V15 Detect Vacuum Cleaner",
    price: 64999,
    category: "home",
    rating: 4.8,
    image: "https://picsum.photos/id/201/600/400",
    description: "Cordless vacuum with laser dust detection, powerful suction and up to 60 minutes of runtime.",
    stock: 7
  },
  {
    id: 9,
    name: "Boat Airdopes 141 ANC",
    price: 1499,
    originalPrice: 4499,
    category: "electronics",
    rating: 4.3,
    image: "https://picsum.photos/id/367/600/400",
    description: "Affordable wireless earbuds with Active Noise Cancellation and 42 hours of playtime.",
    stock: 45
  },
  {
    id: 10,
    name: "Puma RS-X Sneakers",
    price: 6499,
    category: "fashion",
    rating: 4.5,
    image: "https://picsum.photos/id/21/600/400",
    description: "Bold and futuristic sneakers featuring bold colors and superior cushioning.",
    stock: 19,
    sizes: ["40", "41", "42", "43"]
  },
  {
    id: 11,
    name: "Sony Bravia 55 Inch 4K Smart TV",
    price: 68999,
    originalPrice: 89999,
    category: "electronics",
    rating: 4.7,
    image: "https://picsum.photos/id/180/600/400",
    description: "Crystal clear 4K HDR display with Google TV and premium sound quality.",
    stock: 9
  },
  {
    id: 12,
    name: "Minimalist Leather Backpack",
    price: 2499,
    originalPrice: 3499,
    category: "accessories",
    rating: 4.6,
    image: "https://picsum.photos/id/1060/600/400",
    description: "Premium genuine leather backpack with multiple compartments and sleek minimalist design.",
    stock: 15
  }
];