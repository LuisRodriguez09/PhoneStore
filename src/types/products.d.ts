export interface Product {
  id: number;
  mainPhoto: string;
  name: string;
  price: number;
  secPhoto: string;
  description: string;
  isAddedToWishlist: boolean;
  maxQuantity?: number;
  trdPhoto: string;
  info: string[];
  categories: string[];
}
