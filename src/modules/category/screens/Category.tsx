import { TableProps } from 'antd';
import Search from 'antd/es/input/Search';
import { useMemo } from 'react';

import { BoxButton } from '../../../shared/components/box/box.styled';
import { Button } from '../../../shared/components/buttons/Button';
import { LimitedContainer } from '../../../shared/components/containers/limitedContainers.styled';
import { Screen } from '../../../shared/components/screen/Screen';
import Table from '../../../shared/components/table/Table';
import { CategoryType } from '../../../shared/types/CategoryType';
import { useCategory } from '../hooks/useCategory';

export const Category = () => {
  const { categories, handleSearchCategory, handleCategoryInsert } = useCategory();

  const columns: TableProps<CategoryType>['columns'] = useMemo(
    () => [
      {
        title: 'Id',
        dataIndex: 'id',
        key: 'id',
        width: 100,
        render: (text) => <a>{text}</a>,
      },
      {
        title: 'Nome',
        dataIndex: 'name',
        key: 'name',
        sorter: (a, b) => a.name.localeCompare(b.name),
        render: (text) => <a>{text}</a>,
      },
      {
        title: 'Produtos',
        dataIndex: 'amountProducts',
        key: 'amountProducts',
        render: (text) => <a>{text}</a>,
      },
    ],
    [],
  );

  return (
    <Screen>
      <div>
        <BoxButton>
          <LimitedContainer width={320}>
            <Search placeholder="Buscar Categoria..." onSearch={handleSearchCategory} enterButton />
          </LimitedContainer>
          <LimitedContainer width={160}>
            <Button type="primary" onClick={handleCategoryInsert}>
              Inserir
            </Button>
          </LimitedContainer>
        </BoxButton>

        <Table columns={columns} dataSource={categories} rowKey={'id'} />
      </div>
    </Screen>
  );
};
