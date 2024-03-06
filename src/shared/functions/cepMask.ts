export const cepMask = (cep: string | undefined) => {
  if (!cep) {
    return undefined;
  }

  return cep.replace(/(\d{5})(\d)/, '$1-$2');
};
