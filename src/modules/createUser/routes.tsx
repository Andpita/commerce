import { RoutesEnum } from '../../shared/enums/route.enum';
import { CreateUser } from './screens/CreateUser';

export const CreateUserRoutes = [
  {
    path: RoutesEnum.USER_CREATE,
    element: <CreateUser />,
  },
];
