import styled from 'styled-components';

import { ColorsEnum } from '../../enums/colors.enum';

export const BoxButton = styled.div`
  display: flex;
  justify-content: space-between;
  margin: 16px;
  gap: 16px;
`;

export const BoxButtonLateral = styled.div`
  background-color: ${ColorsEnum.Primary};
  border-radius: 10px;
  display: flex;
  flex-direction: column;
  justify-content: start;
  margin: 20px;
  padding: 20px;
  gap: 16px;
  height: 250px;
`;
