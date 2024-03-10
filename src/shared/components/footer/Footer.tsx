import { FooterContainer, LinkFooter } from './footer.style';

export const Footer = () => {
  return (
    <FooterContainer>
      <div>Feito por Anderson Pita</div>
      <div>
        Email: <LinkFooter href="mailto:dev.andpita@gmail.com">dev.andpita@gmail.com</LinkFooter>
      </div>
      <div>
        Git:{' '}
        <LinkFooter href="https://github.com/Andpita" target="_blank">
          https://github.com/Andpita
        </LinkFooter>
      </div>
      <div>
        Site:
        <LinkFooter href="https://portifolio-pita.netlify.app/" target="_blank">
          https://portifolio-pita.netlify.app/
        </LinkFooter>
      </div>
    </FooterContainer>
  );
};
