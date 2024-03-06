import { UserOutlined } from '@ant-design/icons';
import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

import { Button } from '../../../shared/components/buttons/Button';
import { DisplayFlexCenter } from '../../../shared/components/displays/display.styled';
import { InputDefault } from '../../../shared/components/inputs/InputDefault';
import { RoutesEnum } from '../../../shared/enums/route.enum';
import { useLogin } from '../hooks/useLogin';
import { ContainerLogin, SubContainer, TitleLogin } from '../styles/login.styles';

export const LoginScreen = () => {
  const { changeEmail, changePassword, handleSubmit, password, email, loading, user } = useLogin();
  const navigate = useNavigate();

  useEffect(() => {
    if (user) {
      navigate(RoutesEnum.PRODUCT);
    }
  }, [user]);

  return (
    <ContainerLogin>
      <SubContainer>
        <UserOutlined style={{ fontSize: '50px', color: '#005544' }} />
        <TitleLogin level={2}>LOGIN</TitleLogin>
        <InputDefault title="E-MAIL" margin="10px 0px" onChange={changeEmail} value={email} />
        <InputDefault
          title="SENHA"
          margin="10px 0px"
          onChange={changePassword}
          value={password}
          type="password"
        />

        <DisplayFlexCenter>
          <Button
            width="100px"
            loading={loading}
            margin="15px"
            onClick={() => navigate(RoutesEnum.PRODUCT)}
            danger
          >
            Voltar
          </Button>
          <Button
            width="100px"
            loading={loading}
            margin="15px"
            type="primary"
            onClick={handleSubmit}
          >
            ENTRAR
          </Button>
        </DisplayFlexCenter>
        <div>
          Ou então crie seu usuário{' '}
          <b>
            <u>
              <a style={{ cursor: 'pointer' }} onClick={() => navigate(RoutesEnum.USER_CREATE)}>
                clicando aqui.
              </a>
            </u>
          </b>
        </div>
      </SubContainer>
    </ContainerLogin>
  );
};
