export interface Product {
  id: number | string;
  mainPhoto: string;
  name: string;
  price: number | string;
  secPhoto: string;
  description: string;
  isAddedToWishlist: boolean;
  maxQuantity?: number;
  trdPhoto: string;
  info: string[];
  categories: string[];
}
