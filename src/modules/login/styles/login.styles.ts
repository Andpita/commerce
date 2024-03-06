import { Typography } from 'antd';
import styled from 'styled-components';

import { ColorsEnum } from '../../../shared/enums/colors.enum';

const { Title } = Typography;

export const DivLogin = styled.div`
  display: flex;
  justify-content: right;
`;

export const BackgroundImage = styled.img`
  position: absolute;
  left: 0;
  top: 0;
  width: 100%;
  height: 100vh;
  object-fit: cover;
  z-index: -1;
`;

export const TitleLogin = styled(Title)`
  color: ${ColorsEnum.Dark} !important;
`;

export const LogoImage = styled.img`
  width: 200px;
`;

export const ContainerLogin = styled.div`
  width: 100%;
  height: 100vh;
  background-color: ${ColorsEnum.Light};
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const SubContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  max-width: 400px;
  flex-direction: column;
  padding: 40px;
  background-color: white;
  border-radius: 20px;
`;
