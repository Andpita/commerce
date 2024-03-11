import { Select } from 'antd';

import { Button } from '../../../shared/components/buttons/Button';
import { LimitedContainer } from '../../../shared/components/containers/limitedContainers.styled';
import {
  DisplayFlexCenter,
  DisplayFlexCenterNoMargin,
  DisplayFlexEvenly,
} from '../../../shared/components/displays/display.styled';
import { InputDefault } from '../../../shared/components/inputs/InputDefault';
import { MenuProfile } from '../../../shared/components/menu/MenuProfile';
import { Screen } from '../../../shared/components/screen/Screen';
import { cepMask } from '../../../shared/functions/cepMask';
import { useNewAddress } from '../hooks/useNewAddress';
import { FormDefault, TitleProfile } from '../styles/profile.style';

export const NewAddress = () => {
  const {
    disableButton,
    handleClickcancel,
    newAddress,
    handleChange,
    handleSubmit,
    loading,
    localCEP,
  } = useNewAddress();

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
            style={{ background: '#8ECAE6', borderRadius: '10px', padding: '20px' }}
          >
            <TitleProfile>Novo Endereço</TitleProfile>
            <FormDefault>
              <InputDefault
                onChange={(e) => handleChange(e, 'cep')}
                value={cepMask(newAddress.cep)}
                title="CEP"
                placeholder="88021-000"
                autoComplete="cep"
                margin="0px 0px 8px 0px"
                maxLength={9}
              />
              <InputDefault
                onChange={(e) => handleChange(e, 'numberAddress')}
                value={newAddress.numberAddress}
                title="Número"
                placeholder="1260"
                margin="0px 0px 8px 0px"
                type="number"
              />
              <InputDefault
                onChange={(e) => handleChange(e, 'complement')}
                value={newAddress.complement}
                title="Complemento / Obs"
                placeholder="AP 413 / Casa ao lado do Mercado..."
                autoComplete=""
                margin="0px 0px 8px 0px"
              />
              <InputDefault
                disabled
                onChange={(e) => handleChange(e, 'cityId')}
                value={localCEP.cityId}
                title="City Id"
                placeholder=""
                autoComplete="current-cpf"
                margin="0px 0px 8px 0px"
              />
              <DisplayFlexCenter>
                <div>Estado</div>
                <Select
                  disabled
                  defaultValue="Estado"
                  title="Estado"
                  style={{ width: '70%', margin: '8px' }}
                  value={localCEP.uf || ''}
                />
                <div>Cidade</div>
                <Select
                  disabled
                  title="Cidade"
                  loading={loading}
                  style={{ width: '100%', margin: '8px' }}
                  value={localCEP.city || ''}
                />
              </DisplayFlexCenter>
              <DisplayFlexCenterNoMargin>
                <div>Bairro</div>
                <Select
                  disabled
                  title="Bairro"
                  loading={loading}
                  style={{ width: '100%', margin: '8px' }}
                  value={localCEP.neigborhood || ''}
                />
                <div>Rua</div>
                <Select
                  disabled
                  title="Rua"
                  loading={loading}
                  style={{ width: '100%', margin: '8px' }}
                  value={localCEP.publicPlace || ''}
                />
              </DisplayFlexCenterNoMargin>
            </FormDefault>

            <DisplayFlexEvenly>
              <LimitedContainer width={150}>
                <Button
                  disabled={disableButton}
                  loading={loading}
                  onClick={handleSubmit}
                  type="primary"
                >
                  Adicionar Endereço
                </Button>
              </LimitedContainer>
              <LimitedContainer width={150}>
                <Button danger type="primary" onClick={handleClickcancel}>
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
