import axios from 'axios';

const baseUrl = 'https://reqres.in';

const httpRequest = axios.create({
  baseURL: baseUrl,
  timeout: 10000,
  headers: { 'content-type': 'application/json' },
});

export const getUsersList = (pageNum = 1) => {
  const data = httpRequest.get('/api/users?page=' + pageNum);
  return data;
};
export const deleteUser = (id) => {
  const deletedUser = httpRequest.delete('api/users/' + id);
  return deletedUser;
};
