import { ProductType } from './ProductType';

export interface CartProductsType {
  id: number;
  amount: number;
  product?: ProductType;
}
