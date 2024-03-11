import { Button } from '../../../shared/components/buttons/Button';
import { LimitedContainer } from '../../../shared/components/containers/limitedContainers.styled';
import {
  DisplayFlexCenter,
  DisplayFlexEvenly,
} from '../../../shared/components/displays/display.styled';
import { InputDefault } from '../../../shared/components/inputs/InputDefault';
import { Screen } from '../../../shared/components/screen/Screen';
import { cpfMask } from '../../../shared/functions/cpfMask';
import { phoneMask } from '../../../shared/functions/phoneMask';
import { useUserInsert } from '../hooks/useUserInsert';

export const CreateUser = () => {
  const { disableButton, handleChange, handleClickcancel, handleSubmit, loading, createUser } =
    useUserInsert();

  return (
    <Screen>
      <DisplayFlexCenter>
        <LimitedContainer width={400}>
          <form>
            <InputDefault
              onChange={(event) => handleChange(event, 'name')}
              value={createUser.name}
              title="Nome"
              placeholder="Anderson Silva"
              autoComplete="username"
              margin="0px 0px 8px 0px"
            />
            <InputDefault
              onChange={(event) => handleChange(event, 'lastName')}
              value={createUser.lastName}
              title="Apelido"
              placeholder="Pita"
              margin="0px 0px 8px 0px"
            />
            <InputDefault
              onChange={(event) => handleChange(event, 'email')}
              value={createUser.email}
              title="E-mail"
              placeholder="email@email.com"
              autoComplete="current-mail"
              margin="0px 0px 8px 0px"
            />
            <InputDefault
              onChange={(event) => handleChange(event, 'cpf')}
              value={cpfMask(createUser.cpf)}
              title="CPF"
              placeholder="000.000.000-00"
              autoComplete="current-cpf"
              margin="0px 0px 8px 0px"
              maxLength={14}
            />
            <InputDefault
              onChange={(event) => handleChange(event, 'phone')}
              value={phoneMask(createUser.phone)}
              title="Telefone"
              placeholder="4899900000"
              autoComplete="current-phone"
              margin="0px 0px 8px 0px"
              maxLength={15}
            />
            <InputDefault
              onChange={(event) => handleChange(event, 'password')}
              value={createUser.password}
              title="Senha"
              type="password"
              autoComplete="current-password"
              placeholder="Sua senha"
              margin="0px 0px 8px 0px"
              maxLength={20}
            />
          </form>
          <DisplayFlexEvenly>
            <Button
              margin="10px"
              disabled={disableButton}
              loading={loading}
              onClick={handleSubmit}
              type="primary"
            >
              Criar Usuário
            </Button>
            <Button margin="10px" danger type="primary" onClick={handleClickcancel}>
              Cancelar
            </Button>
          </DisplayFlexEvenly>
        </LimitedContainer>
      </DisplayFlexCenter>
    </Screen>
  );
};
