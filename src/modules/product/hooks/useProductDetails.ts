import { useEffect, useState } from 'react';

import { URL_PRODUCTS_ID } from '../../../shared/constants/urls';
import { MethodsEnum } from '../../../shared/enums/methods.enum';
import { useRequest } from '../../../shared/hooks/useRequest';
import { useProductReducer } from '../../../store/reducers/productsReducer/useProductReducer';

export const useProductDetail = (id: string) => {
  const { request, loading } = useRequest();
  const { product, setProduct } = useProductReducer();
  const [amountProduct, setAmountProduct] = useState(1);

  useEffect(() => {
    setProduct(undefined);
    request(URL_PRODUCTS_ID.replace('{id}', `${id}`), MethodsEnum.GET, setProduct);
  }, []);

  return {
    loading,
    product,
    amountProduct,
    setAmountProduct,
  };
};
