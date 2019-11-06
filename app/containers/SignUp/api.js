import axios from '../../utils/axios';

export const registerApi = payload => axios.post(`/auth/register`, payload);
