import { useEffect } from 'react';

import { DisplayFlexCenter } from '../../../shared/components/displays/display.styled';
import { LateralBar } from '../../../shared/components/latelBar/LateralBar';
import Loading from '../../../shared/components/loading/Loading';
import { Screen } from '../../../shared/components/screen/Screen';
import { Thumbnail } from '../../../shared/components/thumbnail/thumbnail';
import { URL_PRODUCTS } from '../../../shared/constants/urls';
import { MethodsEnum } from '../../../shared/enums/methods.enum';
import { useRequest } from '../../../shared/hooks/useRequest';
import { ProductType } from '../../../shared/types/ProductType';
import { useProductReducer } from '../../../store/reducers/productsReducer/useProductReducer';
import { ContainerProducts, ProductArea } from '../styles/product.style';

export const Product = () => {
  const { request, loading } = useRequest();
  const { products, setProducts } = useProductReducer();
  useEffect(() => {
    request<ProductType[]>(URL_PRODUCTS, MethodsEnum.GET, setProducts);
  }, []);

  return (
    <Screen>
      <LateralBar />
      <ContainerProducts>
        {loading ? (
          <DisplayFlexCenter>
            <Loading size="large" />
          </DisplayFlexCenter>
        ) : (
          <ProductArea>
            {products.map((product) => (
              <Thumbnail margin="5px" key={product.id} product={product} />
            ))}
          </ProductArea>
        )}
      </ContainerProducts>
    </Screen>
  );
};
