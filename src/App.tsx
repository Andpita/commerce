import type { Router as RemixRouter } from '@remix-run/router';
import { useEffect } from 'react';
import { createBrowserRouter, RouteObject, RouterProvider } from 'react-router-dom';

import { CartRoutes } from './modules/cart/routes';
import { CategoryRoutes } from './modules/category/routes';
import { CreateUserRoutes } from './modules/createUser/routes';
import { FirstScreenRoutes } from './modules/firstScreen/routes';
import { LoginRoutes } from './modules/login/routes';
import { OffersRoutes } from './modules/offer/routes';
import { OrderRoutes } from './modules/order/routes';
import { ProductRoutes } from './modules/product/routes';
import { ProfileRoutes } from './modules/profile/routes';
import { TicketRoutes } from './modules/ticket/routes';
import { URL_USER } from './shared/constants/urls';
import { MethodsEnum } from './shared/enums/methods.enum';
import { getAuthorizationToken } from './shared/functions/connections/auth';
import { useNotification } from './shared/hooks/useNotification';
import { useRequest } from './shared/hooks/useRequest';
import { useGlobalReducer } from './store/reducers/globalReducer/useGlobalReducer';

const openRoutes: RouteObject[] = [
  ...LoginRoutes,
  ...ProductRoutes,
  ...CategoryRoutes,
  ...CreateUserRoutes,
  ...TicketRoutes,
];
const privateRoutes: RouteObject[] = [
  ...FirstScreenRoutes,
  ...CartRoutes,
  ...ProfileRoutes,
  ...OrderRoutes,
  ...OffersRoutes,
];

const router: RemixRouter = createBrowserRouter([...openRoutes, ...privateRoutes]);

function App() {
  const { contextHolder } = useNotification();
  const { setUser } = useGlobalReducer();
  const { request } = useRequest();

  useEffect(() => {
    const token = getAuthorizationToken();

    if (token) {
      request(URL_USER, MethodsEnum.GET, setUser);
    }
  }, []);

  return (
    <>
      {contextHolder}
      <RouterProvider router={router} />
    </>
  );
}

export default App;
