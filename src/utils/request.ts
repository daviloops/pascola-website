import axios from 'axios';

require('es6-promise').polyfill();

/**
 * Base adapter.
 * @param  {object} - A data object received from the request
 * @return {object} - Returns the data inside and object
 */
export function baseAdapter({ data, status }) {
  return { data, status };
}

/**
 * Requests a URL, returning a promise
 * @param {string} url - The URL we want to request
 * @param {object} [options] - The options we want to pass to "axios"
 * @property {string} [options.method] - The request method 'GET', POST', 'PUT', 'PATCH', 'DELETE'.
 * @property {object} [options.body] - The request payload.
 * @property {object} [options.headers] - The request headers. 'Content-Type'.
 * @param {string} baseUrl - The base URL used to call the API service
 * @param {function} adapter - The callback to decide which properties of response must be returned.
 * @return {object} - An object containing either "data" or "err"
 */
export default function request(
  url,
  options = {},
  baseUrl = process.env.NEXT_PUBLIC_API_URL,
  adapter = baseAdapter
) {
  const _options = {
    url,
    crossDomain: true,
    baseURL: baseUrl,
    method: options.method || 'GET',
    data: options.body || options.data || {},
    headers: {
      'Content-Type': 'application/json',
      ...options.headers,
    },
  };  

  return axios.request(_options).then(res => adapter(res)).catch(error => console.error(error));
}
