export enum RoutesEnum {
  LOGIN = '/login',
  HOME = '/',

  PRODUCT = '/produtos' /** */,
  PRODUCT_ID = '/produtos/:id' /** */,
  PRODUCT_INSERT = '/product/insert',

  CATEGORY = '/categorias' /** */,
  CATEGORY_ID = '/category/:id',
  CATEGORY_INSERT = '/category/insert',

  ORDER = '/order',
  ORDER_ID = '/order/:orderId',

  USER = '/profile',
  USER_CREATE = '/create-user',
  USER_ALL = '/user/all',
  USER_INSERT_ADM = '/user/admin',

  CART = '/cart',
}
