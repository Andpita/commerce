import styled from 'styled-components';

import { lateralBar } from '../latelBar/lateralBar.style';

export const marginScreen = lateralBar;

export const ScreenContainer = styled.div`
  display: flex;
  justify-content: flex-end;
  flex-direction: row;

  margin-left: auto;
  background-color: lightgray;

  width: 100%;
`;
