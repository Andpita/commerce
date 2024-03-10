import { TableProps } from 'antd';
import Search from 'antd/es/input/Search';
import { useEffect, useMemo, useState } from 'react';

import { BoxButton } from '../../../shared/components/box/box.styled';
import { LimitedContainer } from '../../../shared/components/containers/limitedContainers.styled';
import { DisplayFlexEvenly } from '../../../shared/components/displays/display.styled';
import { Screen } from '../../../shared/components/screen/Screen';
import Table from '../../../shared/components/table/Table';
import { Thumbnail } from '../../../shared/components/thumbnail/thumbnail';
import { CategoryType } from '../../../shared/types/CategoryType';
import { ProductType } from '../../../shared/types/ProductType';
import { ProductArea } from '../../product/styles/product.style';
import { useCategory } from '../hooks/useCategory';

export const Category = () => {
  const { categories, handleSearchCategory, productForCategory, filterCategoryId } = useCategory();
  const [idCategory, setIdCategory] = useState(0);

  useEffect(() => {}, [idCategory]);

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
      <div style={{ width: '100%', padding: '20px' }}>
        <DisplayFlexEvenly>
          <div>
            <BoxButton>
              <LimitedContainer width={320}>
                <Search
                  placeholder="Buscar Categoria..."
                  onSearch={handleSearchCategory}
                  enterButton
                />
              </LimitedContainer>
            </BoxButton>
            <Table
              onRow={(record) => ({
                onClick: () => {
                  setIdCategory(record.id);
                  filterCategoryId(record.id);
                  console.log(record.id);
                },
              })}
              columns={columns}
              dataSource={categories}
              rowKey={'id'}
            />
          </div>
          <div style={{ width: '70%' }}>
            <ProductArea>
              {productForCategory?.product?.map((product: ProductType) => (
                <Thumbnail margin="5px" key={product.id} product={product} />
              ))}
            </ProductArea>
          </div>
        </DisplayFlexEvenly>
      </div>
    </Screen>
  );
};
