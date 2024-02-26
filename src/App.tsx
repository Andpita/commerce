import type { Router as RemixRouter } from '@remix-run/router';
import { createBrowserRouter, RouteObject, RouterProvider } from 'react-router-dom';

import { FirstScreenRoutes } from './modules/firstScreen/routes';
import { LoginRoutes } from './modules/login/routes';
import { ProductRoutes } from './modules/product/routes';

const openRoutes: RouteObject[] = [...LoginRoutes, ...ProductRoutes];
const privateRoutes: RouteObject[] = [...FirstScreenRoutes];

const router: RemixRouter = createBrowserRouter([...openRoutes, ...privateRoutes]);

function App() {
  return (
    <>
      <RouterProvider router={router} />
    </>
  );
}

export default App;
