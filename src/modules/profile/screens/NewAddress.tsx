import { Select } from 'antd';

import { Button } from '../../../shared/components/buttons/Button';
import { LimitedContainer } from '../../../shared/components/containers/limitedContainers.styled';
import { DisplayFlexEvenly } from '../../../shared/components/displays/display.styled';
import { InputDefault } from '../../../shared/components/inputs/InputDefault';
import { MenuProfile } from '../../../shared/components/menu/MenuProfile';
import { Screen } from '../../../shared/components/screen/Screen';
import { CityType } from '../../../shared/types/CityType';
import { StateType } from '../../../shared/types/StateType';
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
    listState,
    listCities,
    handleChangeState,
    handleChangeCity,
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
                value={newAddress.cep}
                title="CEP"
                placeholder="88021-000"
                autoComplete="cep"
                margin="0px 0px 8px 0px"
              />
              <InputDefault
                onChange={(e) => handleChange(e, 'numberAddress')}
                value={newAddress.numberAddress}
                title="Número"
                placeholder="1260"
                margin="0px 0px 8px 0px"
              />
              <InputDefault
                onChange={(e) => handleChange(e, 'complement')}
                value={newAddress.complement}
                title="Complemento"
                placeholder="AP 413"
                autoComplete=""
                margin="0px 0px 8px 0px"
              />
              <InputDefault
                disabled
                onChange={(e) => handleChange(e, 'cityId')}
                value={newAddress.cityId}
                title="City Id"
                placeholder=""
                autoComplete="current-cpf"
                margin="0px 0px 8px 0px"
              />
              <div style={{ display: 'flex' }}>
                <Select
                  title="Estado"
                  style={{ width: '70%', marginBottom: '8px' }}
                  onChange={handleChangeState}
                  options={listState.map((state: StateType) => ({
                    value: `${state.id}`,
                    label: `${state.name}`,
                  }))}
                />
                <Select
                  title="Cidade"
                  loading={loading}
                  style={{ width: '100%', marginBottom: '8px' }}
                  onChange={handleChangeCity}
                  options={listCities.map((city: CityType) => ({
                    value: `${city.id}`,
                    label: `${city.name}`,
                  }))}
                />
              </div>
            </FormDefault>
            <DisplayFlexEvenly>
              <LimitedContainer width={200}>
                <Button
                  disabled={disableButton}
                  loading={loading}
                  onClick={handleSubmit}
                  type="primary"
                >
                  Adicionar Endereço
                </Button>
              </LimitedContainer>
              <LimitedContainer width={200}>
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
