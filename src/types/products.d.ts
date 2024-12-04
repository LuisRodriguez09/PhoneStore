export interface Product {
  id: number;
  src: string;
  name: string;
  price: number;
  rating: number;
  description: string;
  isAddedToWishlist: boolean;
  maxQuantity?: number;
}
