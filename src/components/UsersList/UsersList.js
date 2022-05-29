import User from '../User/User';
import Grid from '@mui/material/Grid';
import styled from '@emotion/styled';

const StyledMessage = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 200px;
`;

function UsersList({ users, deleted }) {
  if (users?.length) {
    const usersList = users.map((user) => (
      <Grid
        key={user.id}
        item
        xs={1}
        sx={{
          display: 'flex',
          justifyContent: 'center',
          paddingBottom: '20px',
        }}
      >
        <User
          firstName={user.first_name}
          lastName={user.last_name}
          avatar={user.avatar}
          deleted={() => deleted(user.id)}
        />
      </Grid>
    ));

    return (
      <Grid
        container
        columns={{ xs: 1, sm: 2, md: 3, lg: 4 }}
        spacing={2}
        sx={{ padding: '20px 0' }}
      >
        {usersList}
      </Grid>
    );
  }

  return <StyledMessage>Click on "GET USERS" to get the list!</StyledMessage>;
}

export default UsersList;
