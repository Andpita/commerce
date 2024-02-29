import { Image } from 'antd';
import { useEffect } from 'react';
import { useParams } from 'react-router-dom';

import { Screen } from '../../../shared/components/screen/Screen';
import { URL_PRODUCTS_ID } from '../../../shared/constants/urls';
import { MethodsEnum } from '../../../shared/enums/methods.enum';
import { useRequest } from '../../../shared/hooks/useRequest';
import { useProductReducer } from '../../../store/reducers/productsReducer/useProductReducer';
import { ProductDetail } from '../styles/productDetail.style';

export const ProductDetails = () => {
  const { id } = useParams();
  const { request } = useRequest();
  const { product, setProduct } = useProductReducer();

  useEffect(() => {
    request(URL_PRODUCTS_ID.replace('{id}', `${id}`), MethodsEnum.GET, setProduct);
  }, [id]);

  return (
    <Screen>
      <ProductDetail>
        <Image width={300} src={product?.image} />
        <div>{product?.name}</div>
        <div>{product?.name}</div>
        <div>{product?.name}</div>
        <div>{product?.name}</div>
        <div>{product?.name}</div>
        <div>{product?.name}</div>
      </ProductDetail>
    </Screen>
  );
};
