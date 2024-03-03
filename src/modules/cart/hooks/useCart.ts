import { useEffect } from 'react';

import { URL_CART, URL_PAYMENTS } from '../../../shared/constants/urls';
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

  const dateGeneration = () => {
    const months = [
      'January',
      'February',
      'March',
      'April',
      'May',
      'June',
      'July',
      'August',
      'September',
      'October',
      'November',
      'December',
    ];

    const d = new Date();
    const dateF = `${d.getDate()}/${months[d.getMonth()]}/${d.getFullYear()}`;

    return dateF;
  };

  const paymentTest = async () => {
    const date = dateGeneration();

    await request(
      URL_PAYMENTS,
      MethodsEnum.POST,
      undefined,
      {
        codePix: 'teste frontend',
        datePayment: `${date}`,
        addressId: 1,
      },
      'Processando Pagamento',
    );

    setCart(undefined);
  };

  return {
    cart,
    loading,
    paymentTest,
  };
};
