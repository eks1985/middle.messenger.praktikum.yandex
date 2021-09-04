import { render } from '../modules/block';
import SignIn from '../markup/components/signin';
import Profile from '../markup/components/profile';

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
      return new Profile();
      break;
  }
};

const component = getComponent();
render('.app', component);