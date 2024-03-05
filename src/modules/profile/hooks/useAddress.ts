import { useEffect } from 'react';

import { URL_ADDRESS } from '../../../shared/constants/urls';
import { MethodsEnum } from '../../../shared/enums/methods.enum';
import { useRequest } from '../../../shared/hooks/useRequest';
import { useAddressReducer } from '../../../store/reducers/addressReducer/useAddressReducer';

export const useAddress = () => {
  const { address, setAddress } = useAddressReducer();
  const { request } = useRequest();

  useEffect(() => {
    request(URL_ADDRESS, MethodsEnum.GET, setAddress);
  }, []);

  return {
    address,
  };
};
