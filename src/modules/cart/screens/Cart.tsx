import { Button, Select, TableProps } from 'antd';
import { useEffect, useMemo } from 'react';
import { useNavigate } from 'react-router-dom';

import { LimitedContainer } from '../../../shared/components/containers/limitedContainers.styled';
import { DisplayFlexCenter } from '../../../shared/components/displays/display.styled';
import Loading from '../../../shared/components/loading/Loading';
import { Screen } from '../../../shared/components/screen/Screen';
import Table from '../../../shared/components/table/Table';
import { ThumbnailImage } from '../../../shared/components/thumbnail/thumbnail.style';
import { RoutesEnum } from '../../../shared/enums/route.enum';
import { convertMoney } from '../../../shared/functions/money';
import { AddressType } from '../../../shared/types/AddressType';
import { CartProductsType } from '../../../shared/types/CartProductType';
import { useGlobalReducer } from '../../../store/reducers/globalReducer/useGlobalReducer';
import { useCart } from '../hooks/useCart';
import {
  AreaPayment,
  CartContainer,
  ContainerDescriptions,
  ContainerValue,
  DividerCart,
  SelectDelivery,
} from '../styles/cart.style';

export const Cart = () => {
  const { cart, loading, address, paymentTest, user, handleChangeSelect, disabledButton } =
    useCart();
  const { setNotification } = useGlobalReducer();
  const navigate = useNavigate();

  let acc = 0;

  useEffect(() => {
    if (user) {
      //
    } else {
      setNotification('error', 'Faça login para continuar');
      navigate(RoutesEnum.LOGIN);
    }
  }, [user]);

  const columns: TableProps<CartProductsType>['columns'] = useMemo(
    () => [
      {
        title: '',
        dataIndex: 'id',
        key: 'id',
        width: 100,
        render: (_, cartProduct) => (
          <a>
            <ThumbnailImage
              style={{
                height: '100px',
                width: '100px',
                maxHeight: '100px',
                maxWidth: '100px',
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
        width: 200,
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
        width: 100,
        render: (_, cartProduct) => (
          <ContainerDescriptions>
            <a>{cartProduct.product?.price && convertMoney(cartProduct.product?.price)}</a>
          </ContainerDescriptions>
        ),
      },
      {
        title: 'Qtd',
        dataIndex: 'amount',
        key: 'amount',
        width: 50,
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
        width: 100,
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
              style={{ width: '100%', minWidth: '60%', height: '550px', background: 'white' }}
              columns={columns}
              dataSource={cart?.cartProducts}
              rowKey={'id'}
              pagination={{ position: ['none', 'none'] }}
            />
            <AreaPayment>
              <ContainerValue>
                <p>Valor dos Produtos: </p>
                <p>{convertMoney(acc)}</p>
              </ContainerValue>

              <div style={{ padding: '10px' }}>
                Endereço de Entrega:
                <Select
                  style={{
                    width: '100%',
                    height: '100px',
                    border: 'solid 1px purple',
                    borderRadius: '8px',
                  }}
                  options={
                    address &&
                    address.map((address: AddressType) => ({
                      value: `${address.id}`,
                      label: (
                        <div style={{ fontSize: '14px', maxWidth: '1px' }}>
                          CEP: {address.cep}
                          <br />
                          {address.city?.name}/{address.city?.state?.name}
                          <br />
                          {address.complement}/{address.numberAddress}
                        </div>
                      ),
                    }))
                  }
                  onChange={handleChangeSelect}
                />
              </div>

              <LimitedContainer style={{ padding: '10px' }}>
                <SelectDelivery onClick={() => console.log('pac')}>
                  <div>PAC</div>
                  <div>
                    <div style={{ display: 'block' }}>
                      <div>Valor: </div>
                      <div>R$ 30,00</div>
                    </div>
                    <div style={{ display: 'block' }}>
                      <div>Prazo: </div>
                      <div>6 dias úteis</div>
                    </div>
                  </div>
                </SelectDelivery>
                <SelectDelivery onClick={() => console.log('sedex')} style={{}}>
                  <div>SEDEX</div>
                  <div>
                    <div style={{ display: 'block' }}>
                      <div>Valor: </div>
                      <div>R$ 50,00</div>
                    </div>
                    <div style={{ display: 'block' }}>
                      <div>Prazo: </div>
                      <div>3 dias úteis</div>
                    </div>
                  </div>
                </SelectDelivery>
              </LimitedContainer>

              <ContainerValue>
                <p>Valor dos Produtos: </p>
                <p>{convertMoney(acc)}</p>
              </ContainerValue>

              <DisplayFlexCenter>
                <Button
                  type="primary"
                  onClick={() => paymentTest()}
                  style={{ marginBottom: '20px' }}
                  disabled={disabledButton}
                >
                  PAGAMENTO TESTE
                </Button>
              </DisplayFlexCenter>
            </AreaPayment>
          </DividerCart>
        )}
      </CartContainer>
    </Screen>
  );
};
