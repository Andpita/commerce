import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';

import { URL_ADDRESS, URL_CITY, URL_STATE } from '../../../shared/constants/urls';
import { AddressDTO } from '../../../shared/dto/address.dto';
import { MethodsEnum } from '../../../shared/enums/methods.enum';
import { RoutesEnum } from '../../../shared/enums/route.enum';
import { useRequest } from '../../../shared/hooks/useRequest';

export const useNewAddress = () => {
  const navigate = useNavigate();
  const [newAddress, setNewAddress] = useState<AddressDTO>({
    complement: '',
    numberAddress: '',
    cep: '',
    cityId: '',
  });

  const [disableButton, setDisableButton] = useState(true);
  const { request, loading } = useRequest();
  const [listState, setListState] = useState([]);
  const [listCities, setListCities] = useState([]);
  const [idState, setIdState] = useState(1);

  useEffect(() => {
    if (newAddress.complement && newAddress.numberAddress && newAddress.cep && newAddress.cityId) {
      setDisableButton(false);
    } else {
      setDisableButton(true);
    }
  }, [newAddress]);

  useEffect(() => {
    states();

    if (!idState) {
      setListCities([]);
    } else {
      cities(idState);
    }
  }, [idState]);

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>, key: string) => {
    setNewAddress({
      ...newAddress,
      [key]: event.target.value,
    });
  };

  const handleClickcancel = () => {
    navigate(RoutesEnum.HOME);
  };

  const handleSubmit = async () => {
    const address = { ...newAddress };
    setNewAddress({
      ...address,
      numberAddress: +address.numberAddress,
      cityId: +address.cityId,
    });

    await request(
      URL_ADDRESS,
      MethodsEnum.POST,
      undefined,
      newAddress,
      'Endereço adicionado com sucesso!',
    );
  };

  const states = async () => {
    await request(URL_STATE, MethodsEnum.GET, setListState);
  };

  const cities = async (stateId: number) => {
    await request(URL_CITY.replace('{id}', `${stateId}`), MethodsEnum.GET, setListCities);
  };

  const handleChangeCity = (value: string) => {
    setNewAddress({
      ...newAddress,
      cityId: value,
    });
  };

  const handleChangeState = (value: number) => {
    setIdState(value);

    setNewAddress({
      ...newAddress,
      cityId: '',
    });
  };

  return {
    handleClickcancel,
    disableButton,
    newAddress,
    handleChange,
    handleSubmit,
    loading,

    listState,
    listCities,
    handleChangeCity,
    handleChangeState,
  };
};
