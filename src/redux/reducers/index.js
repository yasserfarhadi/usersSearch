import * as types from '../types';

const initialUsersState = {
  users: [],
  loading: false,
  error: '',
  page: 1,
  totalPages: null,
};

export const usersReducer = (state = initialUsersState, action) => {
  console.log('====================================');
  console.log('reducer action type' + action.type);
  console.log('====================================');
  switch (action.type) {
    case types.GETTING_USERS:
      return { ...state, loading: true };
    case types.SET_USERS:
      return {
        users: action.payload.users,
        loading: false,
        error: '',
        page: action.payload.page,
        totalPages: action.payload.totalPages,
      };
    case types.SET_MORE_USERS:
      return {
        users: [...state.users, ...action.payload.users],
        loading: false,
        error: '',
        page: action.payload.page,
        totalPages: action.payload.totalPages,
      };
    case types.GET_USERS_ERROR:
      return { ...state, loading: false, error: action.payload };
    case types.DELETING_USER:
      return { ...state, loading: true };
    case types.DELETE_USER: {
      const listWithDeletedUser = state.users.filter(
        (user) => user.id !== action.payload
      );
      return {
        ...state,
        users: listWithDeletedUser,
        loading: false,
        error: '',
      };
    }
    default:
      return state;
  }
};
