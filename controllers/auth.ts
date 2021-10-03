import { AuthAPI, LoginData, SignupData, UserData } from "../api/auth-api";
import store from "../modules/store";
import router from '../modules/router';

console.log('router', router);

class AuthController {
  private api: AuthAPI;

  constructor() {
    this.api = new AuthAPI();
  }

  signup(data: SignupData) {
    this.api
      .signup({ data })
      .then(() => {
        return this.fetchUser();
      })
      .catch((err) => {
        store.dispatch({ type: "SET_ERROR", err });
      });
    // try {
    //   await this.api.signup(data);
    //   await this.fetchUser();
    // } catch (error) {
    //   store.dispatch({ type: 'SET_ERROR', error });
    // }
  }

  async login(data: LoginData) {
    try {
      await this.api.login(data);
      await this.fetchUser();
    } catch (error) {
      store.dispatch({ type: "SET_ERROR", error });
    }
  }

  // async logout() {
  //   try {
  //     await this.api.logout();
  //     store.dispatch({ type: "DELETE_USER" });
  //   } catch (error) {
  //     store.dispatch({ type: "SET_ERROR", error });
  //   }
  // }

  logout() {
    this.api
      .logout()
      .then(() => {
        console.log('logout ok');
        store.dispatch({ type: "DELETE_USER" });
        router.go('/');
      })
      .catch((err) => {
        store.dispatch({ type: "SET_ERROR", err });
        console.log('logout not ok');
        router.go('/');
      });
  }

  fetchUser() {
    this.api
      .read()
      .then((user) => {
        store.dispatch({ type: "SET_USER", user });
      })
      .catch((err) => {
        store.dispatch({ type: "SET_ERROR", err });
        store.dispatch({ type: "DELETE_USER" });
      });
  }
}

export default new AuthController();
