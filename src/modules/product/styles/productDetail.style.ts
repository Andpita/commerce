import styled from 'styled-components';

export const ProductContainer = styled.div`
  background-color: whitesmoke;
  padding: 20px;
  display: flex;
  border-radius: 20px;
  border: double lightblue 4px;
  margin-bottom: 10px;
  max-height: 400px;
  min-width: 700px;
`;

export const ProductDatailsContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
`;

export const ProductDatailsInternalArea = styled.div`
  display: flex;
  align-items: center;
  width: 100%;
`;

export const ProductAdvancedInfo = styled.div`
  width: 100%;
  align-items: center;
  border-right: solid lightblue 1px;
  border-left: solid lightblue 1px;
  margin: 10px;
  max-width: 100%;
`;

export const ProductValueInfo = styled.div`
  margin: 10px;
  width: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
`;

export const Description = styled.div`
  display: flex;
  margin: 10px;
  align-items: center;
  justify-content: space-between;
`;

interface DescriptionTitleProps {
  fontSize: number;
}

export const DescriptionTitle = styled.span<DescriptionTitleProps>`
  font-size: ${(props) => props.fontSize}px;

  font-weight: bold;
`;

export const DescriptionText = styled.span<DescriptionTitleProps>`
  font-size: ${(props) => props.fontSize}px;
`;

export const SubTotalDescription = styled.h2`
  margin: 0 0 30px;
  font-size: 20px;
`;

export const TotalDescription = styled.h2`
  margin: 0 0 30px;
  font-size: 30px;
`;
