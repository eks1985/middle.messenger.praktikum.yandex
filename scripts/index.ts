import { render } from '../modules/block';
import SignIn from '../markup/components/signin';
import Profile from '../markup/components/profile';
import Page404 from '../markup/components/404';

console.log(window.location.pathname);

const getComponent = () => {
  switch (window.location.pathname){
    case '/':
      return new SignIn();
      break;
    case '/foo':
      return new Profile();
      break;
    default:
      return new Page404();
      break;
  }
};

const component = getComponent();
render('.app', component);