import styled from 'styled-components';

interface ThumbnailProps {
  margin?: string;
}

export const ThumbnailContainer = styled.div<ThumbnailProps>`
  height: 200px;
  border-radius: 4px;
  width: 400px;
  border: 1px solid green;
  margin: ${(props) => props.margin || '0px'};
  display: flex;
`;

export const AreaImage = styled.div`
  min-width: 50%;
  width: 50%;
  margin: 10px;
`;

export const ThumbnailImage = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
`;

export const AreaData = styled.div`
  padding: 10px;
  display: flex;
  flex-direction: column;

  div {
    padding: 10px;
  }
`;
