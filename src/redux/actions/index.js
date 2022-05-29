import * as types from '../types';
import * as api from '../../api';

export const gettingUsers = () => ({
  type: types.GETTING_USERS,
});

export const getUsersError = (err) => ({
  type: types.GET_USERS_ERROR,
  payload: err,
});

export const setUsers = (payload) => ({
  type: types.SET_USERS,
  payload,
});

export const setMoreUsers = (payload) => ({
  type: types.SET_MORE_USERS,
  payload,
});

export const fetchUsers = (page) => async (dispatch) => {
  dispatch(gettingUsers);
  try {
    const users = await api.getUsersList(page);
    if (users.status === 200) {
      const payload = {
        page: users.data.page,
        totalPages: users.data.total_pages,
        users: users.data.data,
      };
      if (page > 1) {
        dispatch(setMoreUsers(payload));
      } else {
        dispatch(setUsers(payload));
      }
    } else {
      throw new Error('Something went wrong!');
    }
  } catch (error) {
    dispatch(getUsersError(error));
  }
};

const deletingUser = () => ({ type: types.DELETING_USER });
const deleteUser = (id) => ({ type: types.DELETE_USER, payload: id });

export const deleteUserReq = (id) => async (dispatch) => {
  dispatch(deletingUser());
  try {
    const deletedUser = await api.deleteUser(id);
    if (deletedUser.status === 204) {
      dispatch(deleteUser(id));
    } else {
      throw new Error('Something went wrong!');
    }
  } catch (error) {
    dispatch(getUsersError(error));
  }
};
