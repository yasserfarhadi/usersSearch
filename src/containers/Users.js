import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import UsersCTA from '../components/UsersCTA/UsersCTA';
import UsersList from '../components/UsersList/UsersList';
import LoadMore from '../components/LoadMore/LoadMore';

import { actions } from '../redux';

function Users() {
  const [inputValue, setInputValue] = React.useState('');
  const store = useSelector((store) => store);
  const dispatch = useDispatch();

  const userList = React.useMemo(() => {
    if (store.users && store.users.length !== 0 && inputValue.trim() !== '') {
      return store.users.filter(
        (user) =>
          user.first_name.toLowerCase().includes(inputValue.toLowerCase()) ||
          user.last_name.toLowerCase().includes(inputValue.toLowerCase())
      );
    }
    return store.users;
  }, [inputValue, store.users]);

  function fetchUsers(page) {
    dispatch(actions.fetchUsers(page));
  }

  function deleteUser(id) {
    dispatch(actions.deleteUserReq(id));
  }

  function inputValueHandler(val) {
    setInputValue(val);
  }

  function fetchMoreUsers() {
    if (store.users && store.users.length !== 0) {
      if (store.page === store.totalPages) return;
      fetchUsers(store.page + 1);
    }
  }
  const loadmore = store.users &&
    store.users.length !== 0 &&
    store.page !== store.totalPages &&
    inputValue.trim() === '' && <LoadMore clicked={fetchMoreUsers} />;

  const message =
    !store.users || store.users.length === 0
      ? 'Click on "GET USERS" to get the list!'
      : userList?.length === 0 && inputValue.trim() !== ''
      ? 'User not found'
      : '';

  return (
    <div>
      <UsersCTA
        inputChanged={inputValueHandler}
        inputValue={inputValue}
        disabled={store.users?.length}
        clicked={fetchUsers}
      />
      <UsersList message={message} deleted={deleteUser} users={userList} />
      {loadmore}
    </div>
  );
}

export default Users;
