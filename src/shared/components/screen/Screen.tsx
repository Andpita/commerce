import { Header } from '../header/Header';
import { Menu } from '../menu/Menu';
import { ScreenContainer } from './screen.style';

interface ScreenProps {
  children: React.ReactNode;
}

export const Screen = ({ children }: ScreenProps) => {
  return (
    <>
      <Header />
      <Menu />
      <ScreenContainer>{children}</ScreenContainer>
    </>
  );
};
