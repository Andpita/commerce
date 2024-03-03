import { useEffect, useState } from 'react';

import { URL_ADDRESS } from '../../../shared/constants/urls';
import { MethodsEnum } from '../../../shared/enums/methods.enum';
import { useRequest } from '../../../shared/hooks/useRequest';

export const useAddress = () => {
  const [address, setAddress] = useState([]);
  const { request } = useRequest();

  useEffect(() => {
    request(URL_ADDRESS, MethodsEnum.GET, setAddress);
  }, []);

  return {
    address,
  };
};
