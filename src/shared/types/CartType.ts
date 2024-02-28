import { CartProductsType } from './CartProductType';

export interface CartType {
  id: number;
  cartProducts: CartProductsType[];
}
