import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';

import { URL_ADDRESS, URL_CEP } from '../../../shared/constants/urls';
import { AddressDTO } from '../../../shared/dto/address.dto';
import { MethodsEnum } from '../../../shared/enums/methods.enum';
import { RoutesEnum } from '../../../shared/enums/route.enum';
import { cepMask } from '../../../shared/functions/cepMask';
import { useRequest } from '../../../shared/hooks/useRequest';
import { CepDetails } from '../../../shared/types/CepTypeCorreios';

export const useNewAddress = () => {
  const navigate = useNavigate();
  const [newAddress, setNewAddress] = useState<AddressDTO>({
    complement: '',
    numberAddress: '',
    cep: '',
    cityId: 0,
  });

  const [disableButton, setDisableButton] = useState(true);
  const { request, loading } = useRequest();
  const [localCEP, setLocalCEP] = useState<CepDetails>({
    cep: '',
    publicPlace: '',
    complement: '',
    neigborhood: '',
    city: '',
    uf: '',
    ddd: '',
    cityId: 0,
    stateId: 0,
  });

  useEffect(() => {
    if (newAddress.complement && newAddress.numberAddress && newAddress.cep && newAddress.cityId) {
      setDisableButton(false);
    } else {
      setDisableButton(true);
    }
  }, [newAddress]);

  useEffect(() => {
    const cep = cepMask(newAddress.cep);

    if (cep && cep.length === 9) {
      dataCep(cep);
    } else {
      return;
    }
  }, [newAddress.cep]);

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>, key: string) => {
    setNewAddress({
      ...newAddress,
      [key]: event.target.value,
    });
  };

  const dataCep = async (cep: string) => {
    await request(URL_CEP.replace('{id}', `${cep}`), MethodsEnum.GET, setLocalCEP);

    if (localCEP.cityId) {
      setNewAddress({
        ...newAddress,
        cityId: localCEP.cityId,
      });
    } else {
      setNewAddress({
        ...newAddress,
        cityId: 0,
      });
    }
  };

  const handleClickcancel = () => {
    navigate(RoutesEnum.HOME);
  };

  const handleSubmit = async () => {
    const address = { ...newAddress };

    await request(
      URL_ADDRESS,
      MethodsEnum.POST,
      undefined,
      { ...address, numberAddress: +address.numberAddress, cityId: +localCEP.cityId },
      'Endereço adicionado com sucesso!',
    );
  };

  return {
    handleClickcancel,
    disableButton,
    newAddress,
    handleChange,
    handleSubmit,
    loading,

    localCEP,
    dataCep,
  };
};
