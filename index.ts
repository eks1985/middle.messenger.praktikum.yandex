import Router from './modules/router';
import SignIn from './markup/pages/signin';
import SignUp from './markup/pages/signup';
import Chats from './markup/pages/chats';
import Profile from './markup/pages/profile';
import ChangePwd from './markup/pages/change-pwd';
import Page404 from './markup/pages/404';
import Store from './modules/store';

const store = new Store();
store.incFoo();
const router = new Router('.app', store);

router
  .use('/', SignIn)
  .use('/sign-up', SignUp)
  .use('/settings', Profile)
  .start();

export default router;