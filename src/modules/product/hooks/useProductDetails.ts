import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';

import { URL_CART, URL_PRODUCTS_ID } from '../../../shared/constants/urls';
import { MethodsEnum } from '../../../shared/enums/methods.enum';
import { RoutesEnum } from '../../../shared/enums/route.enum';
import { useRequest } from '../../../shared/hooks/useRequest';
import { useGlobalReducer } from '../../../store/reducers/globalReducer/useGlobalReducer';
import { useProductReducer } from '../../../store/reducers/productsReducer/useProductReducer';

export const useProductDetail = (id: string) => {
  const { request, loading } = useRequest();
  const { product, setProduct } = useProductReducer();
  const [amountProduct, setAmountProduct] = useState(1);
  const navigate = useNavigate();
  const { user: userReducer, setNotification } = useGlobalReducer();

  useEffect(() => {
    setProduct(undefined);
    request(URL_PRODUCTS_ID.replace('{id}', `${id}`), MethodsEnum.GET, setProduct);
  }, []);

  const submitProductInOrder = async (productId: number, amount: number, user = userReducer) => {
    if (!user) {
      setNotification('error', 'Faça login para continuar sua compra.');
      navigate(RoutesEnum.LOGIN);
      return;
    }

    await request(
      URL_CART,
      MethodsEnum.POST,
      undefined,
      { productId, amount },
      'Produto adicionado com sucesso',
    );
    navigate(RoutesEnum.PRODUCT);
  };

  return {
    loading,
    product,
    amountProduct,
    setAmountProduct,
    submitProductInOrder,
  };
};
