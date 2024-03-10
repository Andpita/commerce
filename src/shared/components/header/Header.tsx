import { MailOutlined, ShoppingCartOutlined } from '@ant-design/icons';
import { useNavigate } from 'react-router-dom';

import { RoutesEnum } from '../../enums/route.enum';
import { Button } from '../buttons/Button';
import { ContainerHeader, ImageCar, LogoContainer, TextContainer, Title } from './header.style';

export const Header = () => {
  const navigate = useNavigate();

  return (
    <>
      <ContainerHeader>
        <LogoContainer>
          <ImageCar src="/car.png" />
          <Title>GAG STORE</Title>
        </LogoContainer>

        <TextContainer>
          <div>
            <Button
              icon={<ShoppingCartOutlined />}
              type="primary"
              style={{
                height: '50px',
                margin: '10px',
                width: '120px',
                borderRadius: '40px',
              }}
              onClick={() => navigate(RoutesEnum.CART)}
            >
              Carrinho
            </Button>
            <Button
              icon={<MailOutlined />}
              style={{ height: '50px', margin: '10px', width: '120px', borderRadius: '40px' }}
              onClick={() => navigate(RoutesEnum.TICKET)}
            >
              Contato
            </Button>
          </div>
        </TextContainer>
      </ContainerHeader>
    </>
  );
};
