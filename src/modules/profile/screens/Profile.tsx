import { Button } from '../../../shared/components/buttons/Button';
import { LimitedContainer } from '../../../shared/components/containers/limitedContainers.styled';
import {
  DisplayFlexCenter,
  DisplayFlexEvenly,
} from '../../../shared/components/displays/display.styled';
import { InputDefault } from '../../../shared/components/inputs/InputDefault';
import { Screen } from '../../../shared/components/screen/Screen';
import { useProfile } from '../hooks/useUser';

export const Profile = () => {
  const { disableButton, handleChange, handleClickcancel, handleSubmit, loading, user } =
    useProfile();

  return (
    <Screen>
      <DisplayFlexCenter>
        <LimitedContainer width={400}>
          <form>
            <InputDefault
              onChange={(event) => handleChange(event, 'name')}
              value={user.name}
              title="Nome"
              placeholder="Anderson Silva"
              autoComplete="username"
              margin="0px 0px 8px 0px"
            />
            <InputDefault
              onChange={(event) => handleChange(event, 'lastName')}
              value={user.lastName}
              title="Apelido"
              placeholder="Pita"
              margin="0px 0px 8px 0px"
            />
            <InputDefault
              onChange={(event) => handleChange(event, 'email')}
              value={user.email}
              title="E-mail"
              placeholder="email@email.com"
              autoComplete="current-mail"
              margin="0px 0px 8px 0px"
            />
            <InputDefault
              onChange={(event) => handleChange(event, 'cpf')}
              value={user.cpf}
              title="CPF"
              placeholder="000.000.000-00"
              autoComplete="current-cpf"
              margin="0px 0px 8px 0px"
            />
            <InputDefault
              onChange={(event) => handleChange(event, 'phone')}
              value={user.phone}
              title="Telefone"
              placeholder="4899900000"
              autoComplete="current-phone"
              margin="0px 0px 8px 0px"
            />
            <InputDefault
              onChange={(event) => handleChange(event, 'password')}
              value={user.password}
              title="Senha"
              type="password"
              autoComplete="current-password"
              placeholder="Sua senha"
              margin="0px 0px 8px 0px"
            />
          </form>
          <DisplayFlexEvenly>
            <LimitedContainer width={120}>
              <Button
                disabled={disableButton}
                loading={loading}
                onClick={handleSubmit}
                type="primary"
              >
                Editar Perfil
              </Button>
            </LimitedContainer>
            <LimitedContainer width={120}>
              <Button danger type="primary" onClick={handleClickcancel}>
                Cancelar
              </Button>
            </LimitedContainer>
          </DisplayFlexEvenly>
        </LimitedContainer>
      </DisplayFlexCenter>
    </Screen>
  );
};
