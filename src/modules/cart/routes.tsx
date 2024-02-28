import { RoutesEnum } from '../../shared/enums/route.enum';
import Cart from './index';

export const CartRoutes = [
  {
    path: RoutesEnum.CART,
    element: <Cart />,
  },
];
