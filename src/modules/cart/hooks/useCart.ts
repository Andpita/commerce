import { useEffect, useState } from 'react';

import { URL_ADDRESS, URL_CART, URL_PAYMENTS } from '../../../shared/constants/urls';
import { MethodsEnum } from '../../../shared/enums/methods.enum';
import { dateGeneration } from '../../../shared/functions/dateFunctions';
import { useRequest } from '../../../shared/hooks/useRequest';
import { CartType } from '../../../shared/types/CartType';
import { useAddressReducer } from '../../../store/reducers/addressReducer/useAddressReducer';
import { useCartReducer } from '../../../store/reducers/cartReducer/useCartReducer';
import { useGlobalReducer } from '../../../store/reducers/globalReducer/useGlobalReducer';

export const useCart = () => {
  const { user } = useGlobalReducer();
  const { cart, setCart } = useCartReducer();
  const { request, loading } = useRequest();
  const { address, setAddress } = useAddressReducer();
  const [paymentData, setPaymentData] = useState({
    codePix: 'PaymentFrontend',
    datePayment: `${dateGeneration()}`,
    addressId: 0,
    delivery: '',
  });

  useEffect(() => {
    if (!user) {
      console.log('sem user', user);
    } else {
      request<CartType>(URL_CART, MethodsEnum.GET, setCart);
    }
  }, [user]);

  useEffect(() => {
    if (!address || address.length === 0) {
      request(URL_ADDRESS, MethodsEnum.GET, setAddress);
    }
  }, [user]);

  const paymentTest = async () => {
    await request(URL_PAYMENTS, MethodsEnum.POST, undefined, paymentData, 'Processando Pagamento');
    setCart(undefined);
  };

  const handleChangeSelect = (value: string) => {
    setPaymentData({
      ...paymentData,
      addressId: +value,
    });
    console.log(paymentData);
  };

  return {
    cart,
    loading,
    address,
    paymentTest,
    user,
    handleChangeSelect,
  };
};
