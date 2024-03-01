import { DisplayFlexCenter } from '../../../shared/components/displays/display.styled';
import { LateralBar } from '../../../shared/components/latelBar/LateralBar';
import Loading from '../../../shared/components/loading/Loading';
import { Screen } from '../../../shared/components/screen/Screen';
import { Thumbnail } from '../../../shared/components/thumbnail/thumbnail';
import { useProducts } from '../hooks/useProducts';
import { ContainerProducts, ProductArea } from '../styles/product.style';

export const Product = () => {
  const { loading, products } = useProducts();

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
