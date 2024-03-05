import { EyeInvisibleOutlined, EyeTwoTone } from '@ant-design/icons';
import { Input } from 'antd';

import { Button } from '../../../shared/components/buttons/Button';
import { LimitedContainer } from '../../../shared/components/containers/limitedContainers.styled';
import {
  DisplayFlexCenter,
  DisplayFlexEvenly,
} from '../../../shared/components/displays/display.styled';
import { MenuProfile } from '../../../shared/components/menu/MenuProfile';
import { Screen } from '../../../shared/components/screen/Screen';
import { useProfile } from '../hooks/useProfile';
import { FormDefault, TitleProfile } from '../styles/profile.style';

export const ChangePassword = () => {
  const { changePass, submitChangePass, loading, handleChangePass } = useProfile();
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
                  <div style={{ margin: '10px 0px 0px 10px' }}>Sua senha:</div>
                  <Input.Password
                    placeholder="your password"
                    value={changePass.oldPassword}
                    onChange={(event) => handleChangePass(event, 'oldPassword')}
                    iconRender={(visible) => (visible ? <EyeTwoTone /> : <EyeInvisibleOutlined />)}
                    type="password"
                    autoComplete="password"
                    style={{ margin: '10px 0px' }}
                  />
                  <div style={{ margin: '10px 0px 0px 10px' }}>Nova senha:</div>
                  <Input.Password
                    placeholder="new password"
                    value={changePass.newPassword}
                    onChange={(event) => handleChangePass(event, 'newPassword')}
                    iconRender={(visible) => (visible ? <EyeTwoTone /> : <EyeInvisibleOutlined />)}
                    type="password"
                    autoComplete="password"
                    style={{ margin: '10px 0px' }}
                  />
                </LimitedContainer>
              </DisplayFlexCenter>
            </FormDefault>
            <DisplayFlexEvenly>
              <LimitedContainer width={200}>
                <Button loading={loading} onClick={submitChangePass} type="primary">
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
