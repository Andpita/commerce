import { useEffect } from 'react';

import { URL_PRODUCTS } from '../../../shared/constants/urls';
import { MethodsEnum } from '../../../shared/enums/methods.enum';
import { useRequest } from '../../../shared/hooks/useRequest';
import { ProductType } from '../../../shared/types/ProductType';
import { useProductReducer } from '../../../store/reducers/productsReducer/useProductReducer';

export const useProducts = () => {
  const { request, loading } = useRequest();
  const { products, setProducts } = useProductReducer();
  useEffect(() => {
    setProducts([]);
    request<ProductType[]>(URL_PRODUCTS, MethodsEnum.GET, setProducts);
  }, []);

  return {
    loading,
    products,
  };
};
