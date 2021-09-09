
type Methods = {
  GET: string,
  PUT: string,
  POST: string,
  DELETE: string,
}

class HTTPTransport {

  static METHODS: Methods = {
    GET: 'GET',
    PUT: 'PUT',
    POST: 'POST',
    DELETE: 'DELETE',
  };

  get = (url: string, options: Record<string, any> = {}): Promise<XMLHttpRequest> => {
    return this.request(url + this.queryStringify(options.data), {...options, method: HTTPTransport.METHODS.GET});
  };
  put = (url: string, options: Record<string, any> = {}): Promise<XMLHttpRequest> => {
    return this.request(url, {...options, method: HTTPTransport.METHODS.PUT});
  };
  post = (url: string, options: Record<string, any> = {}): Promise<XMLHttpRequest> => {
    return this.request(url, {...options, method: HTTPTransport.METHODS.POST});
  };
  delete = (url: string, options: Record<string, any> = {}): Promise<XMLHttpRequest> => {
    return this.request(url, {...options, method: HTTPTransport.METHODS.DELETE});
  };

  queryStringify(data: Record<string, string>): string {
    if (!data) {
      return '';
    }
    if (typeof data !== 'object') {
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

  request = (url: string, options: Record<string, any>): Promise<XMLHttpRequest> => {

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
        resolve(xhr);
      }

      xhr.onabort = reject;
      xhr.onerror = reject;
      xhr.ontimeout = reject;

      if (method === HTTPTransport.METHODS.GET || !data) {
        xhr.send();
      } else {
        xhr.send(data);
      }

    });
      
  };
}

export default HTTPTransport;

