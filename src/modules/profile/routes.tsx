import { RoutesEnum } from '../../shared/enums/route.enum';
import { Profile } from './screens/Profile';

export const ProfileRoutes = [
  {
    path: RoutesEnum.USER,
    element: <Profile />,
  },
];
