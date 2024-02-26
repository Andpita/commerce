import { Button } from '../../../shared/components/buttons/Button';
import { InputDefault } from '../../../shared/components/inputs/InputDefault';
import { useLogin } from '../hooks/useLogin';
import { ContainerLogin, SubContainer, TitleLogin } from '../styles/login.styles';

export const LoginScreen = () => {
  const { changeEmail, changePassword, handleSubmit, password, email } = useLogin();

  return (
    <ContainerLogin>
      <SubContainer>
        <TitleLogin level={2}>LOGIN</TitleLogin>
        <InputDefault title="E-MAIL" margin="10px 0px" onChange={changeEmail} value={email} />
        <InputDefault
          title="SENHA"
          margin="10px 0px"
          onChange={changePassword}
          value={password}
          type="password"
        />
        <Button type="primary" margin="36px 0px 16px 0px" onClick={handleSubmit}>
          ENTRAR
        </Button>
      </SubContainer>
    </ContainerLogin>
  );
};
