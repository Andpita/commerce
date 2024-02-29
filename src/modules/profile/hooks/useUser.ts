import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';

import { URL_USER } from '../../../shared/constants/urls';
import { InsertUser } from '../../../shared/dto/insertUser';
import { MethodsEnum } from '../../../shared/enums/methods.enum';
import { RoutesEnum } from '../../../shared/enums/route.enum';
import { useRequest } from '../../../shared/hooks/useRequest';
import { useGlobalReducer } from '../../../store/reducers/globalReducer/useGlobalReducer';

export const useProfile = () => {
  const [disableButton, setDisableButton] = useState(true);
  const { request, loading } = useRequest();
  const navigate = useNavigate();
  const { user: reducerUser, setUser: setReducerUser } = useGlobalReducer();
  const [user, setUser] = useState<InsertUser>({
    name: '',
    lastName: '',
    email: '',
    phone: '',
    cpf: '',
    password: '',
  });

  useEffect(() => {
    if (reducerUser) {
      setUser({
        name: reducerUser.name,
        lastName: reducerUser.lastName || '',
        email: reducerUser.email,
        phone: reducerUser.phone,
        cpf: reducerUser.cpf,
        password: '',
      });
    }
  }, [reducerUser]);

  useEffect(() => {
    if (user.name && user.email && user.cpf && user.phone && user.password) {
      setDisableButton(false);
    } else {
      setDisableButton(true);
    }
  }, [user]);

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>, key: string) => {
    setUser({
      ...user,
      [key]: event.target.value,
    });
  };

  const handleSubmit = async () => {
    await request(URL_USER, MethodsEnum.PUT, setReducerUser, user, 'Usuário editado com sucesso!');
    setReducerUser({
      name: user.name,
      cpf: user.cpf,
      email: user.email,
      phone: user.phone,
      lastName: user.lastName || '',
    });
    //navigate(RoutesEnum.PRODUCT);
  };

  const handleClickcancel = () => {
    navigate(RoutesEnum.HOME);
  };

  return {
    loading,
    disableButton,
    handleClickcancel,
    handleSubmit,
    handleChange,
    user,
  };
};
