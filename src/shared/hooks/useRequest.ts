import { useState } from 'react';

import { useGlobalReducer } from '../../store/reducers/globalReducer/useGlobalReducer';
import { URL_AUTH } from '../constants/urls';
import { setAuthorizationToken } from '../functions/connections/auth';
import ConnectionAPI, { ConnectionAPIPost } from '../functions/connections/connectAPI';
import { AuthType } from '../types/AuthType';

export const useRequest = () => {
  const [loading, setLoading] = useState(false);
  const { setNotification, setUser } = useGlobalReducer();

  const request = async <T>(
    url: string,
    method: string,
    saveGlobal?: (obj: T) => void,
    body?: unknown,
    message?: string,
  ): Promise<T | undefined> => {
    setLoading(true);

    const data: T | undefined = await ConnectionAPI.connect<T>(url, method, body)
      .then((result) => {
        if (saveGlobal) {
          saveGlobal(result);
        }
        if (message) {
          setNotification('success', message);
        }

        return result;
      })
      .catch((e: Error) => {
        setNotification('error', e.message);
        return undefined;
      })
      .finally(() => setLoading(false));

    return data;
  };

  const authRequest = async (body: unknown, message?: boolean): Promise<void> => {
    setLoading(true);

    await ConnectionAPIPost<AuthType>(URL_AUTH, body)
      .then((result) => {
        if (message) {
          setNotification('success', `Bem vindo ${result.user.name}`);
        }

        setAuthorizationToken(result.accessToken);
        setUser(result.user);
        location.href = '/produtos';

        return result;
      })
      .catch(() => {
        setNotification('error', `Usuário ou senha inválidos`);

        return undefined;
      })
      .finally(() => {
        setLoading(false);
      });
  };

  return {
    loading,
    authRequest,
    request,
  };
};
