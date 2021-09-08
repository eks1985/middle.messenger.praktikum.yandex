

class HTTPTransport {

  static METHODS = {
    GET: 'GET',
    PUT: 'PUT',
    POST: 'POST',
    DELETE: 'DELETE',
  };

  get = (url, options = {}) => {
    return this.request(url + this.queryStringify(options.data), {...options, method: HTTPTransport.METHODS.GET}, options.timeout);
  };
  put = (url, options = {}) => {
    return this.request(url, {...options, method: HTTPTransport.ETHODS.PUT}, options.timeout);
  };
  post = (url, options = {}) => {
    return this.request(url, {...options, method: HTTPTransport.METHODS.POST}, options.timeout);
  };
  delete = (url, options = {}) => {
    return this.request(url, {...options, method: HTTPTransport.METHODS.DELETE}, options.timeout);
  };

  queryStringify(data) {
    if (!data) {
      return '';
    }
    if (typeof data !== 'object') {
      throw new Error('Data must be object');
    }
    const str = [];
    for (const p in data)
      if (data.hasOwnProperty(p)) {
        str.push(p + "=" + data[p]);
      }
    const res = '?' + str.join("&");
    return res;
  }

  request = (url, options) => {

    const { method, data, headers } = options;
    return new Promise((resolve, reject) => {

      const xhr = new XMLHttpRequest();
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

      if (method === METHODS.GET || !data) {
        xhr.send();
      } else {
        xhr.send(data);
      }

    });
      
  };
}

export default HTTPTransport;

