import { useNavigate } from 'react-router-dom';

import { RoutesEnum } from '../../enums/route.enum';
import { ProductType } from '../../types/ProductType';
import { Button } from '../buttons/Button';
import { AreaData, AreaImage, ThumbnailContainer, ThumbnailImage } from './thumbnail.style';

interface ProductThumbnail {
  product: ProductType;
}

export const Thumbnail = ({ product }: ProductThumbnail) => {
  const navigate = useNavigate();
  return (
    <ThumbnailContainer onClick={() => navigate(`${RoutesEnum.PRODUCT}/${product.id}`)}>
      <AreaImage>
        <ThumbnailImage src={product.image} />
      </AreaImage>
      <AreaData>
        <div>{product.name}</div>
        <div>R$: {product.price.toFixed(2)}</div>
        <Button type="primary">Comprar</Button>
      </AreaData>
    </ThumbnailContainer>
  );
};
