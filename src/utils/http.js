import axios from 'axios';

export const post = (url, payload = {}, headers = {}) => {
  return axios.post(url, payload, headers)
      .then(({data}) => data)
      .then(response => ({
        ...response.data,
        success: response.data.state === 'SUCCESS',
      }))
      .catch();
};

export async function get(url) {
  return await axios.get(url)
      .then(({data}) => data)
      .then(response => {
        return ({
          ...response.data,
          success: response.data.state === 'SUCCESS',
        });
      })
      .catch(err => {
        return ({
          ...err.error,
          success: err.data.state === 'FAILED',
        });
      });
}

export function wrapPayload(data) {
  return {
    data: data,
    context: {
      // TODO: add user auth token
    },
    fields: [],
  }
}


