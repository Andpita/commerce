import {
  HomeOutlined,
  LaptopOutlined,
  OrderedListOutlined,
  ProfileOutlined,
  SafetyCertificateOutlined,
  UserOutlined,
} from '@ant-design/icons';
import type { MenuProps } from 'antd';
import { Menu as MenuAntd } from 'antd';
import { useNavigate } from 'react-router-dom';

import { useGlobalReducer } from '../../../store/reducers/globalReducer/useGlobalReducer';
import { RoutesEnum } from '../../enums/route.enum';
import { logout } from '../../functions/connections/auth';
import {
  ButtonLoginAndLogout,
  CadastroButton,
  ContainerMenu,
  LoginContainer,
  ProfileContainer,
  RegisterContainer,
} from './menu.style';

type MenuItem = Required<MenuProps>['items'][number];

export const Menu = () => {
  const navigate = useNavigate();
  const { user, setUser } = useGlobalReducer();
  const items: MenuItem[] = [
    {
      key: 'Home',
      label: 'Página Inicial',
      icon: <HomeOutlined />,
      onClick: () => navigate('/'),
    },
    {
      key: 'Products',
      label: 'Produtos',
      icon: <LaptopOutlined />,
      onClick: () => navigate('/produtos'),
    },
    {
      key: 'Category',
      label: 'Categorias',
      icon: <ProfileOutlined />,
      onClick: () => navigate('/categorias'),
    },
    {
      key: 'order',
      label: 'Ofertas',
      icon: <SafetyCertificateOutlined />,
      onClick: () => navigate('/ofertas'),
    },
  ];

  const items2: MenuItem[] = [
    {
      key: 'Home',
      label: 'Perfil',
      icon: <UserOutlined />,
      onClick: () => navigate('/profile'),
    },
    {
      key: 'Products',
      label: 'Pedidos',
      icon: <OrderedListOutlined />,
      onClick: () => navigate('/order'),
    },
  ];
  return (
    <ContainerMenu>
      <MenuAntd
        defaultSelectedKeys={['1']}
        defaultOpenKeys={['sub1']}
        theme="light"
        items={items}
        mode="horizontal"
      />

      {user ? (
        <ProfileContainer>
          <MenuAntd
            defaultSelectedKeys={['1']}
            defaultOpenKeys={['sub1']}
            items={items2}
            theme="light"
            mode="horizontal"
            style={{
              width: '100%',
              borderRadius: '15px',
            }}
          />
        </ProfileContainer>
      ) : (
        <RegisterContainer>
          <CadastroButton onClick={() => navigate(RoutesEnum.USER_CREATE)}>
            Faça seu cadastro aqui!
          </CadastroButton>
        </RegisterContainer>
      )}

      <LoginContainer>
        {!user ? (
          <ButtonLoginAndLogout onClick={() => navigate(RoutesEnum.LOGIN)}>
            Login
          </ButtonLoginAndLogout>
        ) : (
          <ButtonLoginAndLogout
            onClick={() => {
              setUser(undefined);
              logout(navigate);
            }}
          >
            Sair
          </ButtonLoginAndLogout>
        )}
      </LoginContainer>
    </ContainerMenu>
  );
};
