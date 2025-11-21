import axios, { AxiosInstance } from 'axios';


const url = "http://localhost:8081"

export function setupApiClient(): AxiosInstance {
  const api = axios.create({
    baseURL: url,
  });

  api.interceptors.request.use(async (config) => {
    // const token = getCookieJWT();

    // if (token && token !== null) {
    //   if (config.headers) {
    //     config.headers.Authorization = `Bearer ${token}`;
    //   }
    // }
    return config;
  });

  api.interceptors.response.use(
    (response) => Promise.resolve(response),
    async (error) => {
      if (error.response && error.response.status === 401 && error.response.data) {
        await {}
      }
      else if (error.response && error.response.status === 432 && error.response.data) {
        // signOutNotRedirect();
      }
      else if (error.response && error.response.status === 403 && error.response.data) {

        // redirectToNoAuth();
      }

      if (!error.response || !error.response.status) {
        return Promise.reject({
          status: 'offline',
          message: 'A aplicação está em manutenção no momento, tente novamente mais tarde'
        });
      }

      return Promise.reject(error.response.data);
    },
  );

  return api;
}

// function redirectToNoAuth() {
//   try {
//     // console.log('AQUII222')
//     Router.push('/noAuthorization');
//   } catch (error) {
//     // console.log('AQUII', error)

//   }
// }
