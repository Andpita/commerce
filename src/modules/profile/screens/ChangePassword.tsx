import { Button } from '../../../shared/components/buttons/Button';
import { LimitedContainer } from '../../../shared/components/containers/limitedContainers.styled';
import {
  DisplayFlexCenter,
  DisplayFlexEvenly,
} from '../../../shared/components/displays/display.styled';
import { InputDefault } from '../../../shared/components/inputs/InputDefault';
import { MenuProfile } from '../../../shared/components/menu/MenuProfile';
import { Screen } from '../../../shared/components/screen/Screen';
import { FormDefault, TitleProfile } from '../styles/profile.style';

export const ChangePassword = () => {
  return (
    <Screen>
      <DisplayFlexEvenly>
        <MenuProfile />
        <div
          style={{
            width: '60%',
            margin: '20px',
          }}
        >
          <LimitedContainer
            width={600}
            style={{ background: '#8ECAE6', borderRadius: '10px', padding: '20px' }}
          >
            <TitleProfile>ALTERAR SENHA</TitleProfile>
            <FormDefault>
              <DisplayFlexCenter>
                <LimitedContainer width={300}>
                  <InputDefault
                    title="Senha"
                    type="password"
                    autoComplete="password"
                    margin="0px 0px 8px 0px"
                  />
                  <InputDefault
                    title="Nova senha"
                    type="password"
                    autoComplete="password"
                    margin="0px 0px 8px 0px"
                  />
                </LimitedContainer>
              </DisplayFlexCenter>
            </FormDefault>
            <DisplayFlexEvenly>
              <LimitedContainer width={200}>
                <Button disabled loading type="primary">
                  Alterar senha
                </Button>
              </LimitedContainer>
              <LimitedContainer width={200}>
                <Button danger type="primary">
                  Cancelar
                </Button>
              </LimitedContainer>
            </DisplayFlexEvenly>
          </LimitedContainer>
        </div>
      </DisplayFlexEvenly>
    </Screen>
  );
};
