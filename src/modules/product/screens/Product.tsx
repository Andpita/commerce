import { useEffect } from 'react';

import { Thumbnail } from '../../../shared/components/thumbnail/thumbnail';
import { URL_PRODUCTS } from '../../../shared/constants/urls';
import { MethodsEnum } from '../../../shared/enums/methods.enum';
import { useRequest } from '../../../shared/hooks/useRequest';
import { ProductType } from '../../../shared/types/ProductType';
import { useProductReducer } from '../../../store/reducers/productsReducer/useProductReducer';
import { ProductArea } from '../styles/product.style';

export const Product = () => {
  const { request } = useRequest();
  const { products, setProducts } = useProductReducer();
  useEffect(() => {
    request<ProductType[]>(URL_PRODUCTS, MethodsEnum.GET, setProducts);
  }, []);

  console.log(products);
  return (
    <ProductArea>
      {products.map((product) => (
        <Thumbnail margin="5px" key={product.id} product={product} />
      ))}
    </ProductArea>
  );
};
