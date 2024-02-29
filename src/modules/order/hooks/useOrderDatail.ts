import { useEffect } from 'react';

import { useRequest } from '../../../shared/hooks/useRequest';
import { OrderType } from '../../../shared/types/OrderType';
import { useOrderReducer } from '../../../store/reducers/orderReducer/useOrderReducer';

export const useOrderDatails = (orderId?: string) => {
  const { orderById, setOrderById, orders } = useOrderReducer();
  const { loading } = useRequest();

  useEffect(() => {
    orders.map((order: OrderType) => {
      if (order.orderId.toString() === orderId) {
        setOrderById(order);
      }
    });
  }, [orderId]);

  return {
    orderById,
    loading,
  };
};
