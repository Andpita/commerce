import styled from 'styled-components';

export const DisplayFlexEvenly = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-evenly;
  margin-top: 20px;
`;

export const DisplayFlexEvenlyNoMargin = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-evenly;
`;

export const DisplayFlexCenter = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 20px;
`;

export const DisplayFlexCenterNoMargin = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const DisplayFlexCenterCustom = styled.div`
  width: 70%;
  display: flex;
  justify-content: center;
  height: 300px;
  align-items: center;
`;

export const LoadingContainer = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  min-height: 200px;
  min-width: 400px;
`;
