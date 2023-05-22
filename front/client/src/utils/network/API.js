import axios from 'axios';

/**
 * Api класс для отправки запросов на сервер
 */
class Api {
  /**
   * Создание нового экземпляра Api
   */
  constructor(
  ) {
    this.instance = axios.create({
      withCredentials: true,
      baseURL: 'http://localhost:8082',
      mode: 'cors',
      headers: {
        'X-Requested-With': 'XMLHttpRequest',
      },
    });

    /**
     * Отправка Post запроса
     * @param {string} url
     * @param {any} data
     * @param {AxiosRequestConfig<any>||{}} config
     * @return {Promise<AxiosResponse<any>>}
     */
    this.post = async (url, data = {}, config = {}) => this.instance.post(url, data, config);
  }
}

export default new Api;
