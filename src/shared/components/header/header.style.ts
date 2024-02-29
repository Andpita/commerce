import styled from 'styled-components';

export const ContainerHeader = styled.div`
  background: rgb(34, 193, 195);
  background: linear-gradient(261deg, rgba(34, 193, 195, 1) 0%, rgba(253, 187, 45, 1) 100%);

  margin-left: auto;
  height: 200px;
  display: flex;
  align-items: center;
  justify-content: space-around;

  padding-right: 32px;

  -webkit-box-shadow: 0px 1px 8px 0px rgba(0, 0, 0, 0.47);
  -moz-box-shadow: 0px 1px 8px 0px rgba(0, 0, 0, 0.47);
  box-shadow: 0px 1px 8px 0px rgba(0, 0, 0, 0.47);
`;

export const TextContainer = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-top: 50px;

  div {
    display: flex;
    align-items: center;
    justify-content: center;
    flex-wrap: nowrap;
  }
`;

export const LogoContainer = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const ImageCar = styled.img`
  max-width: 150px;
`;

export const Title = styled.h1`
  font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
  font-weight: bold;
  font-style: italic;
  color: black;
  font-size: 40px;
`;
