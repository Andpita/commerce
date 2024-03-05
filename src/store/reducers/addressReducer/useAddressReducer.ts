import { useDispatch } from 'react-redux';

import { AddressType } from '../../../shared/types/AddressType';
import { useAppSelector } from '../../hooks';
import { setAddressAction } from '.';

export const useAddressReducer = () => {
  const dispatch = useDispatch();

  const { address } = useAppSelector((state) => state.addressReducer);
  const setAddress = (address: AddressType[]) => {
    dispatch(setAddressAction(address));
  };

  return {
    setAddress,
    address,
  };
};
