import qs from 'qs'

import store from 'redux/store';
import { StorageService } from 'services'
import { setLoading } from 'redux/actions/app'
import { filterNonNull } from 'helpers';

export class HttpService {
  static request (method, path, data, options = {}) {
    const requestUrl = `${process.env.REACT_APP_API_URL}/${path}`

    const headers = new Headers({
      'Content-Type': 'application/json',
      'Access-Control-Allow-Origin': '*'
    });

    if (!options.noToken) {
      const token = StorageService.get('token')

      if (token) headers.append("Authorization", `Bearer ${token}`);
    }

    const fetchOptions = {
      method,
      headers
    }

    if (data) {
      fetchOptions.body = JSON.stringify(data)
    }

    try {
        store.dispatch(setLoading(true))
        return fetch(requestUrl, fetchOptions)
          .then(res => {
            return res.json()
              .then(json => {
                if (res.status === 401) {
                  return Promise.reject({ status: 401 })
                }
                if (res.status >= 200 && res.status < 300) {
                  return Promise.resolve(json)
                } else {
                  return Promise.reject(json)
                }
              })
              .catch((e) => {
                return Promise.reject(e)
              })
              .finally(() => {
                store.dispatch(setLoading(false))
              })
          })
          .catch((e) => {
            return Promise.reject(e)
          })
          .finally(() => {
            store.dispatch(setLoading(false))
          })
    } catch (e) {
      return Promise.reject(e)
    }
  }

  static async get(path, search = {}, options) {
    const queryString = qs.stringify(filterNonNull(search))

    return await HttpService.request('get', path + `?${queryString}`, options)
  }

  static async post(path, data, options) {
    return await HttpService.request('post', path, data, options)
  }

  static async delete (path, search, options) {
    const queryString = qs.stringify(filterNonNull(search))

    return await HttpService.request('delete', path + `?${queryString}`, search, options)
  }

  static async put(path, data, options) {
    return await HttpService.request('put', path, data, options)
  }

  static async patch(path, data, options) {
    return await HttpService.request('patch', path, data, options)
  }
}