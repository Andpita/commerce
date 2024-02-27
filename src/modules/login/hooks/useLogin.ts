import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';

import { RoutesEnum } from '../../../shared/enums/route.enum';
import { useRequest } from '../../../shared/hooks/useRequest';
import { useGlobalReducer } from '../../../store/reducers/globalReducer/useGlobalReducer';

export const useLogin = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();
  const { user } = useGlobalReducer();
  const { loading, authRequest } = useRequest();

  useEffect(() => {
    if (user) {
      navigate(RoutesEnum.PRODUCT);
    }
  }, [user]);

  const changeEmail = (event: React.ChangeEvent<HTMLInputElement>) => {
    setEmail(event.target.value);
  };

  const changePassword = (event: React.ChangeEvent<HTMLInputElement>) => {
    setPassword(event.target.value);
  };

  const handleSubmit = () => {
    authRequest({
      email: email,
      password: password,
    });
  };

  return {
    handleSubmit,
    changePassword,
    changeEmail,
    password,
    email,
    loading,
    user,
  };
};
