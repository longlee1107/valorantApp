import { Axios } from "./Axios";

export function getUser() {
  return Axios.get('/api/v1/users/my_profile');
}
export function updateUser(payload) {
  return Axios.patch('/api/v1/users/update_my_profile', payload);
}

export function getManagers() {
  return Axios.post('/api/v1/users/get_user_by_role_name?roleName=ROLE_EMPLOYEE');
}
export function changePassword(payload){
  return Axios.post('/api/v1/users/change_password',payload)
}

const authService = {
  getUser,
  updateUser,
  getManagers,
  changePassword
};

export default authService;