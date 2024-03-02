import { MinusOutlined, PlusOutlined } from '@ant-design/icons';
import { Image, Select } from 'antd';
import { useParams } from 'react-router-dom';

import { Button } from '../../../shared/components/buttons/Button';
import { ButtonPlus } from '../../../shared/components/buttons/button.styels';
import { LimitedContainer } from '../../../shared/components/containers/limitedContainers.styled';
import {
  DisplayFlexCenter,
  DisplayFlexCenterCustom,
} from '../../../shared/components/displays/display.styled';
import Loading from '../../../shared/components/loading/Loading';
import { Screen } from '../../../shared/components/screen/Screen';
import { convertMoney } from '../../../shared/functions/money';
import { useProductDetail } from '../hooks/useProductDetails';
import {
  Description,
  DescriptionText,
  DescriptionTitle,
  ProductAdvancedInfo,
  ProductContainer,
  ProductDatailsContainer,
  ProductDatailsInternalArea,
  ProductValueInfo,
  SubTotalDescription,
  TotalDescription,
} from '../styles/productDetail.style';

export const ProductDetails = () => {
  const { id } = useParams();
  const { loading, product, amountProduct, setAmountProduct, submitProductInOrder } =
    useProductDetail(`${id}`);

  return (
    <Screen>
      <ProductContainer>
        {loading ? (
          <DisplayFlexCenterCustom>
            <Loading size="large" />
          </DisplayFlexCenterCustom>
        ) : (
          <>
            <Image
              width={300}
              height={300}
              style={{ objectFit: 'cover', minWidth: '300px', borderRadius: '20px' }}
              src={product?.image}
            />
            <ProductDatailsContainer>
              <ProductDatailsInternalArea>
                <ProductAdvancedInfo>
                  <Description>
                    <DescriptionTitle fontSize={30} margin={20}>
                      {product?.name}
                    </DescriptionTitle>
                  </Description>
                  <LimitedContainer width={250}>
                    <Description>
                      <DescriptionTitle fontSize={16}>Tamanho:</DescriptionTitle>
                      <Select
                        defaultValue="Padrão"
                        style={{ marginLeft: '20px', width: '100px' }}
                        options={[
                          { value: 'Padrão', label: 'Padrão' },
                          { value: 'P', label: 'P', disabled: true },
                          { value: 'M', label: 'M' },
                          { value: 'G', label: 'G', disabled: true },
                          { value: 'GG', label: 'GG', disabled: true },
                        ]}
                      />
                    </Description>

                    <Description>
                      <DescriptionTitle fontSize={16}>Cor:</DescriptionTitle>
                      <Select
                        defaultValue="Preto"
                        style={{ marginLeft: '20px', width: '100px' }}
                        options={[
                          { value: 'Azul', label: 'Azul' },
                          { value: 'Preto', label: 'Preto' },
                          { value: 'Branco', label: 'Branco', disabled: true },
                          { value: 'Rosa', label: 'Rosa', disabled: true },
                          { value: 'Amarelo', label: 'GG', disabled: true },
                        ]}
                      />
                    </Description>

                    <Description>
                      <DescriptionText fontSize={16}>Altura: </DescriptionText>
                      <DescriptionText fontSize={16}>{product?.height} cm</DescriptionText>
                    </Description>
                    <Description>
                      <DescriptionText fontSize={16}>Largura: </DescriptionText>
                      <DescriptionText fontSize={16}>{product?.width} cm</DescriptionText>
                    </Description>
                    <Description>
                      <DescriptionText fontSize={16}>Largura: </DescriptionText>
                      <DescriptionText fontSize={16}>{product?.length} cm</DescriptionText>
                    </Description>
                    <Description>
                      <DescriptionText fontSize={16}>Categoria: </DescriptionText>
                      <DescriptionText fontSize={16}>{product?.category?.name}</DescriptionText>
                    </Description>
                  </LimitedContainer>
                </ProductAdvancedInfo>

                <ProductValueInfo>
                  <Description>
                    <DescriptionText fontSize={16}>Preço Unitário </DescriptionText>
                  </Description>
                  <div>
                    <SubTotalDescription>{convertMoney(product?.price)}</SubTotalDescription>
                  </div>
                  <div
                    style={{
                      display: 'flex',
                      justifyContent: 'center',
                      alignItems: 'center',
                      height: '30px',
                      border: 'solid 1px black',
                      padding: '0 10px',
                      margin: '0 0 30px 0',
                      borderRadius: '50px',
                    }}
                  >
                    <div style={{ fontSize: '16px', marginRight: '10px' }}>Quantidade: </div>
                    <LimitedContainer width={40}>
                      <ButtonPlus onClick={() => setAmountProduct(amountProduct + 1)}>
                        <PlusOutlined />
                      </ButtonPlus>
                    </LimitedContainer>
                    <div
                      style={{
                        margin: '0 5px',
                        border: 'solid red 1px',
                        width: '25px',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                      }}
                    >
                      <span>{amountProduct}</span>
                    </div>

                    <LimitedContainer width={40}>
                      <ButtonPlus
                        onClick={() => {
                          amountProduct > 1 && setAmountProduct(amountProduct - 1);
                        }}
                      >
                        <MinusOutlined />
                      </ButtonPlus>
                    </LimitedContainer>
                  </div>
                  <Description>
                    <DescriptionText fontSize={16}>Preço Total </DescriptionText>
                  </Description>
                  <div>
                    <TotalDescription>
                      {convertMoney(product?.price ? product?.price * amountProduct : 0)}
                    </TotalDescription>
                  </div>
                </ProductValueInfo>
              </ProductDatailsInternalArea>
              <DisplayFlexCenter>
                <LimitedContainer width={200}>
                  <Button onClick={() => id && submitProductInOrder(+id, amountProduct)}>
                    Adicionar ao Carrinho
                  </Button>
                </LimitedContainer>
              </DisplayFlexCenter>
            </ProductDatailsContainer>
          </>
        )}
      </ProductContainer>
    </Screen>
  );
};
