import { useEffect } from 'react';

import { Screen } from '../../../shared/components/screen/Screen';
import { useGlobalReducer } from '../../../store/reducers/globalReducer/useGlobalReducer';

export const FirstScreen = () => {
  const { user } = useGlobalReducer();

  useEffect(() => {}, [user]);

  return (
    <Screen>
      <div style={{ height: '100vh', display: 'flex', margin: 'auto auto' }}>
        <img src="./capa.jpg" />
      </div>
    </Screen>
  );
};
