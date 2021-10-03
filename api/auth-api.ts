import BaseAPI from './base-api';

export interface SignupData {
  first_name: string;
  second_name: string;
  login: string;
  email: string;
  password: string;
  phone: string;
}

export interface LoginData {
  login: string;
  password: string;
}

export type UserData = Omit<SignupData, 'password'> & { avatar: string; display_name: string; };

export class AuthAPI extends BaseAPI {
  constructor() {
    super('/auth');
  }

  signup(data: SignupData): Promise<Response> {
    return this.http.post('/auth/signup', data);
  }

  login(data: LoginData): Promise<Response> {
    return this.http.post('/auth/signin', data);
  }

  logout(): Promise<Response> {
    return this.http.post('/auth/logout');
  }

  read(): Promise<Response> {
    return this.http.get('/auth/user', { withCredentials: true })
  }

  delete: undefined;
  create: undefined;
  update: undefined;
}