abstract class ApiService {
  public _get(url: string) {
    const requestOptions = {
      method: "GET",
    };
    return fetch(url, requestOptions).then(this.handleResponse);
  }

  public _post(url: string, body: any) {
    const requestOptions = {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(body),
    };
    return fetch(url, requestOptions).then(this.handleResponse);
  }

  public _delete(url: string) {
    const requestOptions = {
      method: "DELETE",
    };
    return fetch(url, requestOptions).then(this.handleResponse);
  }

  public _put(url: string, body: any) {
    const requestOptions = {
      method: "PUT",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(body),
    };
    return fetch(url, requestOptions).then(this.handleResponse);
  }

  private handleResponse(response: any) {
    return response.text().then((text: any) => {
      const data = text && JSON.parse(text);

      if (!response.ok) {
        const error = (data && data.message) || response.statusText;
        return Promise.reject(error);
      }

      return data;
    });
  }
}

export default ApiService;
