import { ProductType } from '../../types/ProductType';
import { AreaData, AreaImage, ThumbnailContainer, ThumbnailImage } from './thumbnail.style';

interface ProductThumbnail {
  product: ProductType;
  margin?: string;
}

export const Thumbnail = ({ product, margin }: ProductThumbnail) => {
  return (
    <ThumbnailContainer margin={margin}>
      <AreaImage>
        <ThumbnailImage src={product.image} />
      </AreaImage>
      <AreaData>
        <div>{product.name}</div>
        <div>R$: {product.price.toFixed(2)}</div>
      </AreaData>
    </ThumbnailContainer>
  );
};
