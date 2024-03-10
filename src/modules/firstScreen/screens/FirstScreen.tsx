import { useEffect } from 'react';

import { DisplayFlexEvenly } from '../../../shared/components/displays/display.styled';
import { Screen } from '../../../shared/components/screen/Screen';
import { ColorsEnum } from '../../../shared/enums/colors.enum';
import { useGlobalReducer } from '../../../store/reducers/globalReducer/useGlobalReducer';
import { ContainerHome, ContainerLoren } from '../styles/firstScreen.style';

export const FirstScreen = () => {
  const { user } = useGlobalReducer();

  useEffect(() => {}, [user]);

  return (
    <Screen>
      <ContainerHome>
        <div style={{ textAlign: 'center' }}>
          <h2>BEM VINDO A GAG STORE!</h2>
        </div>
        <div
          style={{
            width: '100%',
            display: 'flex',
            justifyContent: 'center',
            minHeight: '100vh',
            marginBottom: '20px',
          }}
        >
          <div style={{ width: '100%', background: ColorsEnum.Light, zIndex: 2 }}></div>
          <img src="./capa.jpg" style={{ maxWidth: '50%', margin: 'auto auto' }} />
          <div style={{ width: '100%', background: ColorsEnum.Light, zIndex: 2 }}></div>
        </div>

        <DisplayFlexEvenly>
          <ContainerLoren>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Blanditiis sit laudantium
            reprehenderit necessitatibus delectus cumque vero, eius rerum modi laboriosam itaque
            eaque
          </ContainerLoren>
          <ContainerLoren>
            rem expedita soluta ab pariatur architecto. A blanditiis porro asperiores nobis.
            Repellendus quaerat sit ad earum distinctio cupiditate ex quae, cum aliquam dolore porro
            dolorem eveniet voluptatibus necessitatibus maxime delectus ab veritatis dolores quidem
          </ContainerLoren>
          <ContainerLoren>
            libero, quas animi tenetur dicta in. Magnam harum voluptate molestias provident iste
            totam ut pariatur praesentium qui laboriosam illum quod deserunt doloribus maiores eius
          </ContainerLoren>
          <ContainerLoren>
            voluptates facilis esse, voluptatum debitis omnis dolores? Odio, possimus ad! Commodi
            dolores nostrum quasi reiciendis adipisci, perferendis ex quibusdam officiis.
          </ContainerLoren>
        </DisplayFlexEvenly>
      </ContainerHome>
    </Screen>
  );
};
