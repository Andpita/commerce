import { UserOutlined } from '@ant-design/icons';
import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

import { Button } from '../../../shared/components/buttons/Button';
import { LimitedContainer } from '../../../shared/components/containers/limitedContainers.styled';
import { InputDefault } from '../../../shared/components/inputs/InputDefault';
import { useLogin } from '../hooks/useLogin';
import { ContainerLogin, SubContainer, TitleLogin } from '../styles/login.styles';

export const LoginScreen = () => {
  const { changeEmail, changePassword, handleSubmit, password, email, loading, user } = useLogin();
  const navigate = useNavigate();

  useEffect(() => {
    if (user) {
      navigate('/');
    }
  }, [user]);

  return (
    <ContainerLogin>
      <div>
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
          <LimitedContainer width={150}>
            <Button
              loading={loading}
              type="primary"
              margin="36px 0px 16px 0px"
              onClick={handleSubmit}
            >
              ENTRAR
            </Button>
          </LimitedContainer>
          <div>
            Ou então crie seu usuário{' '}
            <b>
              <u>clicando aqui.</u>
            </b>
          </div>
        </SubContainer>
      </div>
    </ContainerLogin>
  );
};
