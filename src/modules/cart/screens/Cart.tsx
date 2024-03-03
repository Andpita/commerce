import { Button, TableProps } from 'antd';
import { useEffect, useMemo } from 'react';
import { useNavigate } from 'react-router-dom';

import Loading from '../../../shared/components/loading/Loading';
import { Screen } from '../../../shared/components/screen/Screen';
import Table from '../../../shared/components/table/Table';
import { ThumbnailImage } from '../../../shared/components/thumbnail/thumbnail.style';
import { RoutesEnum } from '../../../shared/enums/route.enum';
import { convertMoney } from '../../../shared/functions/money';
import { CartProductsType } from '../../../shared/types/CartProductType';
import { useGlobalReducer } from '../../../store/reducers/globalReducer/useGlobalReducer';
import { useCart } from '../hooks/useCart';
import {
  AreaPayment,
  CartContainer,
  ContainerDescriptions,
  DividerCart,
} from '../styles/cart.style';

export const Cart = () => {
  const { cart, loading, paymentTest } = useCart();
  const { setNotification, user } = useGlobalReducer();
  const navigate = useNavigate();
  let acc = 0;

  useEffect(() => {
    if (!user) {
      setNotification('error', 'Faça login para continuar');
      navigate(RoutesEnum.LOGIN);
    }
  }, []);

  const columns: TableProps<CartProductsType>['columns'] = useMemo(
    () => [
      {
        title: '',
        dataIndex: 'id',
        key: 'id',
        width: 200,
        render: (_, cartProduct) => (
          <a>
            <ThumbnailImage
              style={{
                height: '120px',
                width: '150px',
                maxHeight: '150px',
                maxWidth: '150px',
              }}
              src={cartProduct.product?.image}
            />
          </a>
        ),
      },
      {
        title: 'Descrição',
        dataIndex: 'product',
        key: 'product',
        render: (_, cartProduct) => (
          <ContainerDescriptions>
            <span>Produto: {cartProduct.product?.name}</span>
          </ContainerDescriptions>
        ),
      },
      {
        title: 'Preço',
        dataIndex: 'price',
        key: 'price',
        render: (_, cartProduct) => (
          <ContainerDescriptions>
            <a>{cartProduct.product?.price && convertMoney(cartProduct.product?.price)}</a>
          </ContainerDescriptions>
        ),
      },
      {
        title: 'Quantidade',
        dataIndex: 'amount',
        key: 'amount',
        render: (_, cartProduct) => (
          <ContainerDescriptions>
            <a style={{ textAlign: 'center', color: 'black', fontWeight: 'bold' }}>
              {cartProduct.amount}
            </a>
          </ContainerDescriptions>
        ),
      },
      {
        title: 'Preço',
        dataIndex: 'price',
        key: 'price',
        render: (_, cartProduct) => {
          const priceTotalItem = cartProduct.product
            ? cartProduct.product?.price * cartProduct.amount
            : 0;

          return (
            <ContainerDescriptions>
              <a>{convertMoney(priceTotalItem)}</a>
            </ContainerDescriptions>
          );
        },
      },
    ],
    [],
  );

  cart?.cartProducts.map((product) => {
    if (!product.product) {
      return;
    } else {
      const parcial: number = product.amount * product.product?.price;
      acc = acc + parcial;
    }
  });

  return (
    <Screen>
      <CartContainer>
        {loading ? (
          <Loading />
        ) : (
          <DividerCart>
            <Table
              style={{ width: '100%', minWidth: '60%' }}
              columns={columns}
              dataSource={cart?.cartProducts}
              rowKey={'id'}
            />
            <AreaPayment>
              <div style={{ width: '100%', padding: '20px', margin: '20px' }}>
                Valor dos Produtos: {acc.toFixed(2)}
              </div>
              <div style={{ width: '100%', padding: '20px', margin: '20px' }}>Frete: 0.00</div>
              <Button onClick={() => paymentTest()}>PAGAMENTO TESTE</Button>
            </AreaPayment>
          </DividerCart>
        )}
      </CartContainer>
    </Screen>
  );
};
