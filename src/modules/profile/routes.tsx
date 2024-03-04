import { RoutesEnum } from '../../shared/enums/route.enum';
import { Address } from './screens/Address';
import { ChangePassword } from './screens/ChangePassword';
import { NewAddress } from './screens/NewAddress';
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
  {
    path: RoutesEnum.USER_ADDRESS_POST,
    element: <NewAddress />,
  },
  {
    path: RoutesEnum.USER_PASS,
    element: <ChangePassword />,
  },
];
