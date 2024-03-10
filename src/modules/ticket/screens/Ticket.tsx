import TextArea from 'antd/es/input/TextArea';
import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

import { Button } from '../../../shared/components/buttons/Button';
import { LimitedContainer } from '../../../shared/components/containers/limitedContainers.styled';
import { DisplayFlexEvenly } from '../../../shared/components/displays/display.styled';
import { InputDefault } from '../../../shared/components/inputs/InputDefault';
import { Screen } from '../../../shared/components/screen/Screen';
import { RoutesEnum } from '../../../shared/enums/route.enum';
import { useGlobalReducer } from '../../../store/reducers/globalReducer/useGlobalReducer';
import { useTicket } from '../hooks/useTicket';

export const Ticket = () => {
  const { user, setNotification } = useGlobalReducer();
  const navigate = useNavigate();
  const { handleChange, disabledButton, loading, submitTicket } = useTicket();

  useEffect(() => {
    if (user) {
      //
    } else {
      setNotification('error', 'Faça login para continuar');
      navigate(RoutesEnum.HOME);
      navigate(RoutesEnum.LOGIN);
    }
  }, [user]);

  return (
    <Screen>
      <LimitedContainer width={500}>
        <InputDefault
          disabled
          value={user?.name}
          title="Nome"
          autoComplete="username"
          margin="0px 0px 8px 0px"
        />
        <InputDefault disabled value={user?.email} title="Email" margin="0px 0px 20px 0px" />
        <TextArea
          showCount
          maxLength={1000}
          onChange={(e) => handleChange(e, 'textmessage')}
          placeholder="O que não fazer no sinal fechado..."
          style={{ height: 150, resize: 'none' }}
        />
        <DisplayFlexEvenly>
          <LimitedContainer width={120}>
            <Button
              disabled={disabledButton}
              loading={loading}
              onClick={submitTicket}
              type="primary"
            >
              Enviar
            </Button>
          </LimitedContainer>
          <LimitedContainer width={120}>
            <Button danger type="primary" onClick={() => alert('')}>
              Cancelar
            </Button>
          </LimitedContainer>
        </DisplayFlexEvenly>
      </LimitedContainer>
    </Screen>
  );
};
