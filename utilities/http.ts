
enum METHOD {
  GET = 'GET',
  POST = 'POST',
  PUT = 'PUT',
  DELETE = 'DELETE'
}

type Options = {
  method: METHOD,
  data?: any,
  headers?: Record<string, any>,
};

class HTTPTransport {

  get = (url: string, options: Options = { method: METHOD.GET }): Promise<XMLHttpRequest> => {
    return this.request(url + this.queryStringify(options.data), {...options, method: METHOD.GET});
  };
  put = (url: string, options: Record<string, any> = {}): Promise<XMLHttpRequest> => {
    return this.request(url, {...options, method: METHOD.PUT});
  };
  post = (url: string, options: Record<string, any> = {}): Promise<XMLHttpRequest> => {
    return this.request(url, {...options, method: METHOD.POST});
  };
  delete = (url: string, options: Record<string, any> = {}): Promise<XMLHttpRequest> => {
    return this.request(url, {...options, method: METHOD.DELETE});
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

  request = (url: string, options: Options = { method: METHOD.GET }): Promise<XMLHttpRequest> => {

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

      if (method === METHOD.GET || !data) {
        xhr.send();
      } else {
        xhr.send(data);
      }

    });
      
  };
}

export default HTTPTransport;

