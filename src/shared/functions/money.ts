export const convertMoney = (value: number | undefined) => {
  if (!value) {
    return `R$ 0,00`;
  }

  return value.toLocaleString('pt-br', { style: 'currency', currency: 'BRL' });
};
