import { RoutesEnum } from '../../shared/enums/route.enum';
import { Address } from './screens/Address';
import { Profile } from './screens/Profile';

export const ProfileRoutes = [
  {
    path: RoutesEnum.USER,
    element: <Profile />,
  },
  {
    path: RoutesEnum.USER_ADDRESS,
    element: <Address />,
  },
];
