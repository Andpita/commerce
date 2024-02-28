import styled from 'styled-components';

export const ContainerMenu = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: #001529;
  -webkit-box-shadow: 1px 0px 8px 0px rgba(0, 0, 0, 0.71);
  -moz-box-shadow: 1px 0px 8px 0px rgba(0, 0, 0, 0.71);
  box-shadow: 1px 0px 8px 0px rgba(0, 0, 0, 0.71);

  ul {
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
  }
`;

export const ProfileContainer = styled.div`
  background-color: white;
  color: red;
  width: 300px;
  height: 30px;
  margin: 0px 20px;
  display: flex;
  align-items: center;
  justify-content: center;
  font-weight: bold;
  border-radius: 20px;
  margin: 5px 5px 5px 0px;
  width: 240px;
`;

export const CadastroButton = styled.span`
  cursor: pointer;

  text-align: center;
`;
