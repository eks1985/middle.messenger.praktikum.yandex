import { render } from './modules/block';
import SignIn from './markup/pages/signin';
import SignUp from './markup/pages/signup';
import Chats from './markup/pages/chats';
import Profile from './markup/pages/profile';
import ChangePwd from './markup/pages/change-pwd';
import Page404 from './markup/pages/404';
import Page500 from './markup/pages/500';

let loggedin;
if (window.sessionStorage) {
  loggedin = window.sessionStorage.getItem('loggedin');
}

const getComponent = () => {
  // try {
    switch (window.location.pathname){
      case '/':
        return loggedin ? new Chats() : new SignIn();
        break;
      case '/signup':
        return new SignUp();
        break;
      case '/chats':
        break;
      case '/profile':
        return new Profile();
        break;
      case '/change-pwd':
        return new ChangePwd();
        break;
      default:
        return new Page404();
        break;
    }
  // } catch (error) {
  //   return new Page500();  
  // }
};

const component = getComponent();
render('.app', component);

// const login = document.getElementById('login');
// console.log(document.getElementById('foo').htmlFor);
// const matches = document.body.querySelectorAll('[validation-required]');

// console.log('matched', matches);