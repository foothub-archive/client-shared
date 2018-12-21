import store from './vuex-store';
import { TOKEN_G } from './vuex-store/constants/auth';

function preRequestAuth(config) {
  const token = store.getters[TOKEN_G];
  if (token) {
    config.headers.common.Authorization = `JWT ${token}`; // eslint-disable-line no-param-reassign
  }
  return config;
}

function registerInterceptors(clients) {
  clients.forEach(client => client.interceptors.request.use(preRequestAuth));
}

export default registerInterceptors;
