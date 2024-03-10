import styled from 'styled-components';

import { ColorsEnum } from '../../../shared/enums/colors.enum';

export const CartContainer = styled.div`
  height: 100%;
  padding: 20px;
  background-color: ${ColorsEnum.Primary};
  border-radius: 10px;
`;

export const ContainerDescriptions = styled.div`
  display: flex;
  flex-direction: column;
`;

export const DividerCart = styled.div`
  display: flex;
  gap: 20px;
`;

export const AreaPayment = styled.div`
  min-width: 30%;
  min-height: 100%;
  background-color: white;
  border-radius: 5px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;

export const SelectDelivery = styled.button`
  display: flex;
  padding: 5px;
  width: 100%;
  border: solid 1px purple;
  border-radius: 8px;
  cursor: pointer;
  align-items: center;
  flex-direction: column;
  background-color: white;
  margin-bottom: 10px;

  &:hover {
    background-color: gainsboro;
  }

  &:active {
    background-color: lightblue;
  }

  &:focus {
    background-color: lightblue;
  }

  div {
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: space-around;
  }
`;

export const ContainerValue = styled.div`
  margin: 10px;
  background: white;
  display: flex;
  justify-content: space-around;
  border: solid 1px purple;
  border-radius: 8px;
`;
