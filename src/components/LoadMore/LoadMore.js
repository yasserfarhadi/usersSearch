import Button from '@mui/material/Button';
import styled from '@emotion/styled';

const StyledContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;

function LoadMore({ clicked }) {
  return (
    <StyledContainer>
      <Button onClick={clicked} size="small">
        LOAD MORE
      </Button>
    </StyledContainer>
  );
}

export default LoadMore;
