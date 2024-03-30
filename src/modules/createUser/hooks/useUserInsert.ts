import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';

import { URL_USER } from '../../../shared/constants/urls';
import { InsertUserDTO } from '../../../shared/dto/insertUser.dto.';
import { MethodsEnum } from '../../../shared/enums/methods.enum';
import { RoutesEnum } from '../../../shared/enums/route.enum';
import { useRequest } from '../../../shared/hooks/useRequest';

export const useUserInsert = () => {
  const [disableButton, setDisableButton] = useState(true);
  const { request, loading } = useRequest();
  const navigate = useNavigate();
  const [createUser, setCreateUser] = useState<InsertUserDTO>({
    name: '',
    lastName: '',
    email: '',
    phone: '',
    cpf: '',
    password: '',
  });

  useEffect(() => {
    if (
      createUser.name &&
      createUser.lastName &&
      createUser.email &&
      createUser.cpf &&
      createUser.phone
    ) {
      setDisableButton(false);
    } else {
      setDisableButton(true);
    }
  }, [createUser]);

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>, key: string) => {
    setCreateUser({
      ...createUser,
      [key]: event.target.value,
    });
  };

  const handleSubmit = async () => {
    await request(URL_USER, MethodsEnum.POST, undefined, createUser, 'Usuário criado com sucesso!');
    navigate(RoutesEnum.PRODUCT);
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
    createUser,
  };
};
