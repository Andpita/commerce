import { useEffect } from 'react';

import { URL_CART } from '../../../shared/constants/urls';
import { MethodsEnum } from '../../../shared/enums/methods.enum';
import { useRequest } from '../../../shared/hooks/useRequest';
import { CartType } from '../../../shared/types/CartType';
import { useCartReducer } from '../../../store/reducers/cartReducer/useCartReducer';
import { useGlobalReducer } from '../../../store/reducers/globalReducer/useGlobalReducer';

export const useCart = () => {
  const { user } = useGlobalReducer();
  const { cart, setCart } = useCartReducer();
  const { request, loading } = useRequest();

  useEffect(() => {
    if (!user) {
      return;
    } else {
      request<CartType>(URL_CART, MethodsEnum.GET, setCart);
    }
  }, [user]);

  return {
    cart,
    loading,
  };
};
