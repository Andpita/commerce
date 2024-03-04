import styled, { keyframes } from 'styled-components';

const colorNameEffect = keyframes`
  0% {background-color: white;}
  0% {border-bottom: solid 1px lightgray}
  50% {background-color: lightgray}
  50% {border-bottom: solid 1px black}
  100% {background-color: white;}
  100% {border-bottom: solid 1px lightgray}
`;

export const ContainerMenu = styled.div`
  max-width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: white;

  -webkit-box-shadow: 1px 0px 8px 0px rgba(0, 0, 0, 0.71);
  -moz-box-shadow: 1px 0px 8px 0px rgba(0, 0, 0, 0.71);
  box-shadow: 1px 0px 8px 0px rgba(0, 0, 0, 0.71);

  ul {
    width: 65%;
    display: flex;
    align-items: center;
    justify-content: center;
  }
`;

export const RegisterContainer = styled.div`
  width: 250px;
  background-color: white;
  color: red;
  height: 30px;
  margin: 0px 20px;
  display: flex;
  align-items: center;
  justify-content: center;
  font-weight: bold;
  border-radius: 20px;

  &:hover {
    animation: ${colorNameEffect} 1s ease-in infinite;
  }
`;

export const ProfileContainer = styled.div`
  width: 250px;
  background-color: white;
  color: red;
  height: 30px;
  margin: 0px 20px;
  display: flex;
  align-items: center;
  justify-content: center;
  font-weight: bold;
  border-radius: 20px;
`;

export const CadastroButton = styled.span`
  cursor: pointer;
  width: 100%;
  text-align: center;
  width: '100%';
  background: 'LightSkyBlue';
  border-radius: '20px';
  height: '40px';
`;

export const LoginContainer = styled.div`
  width: 100px;
  background-color: white;
  color: red;
  border: solid black 1px;
  height: 30px;
  margin: 0px 20px;
  display: flex;
  align-items: center;
  justify-content: center;
  font-weight: bold;
  border-radius: 20px;
`;

export const ButtonLoginAndLogout = styled.span`
  cursor: pointer;
  width: 100px;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
`;
