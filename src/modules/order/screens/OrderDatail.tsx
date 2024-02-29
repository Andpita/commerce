import { Badge, Descriptions, DescriptionsProps, Divider } from 'antd';
import { useEffect } from 'react';
import { useNavigate, useParams } from 'react-router-dom';

import { Screen } from '../../../shared/components/screen/Screen';
import ListOrderProduct from '../../../shared/components/table/listProducts';
import { RoutesEnum } from '../../../shared/enums/route.enum';
import { cepMask } from '../../../shared/functions/cepMask';
import { cpfMask } from '../../../shared/functions/cpfMask';
import { dataModify, hourModify } from '../../../shared/functions/dateFunctions';
import { convertMoney } from '../../../shared/functions/money';
import { phoneMask } from '../../../shared/functions/phoneMask';
import { useGlobalReducer } from '../../../store/reducers/globalReducer/useGlobalReducer';
import { useOrderDatails } from '../hooks/useOrderDatail';

export const OrderDetail = () => {
  const { orderId } = useParams();
  const { orderById } = useOrderDatails(orderId);
  const { user } = useGlobalReducer();
  const navigate = useNavigate();

  useEffect(() => {
    if (!orderById) {
      navigate(RoutesEnum.ORDER);
    }
  }, [orderId]);

  const userData: DescriptionsProps['items'] = [
    {
      key: '1',
      label: 'Nome',
      children: user?.name,
      span: 2,
    },
    {
      key: '2',
      label: 'CPF',
      children: cpfMask(user?.cpf || ''),
      span: 1,
    },
    {
      key: '3',
      label: 'E-mail',
      children: user?.email,
      span: 2,
    },
    {
      key: '4',
      label: 'Telefone',
      children: phoneMask(user?.phone),
    },
    {
      key: '5',
      label: 'Cidade',
      children: orderById?.address?.city?.name,
      span: 2,
    },
    {
      key: '6',
      label: 'Estado',
      children: orderById?.address?.city?.state?.name,
    },
    {
      key: '7',
      label: 'CEP',
      children: cepMask(orderById?.address?.cep),
    },
    {
      key: '8',
      label: 'Número',
      children: orderById?.address?.numberAddress,
    },
    {
      key: '9',
      label: 'Complemento',
      children: orderById?.address?.complement,
    },
  ];

  const payment: DescriptionsProps['items'] = [
    {
      key: '1',
      label: 'Data',
      children: orderById ? dataModify(orderById?.date) : '0',
      span: 1,
    },
    {
      key: '2',
      label: 'Hora',
      children: orderById ? hourModify(orderById?.date) : '0',
      span: 2,
    },
    {
      key: '3',
      label: 'ID Pagamento',
      children: orderById?.payment?.id,
    },
    {
      key: '4',
      label: 'Tipo de Pagamento',
      children: orderById?.payment?.type,
      span: 2,
    },
    {
      key: '5',
      label: 'Status',
      children: (
        <Badge
          status={orderById?.payment?.paymentStatus.id === 1 ? 'success' : 'processing'}
          text={orderById?.payment?.paymentStatus.status}
        />
      ),
      span: 3,
    },
    {
      key: '6',
      label: 'Preço',
      children: convertMoney(orderById?.payment?.price || 0),
    },
    {
      key: '7',
      label: 'Desconto',
      children: convertMoney(orderById?.payment?.discount || 0),
    },
    {
      key: '8',
      label: 'Preço Final',
      children: convertMoney(orderById?.payment?.finalPrice || 0),
      style: {
        background: 'khaki',
        border: '500',
      },
    },
  ];

  return (
    <Screen>
      <div style={{ width: '90%' }}>
        <Descriptions title="Detalhes Usuário" bordered items={userData} key={'user.id'} />;
        <Divider />
        <Descriptions title="Detalhes Pagamento" bordered items={payment} />;
        <Divider />
        <ListOrderProduct ordersProduct={orderById?.orderProduct} key={'productId'} />
      </div>
    </Screen>
  );
};
