import { useNavigate } from 'react-router-dom';

import { RoutesEnum } from '../../enums/route.enum';
import { BoxButtonLateral } from '../box/box.styled';
import { Button } from '../buttons/Button';

export const MenuProfile = () => {
  const navigate = useNavigate();

  return (
    <BoxButtonLateral>
      <Button type="primary" onClick={() => navigate(RoutesEnum.USER)}>
        DADOS
      </Button>
      <Button type="primary" onClick={() => navigate(RoutesEnum.USER_ADDRESS)}>
        ENDEREÇOS
      </Button>
      <Button type="primary" onClick={() => navigate(RoutesEnum.USER_ADDRESS_POST)}>
        CADASTRAR NOVO ENDEREÇO
      </Button>
      <Button type="primary" onClick={() => navigate(RoutesEnum.USER_PASS)}>
        ALTERAR SENHA
      </Button>
      <Button type="primary" onClick={() => alert('Disabled')}>
        OUTROS
      </Button>
    </BoxButtonLateral>
  );
};
