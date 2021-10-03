
enum METHOD {
  GET = 'GET',
  POST = 'POST',
  PUT = 'PUT',
  DELETE = 'DELETE'
}

type Options = {
  method?: METHOD,
  data?: any,
  headers?: Record<string, any>,
  withCredentials: boolean,
};

class HTTPTransport {

  static API_URL = 'https://ya-praktikum.tech/api/v2';
  protected endpoint: string;

  constructor(endpoint: string) {
    this.endpoint = `${HTTPTransport.API_URL}${endpoint}`;
  }

  get = (endpoint: string, options: Options = { method: METHOD.GET }): Promise<Response> => {
    return this.request(`${HTTPTransport.API_URL}${endpoint}` + this.queryStringify(options.data), {...options, method: METHOD.GET});
  };
  put = (endpoint: string, options: Record<string, any> = {}): Promise<Response> => {
    return this.request(`${HTTPTransport.API_URL}${endpoint}`, {...options, method: METHOD.PUT});
  };
  post = (endpoint: string, options: Record<string, any> = {}): Promise<Response> => {
    return this.request(`${HTTPTransport.API_URL}${endpoint}`, {...options, method: METHOD.POST});
  };
  delete = (endpoint: string, options: Record<string, any> = {}): Promise<Response> => {
    return this.request(`${HTTPTransport.API_URL}${endpoint}`, {...options, method: METHOD.DELETE});
  };

  queryStringify(data: Record<string, string>): string {
    if (!data) {
      return '';
    }
    if (Object.prototype.toString.call(data) !== "[object Object]") {
      throw new Error('Data must be object');
    }
    const str: Array<string> = [];
    for (const p in data)
      if (data.hasOwnProperty(p)) {
        str.push(p + "=" + data[p]);
      }
    const res = '?' + str.join("&");
    return res;
  }

  request = (url: string, options: Options = { method: METHOD.GET }): Promise<Response> => {

    const { method, data, headers } = options;
    
    return new Promise((resolve, reject) => {

      const xhr: XMLHttpRequest = new XMLHttpRequest();
      xhr.open(method, url);

      if (headers) {
        Object.keys(headers).forEach(headerKey => {
          xhr.setRequestHeader(headerKey, headers[headerKey]);
        })
      }

      xhr.onload = function() {
        if (xhr.status >= 200 && xhr.status <= 299) {
          resolve(xhr);
        } else {
          reject();
        }
      }

      xhr.onabort = reject;
      xhr.onerror = reject;
      xhr.ontimeout = reject;

      xhr.setRequestHeader('Content-Type', 'application/json');

      xhr.withCredentials = true;
      xhr.responseType = 'json';

      if (method === METHOD.GET || !data) {
        xhr.send();
      } else {
        xhr.send(JSON.stringify(data));
      }

    });
      
  };
}

export default HTTPTransport;

