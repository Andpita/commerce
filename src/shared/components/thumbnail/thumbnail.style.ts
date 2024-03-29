import styled from 'styled-components';

import { ColorsEnum } from '../../enums/colors.enum';

export const ThumbnailContainer = styled.div`
  height: 300px;
  width: 200px;
  border-radius: 5px;
  display: flex;
  flex-direction: column;
  background-color: ${ColorsEnum.Light};
  color: ${ColorsEnum.Dark};
  font-weight: 700;
`;

export const AreaImage = styled.div`
  min-height: 60%;
  height: 60%;
  padding: 10px;
`;

export const ThumbnailImage = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
  border-radius: 5px;
  border: solid 1px darkblue;
  &:hover {
    opacity: 50%;
  }
`;

export const AreaData = styled.div`
  align-items: center;
  padding: 5px;
  display: flex;
  flex-direction: column;

  div {
    padding: 4px;
  }
`;
