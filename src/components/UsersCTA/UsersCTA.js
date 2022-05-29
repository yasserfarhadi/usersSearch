import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import styled from '@emotion/styled';

const StyledCta = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: stretch;
`;

function UsersCTA({ clicked, disabled, inputChanged, inputValue }) {
  return (
    <StyledCta>
      <Button disabled={disabled} onClick={clicked} variant="outlined">
        Get Users
      </Button>
      <TextField
        sx={{ flexGrow: 0.97 }}
        id="outlined-search"
        label="Search for users"
        type="search"
        disabled={!disabled}
        onChange={(e) => inputChanged(e.target.value)}
        value={inputValue}
      />
    </StyledCta>
  );
}

export default UsersCTA;
