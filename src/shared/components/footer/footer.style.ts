import styled from 'styled-components';

import { ColorsEnum } from '../../enums/colors.enum';

export const FooterContainer = styled.div`
  width: 100%;
  height: 150px;
  background-color: ${ColorsEnum.Primary};
  margin-top: 50px;
  z-index: 2;

  display: flex;
  align-items: center;
  justify-content: center;
`;
