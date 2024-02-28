import { useDispatch } from 'react-redux';

import { CartType } from '../../../shared/types/CartType';
import { useAppSelector } from '../../hooks';
import { setCartAction } from '.';

export const useCartReducer = () => {
  const dispatch = useDispatch();

  const { cart } = useAppSelector((state) => state.cartReducer);
  const setCart = (cart: CartType) => {
    dispatch(setCartAction(cart));
  };

  return {
    cart,
    setCart,
  };
};
