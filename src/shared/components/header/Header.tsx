import { MailOutlined, ShoppingCartOutlined, UserOutlined } from '@ant-design/icons';
import { useNavigate } from 'react-router-dom';

import { useGlobalReducer } from '../../../store/reducers/globalReducer/useGlobalReducer';
import { logout } from '../../functions/connections/auth';
import { Button } from '../buttons/Button';
import { ContainerHeader, ImageCar, LogoContainer, TextContainer, Title } from './header.style';

export const Header = () => {
  const { user, setUser } = useGlobalReducer();
  const navigate = useNavigate();

  return (
    <>
      <ContainerHeader>
        <LogoContainer>
          <ImageCar src={'./car.png'} />
          <Title>LOJA DA CECÍLIA</Title>
        </LogoContainer>

        <TextContainer>
          <div style={{ color: 'white' }}>Faça seu cadastro</div>
          <div>
            <Button
              icon={<UserOutlined />}
              onClick={
                !user
                  ? () => navigate('/login')
                  : () => {
                      setUser(undefined);
                      logout(navigate);
                    }
              }
              style={{ height: '50px', margin: '10px', width: '120px' }}
            >
              {user ? 'Sair' : 'Login'}
            </Button>
            <Button
              icon={<ShoppingCartOutlined />}
              style={{ height: '50px', margin: '10px', width: '120px' }}
              onClick={() => console.log('')}
            >
              Carrinho
            </Button>
            <Button
              icon={<MailOutlined />}
              style={{ height: '50px', margin: '10px', width: '120px' }}
              onClick={() => console.log('')}
            >
              Contato
            </Button>
          </div>
        </TextContainer>
      </ContainerHeader>
    </>
  );
};
