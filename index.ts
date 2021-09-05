import { render } from './modules/block';
import SignIn from './markup/pages/signin';
import SignUp from './markup/pages/signup';
import Chats from './markup/pages/chats';
import Profile from './markup/pages/profile';
import Page404 from './markup/pages/404';
import Page500 from './markup/pages/500';

console.log(window.location.pathname);

const getComponent = () => {
  try {
    switch (window.location.pathname){
      case '/':
        return new SignIn();
        break;
      case '/signup':
        return new SignUp();
        break;
      case '/chats':
        return new Chats();
        break;
      case '/profile':
        return new Profile();
        break;
      default:
        return new Page404();
        break;
    }
  } catch (error) {
    return new Page500();  
  }
};

const component = getComponent();
render('.app', component);