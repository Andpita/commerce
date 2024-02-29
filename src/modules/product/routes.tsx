import { RoutesEnum } from '../../shared/enums/route.enum';
import Product from '.';
import { ProductDetails } from './screens/ProductDetails';

export const ProductRoutes = [
  {
    path: RoutesEnum.PRODUCT,
    element: <Product />,
  },
  {
    path: RoutesEnum.PRODUCT_ID,
    element: <ProductDetails />,
  },
];
