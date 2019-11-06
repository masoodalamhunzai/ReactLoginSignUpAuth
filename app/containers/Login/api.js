import axios from '../../utils/axios';

export const fetchLogin = payload => axios.post(`/auth/login`, payload);
