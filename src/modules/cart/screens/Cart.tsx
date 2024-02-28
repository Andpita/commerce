import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

import { Screen } from '../../../shared/components/screen/Screen';
import { RoutesEnum } from '../../../shared/enums/route.enum';
import { useGlobalReducer } from '../../../store/reducers/globalReducer/useGlobalReducer';

export const Cart = () => {
  const { user, setNotification } = useGlobalReducer();
  const navigate = useNavigate();

  useEffect(() => {
    if (!user) {
      setNotification('error', 'Faça login para continuar');
      navigate(RoutesEnum.LOGIN);
    }
  }, [user]);

  return (
    <Screen>
      <div>Carrinho</div>
    </Screen>
  );
};
