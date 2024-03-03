import { DeleteOutlined, EditOutlined } from '@ant-design/icons';
import { TableProps } from 'antd';

import { Button } from '../../../shared/components/buttons/Button';
import { LimitedContainer } from '../../../shared/components/containers/limitedContainers.styled';
import {
  DisplayFlexCenter,
  DisplayFlexEvenly,
} from '../../../shared/components/displays/display.styled';
import { MenuProfile } from '../../../shared/components/menu/MenuProfile';
import { Screen } from '../../../shared/components/screen/Screen';
import Table from '../../../shared/components/table/Table';
import { AddressType } from '../../../shared/types/AddressType';
import { useAddress } from '../hooks/useAddress';

const columns: TableProps<AddressType>['columns'] = [
  {
    title: 'Endereço',
    dataIndex: 'id',
    key: 'id',
    width: 100,
    render: (text) => <a>{text}</a>,
  },
  {
    title: 'cep',
    dataIndex: 'cep',
    key: 'cep',
    render: (text) => <a>{text}</a>,
  },
  {
    title: 'Cidade',
    dataIndex: 'city',
    key: 'city',
    render: (_, target) => <a>{target?.city?.name}</a>,
  },
  {
    title: 'Estado',
    dataIndex: 'state',
    key: 'state',
    render: (_, target) => <a>{target?.city?.state?.name}</a>,
  },
  {
    title: 'Action',
    dataIndex: '',
    key: 'x',
    width: 100,
    render: () => (
      <DisplayFlexCenter>
        <Button
          marginLeft="20px"
          disabled
          type="primary"
          icon={<EditOutlined />}
          style={{ fontSize: '10px', maxWidth: '80px', margin: '5px' }}
        ></Button>
        <Button
          marginLeft="20px"
          disabled
          danger
          type="primary"
          icon={<DeleteOutlined />}
          style={{ fontSize: '10px', maxWidth: '80px', margin: '5px' }}
        ></Button>
      </DisplayFlexCenter>
    ),
  },
];

export const Address = () => {
  const { address } = useAddress();

  return (
    <Screen>
      <DisplayFlexEvenly>
        <MenuProfile />
        <div
          style={{
            width: '60%',
            margin: '20px',
          }}
        >
          <LimitedContainer
            width={600}
            style={{ background: 'lightblue', borderRadius: '10px', padding: '20px' }}
          >
            <span>ENDEREÇOS</span>
            <Table columns={columns} dataSource={address} rowKey={'orderId'} />
          </LimitedContainer>
        </div>
      </DisplayFlexEvenly>
    </Screen>
  );
};