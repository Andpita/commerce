import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';

import { URL_TICKET } from '../../../shared/constants/urls';
import { MethodsEnum } from '../../../shared/enums/methods.enum';
import { RoutesEnum } from '../../../shared/enums/route.enum';
import { useRequest } from '../../../shared/hooks/useRequest';
import { useGlobalReducer } from '../../../store/reducers/globalReducer/useGlobalReducer';

export const useTicket = () => {
  const { request, loading } = useRequest();
  const { user } = useGlobalReducer();
  const [ticket, setTicket] = useState({
    userId: user?.id,
    userName: user?.name,
    userEmail: user?.email,
    textmessage: '',
  });
  const [disabledButton, setDisabledButton] = useState(true);
  const navigate = useNavigate();

  useEffect(() => {
    if (ticket.textmessage.length > 5) {
      setDisabledButton(false);
    }
  }, [ticket]);

  const submitTicket = async () => {
    await request(URL_TICKET, MethodsEnum.POST, undefined, ticket, 'Ticket enviado com sucesso!');
    navigate(RoutesEnum.PRODUCT);
  };

  const handleChange = (
    event: React.ChangeEvent<HTMLTextAreaElement | HTMLInputElement>,
    key: string,
  ) => {
    setTicket({
      ...ticket,
      [key]: event.target.value,
    });
  };

  return {
    submitTicket,
    handleChange,
    ticket,
    disabledButton,
    loading,
  };
};
